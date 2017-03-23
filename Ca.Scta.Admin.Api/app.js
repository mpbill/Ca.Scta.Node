let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let contacts = require('./routes/contacts');
let graphqlModule = require('graphql');
let graphql = graphqlModule.graphql;
let GraphQLSchema = graphqlModule.GraphQLSchema;
let GraphQLObjectType = graphqlModule.GraphQLObjectType;
let GraphQLString = graphqlModule.GraphQLString;
let GraphQLInt = graphqlModule.GraphQLInt;
let buildSchema = graphqlModule.buildSchema;
let graphHTTP = require("express-graphql");
let app = express();
let pool = require('./connection/connection');
let auth = require('./routes/auth');
let jwt = require('jsonwebtoken');
let cors = require('cors');
let getAllPositions = function (args,request,resp) {
    return new Promise(function (resolve,reject) {
        pool.getConnection(function (err, connection) {
            connection.query("SELECT * FROM positions",function (error, results, fields) {
                if(error){
                    reject();
                }
                resolve(results);
                connection.release();

            });

        });
    });
};
let getPositionById = function ({id}) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if(err)
                reject();
            connection.query("SELECT * FROM positions WHERE Id=?",[id],function (error, results, fields) {
                if(error)
                    reject();
                resolve(results[0]);
            });
        });
    });
};
let updatePosition = function ({position}) {
    return new Promise(function (resolve,reject) {
        pool.getConnection(function (err, connection) {
            connection.query(
                "UPDATE positions SET PositionEmail=?, PositionName=?, VolunteerName=? WHERE Id=?;",
                [position.PositionEmail,position.PositionName,position.VolunteerName,position.Id],
                function (error, results, fields) {
                    if(error){
                        reject();
                    }
                    resolve(position);
                    connection.release();

                });

        });
    });
};
let deletePosition = function({id}){
    return new Promise(function (resolve,reject) {
        pool.getConnection(function (err, connection) {
            connection.query(
                "DELETE from positions where Id=?;",
                [id],
                function (error, results, fields) {
                    if(error){
                        reject();
                    }
                    if(results.affectedRows==0){
                        reject();
                    }
                    resolve(id);
                    connection.release();

                });

        });
    });
};
let createPosition = function({position}){
    return new Promise(function (resolve,reject) {
        pool.getConnection(function (err, connection) {
            connection.query(
                "INSERT INTO positions(PositionName,VolunteerName,PositionEmail) VALUES (?,?,?);",
                [position.PositionName,position.VolunteerName,position.PositionEmail],
                function (error, results, fields) {
                    if(error){
                        reject();
                    }
                    if(results.affectedRows==0){
                        reject();
                    }
                    resolve({
                        Id:results.insertId,
                        PositionName:position.PositionName,
                        PositionEmail:position.PositionEmail,
                        VolunteerName:position.VolunteerName
                    });
                    connection.release();

                });

        });
    });
};

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use('/auth',auth);
// app.use(function (req, resp, next) {
//     var token = req.cookies["cascta_token"];
//     jwt.verify(token,'secret',function (err,decoded) {
//         if(!err){
//             req.user = {
//                 id:decoded.userId,
//                 username:decoded.username
//             };
//             next();
//         }
//
//     });
// });

let schema = buildSchema(`
type Position {
  Id:Int!
  PositionName:String!
  VolunteerName:String!
  PositionEmail:String!
  
}
input PositionUpdateInput{
  Id:Int!
  PositionName:String!
  VolunteerName:String!
  PositionEmail:String!
}
input NewPositionInput{
  PositionName:String!
  VolunteerName:String!
  PositionEmail:String!
}
type Query {
  getAllPositions : [Position]
  getPositionById(id:Int!):Position
}
type Mutation {
  updatePosition(position:PositionUpdateInput!) : Position
  createPosition(position:NewPositionInput!):Position
  deletePosition(id:Int!):Int!
}
`);
let Position = {
    Id:0,
    PositionName:"",
    VolunteerName:"",
    PositionEmail:""
};
let root = {
    getAllPositions:getAllPositions,
    getPositionById:getPositionById,
    updatePosition:updatePosition,
    createPosition:createPosition,
    deletePosition:deletePosition

};


app.use('/graphql',graphHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

module.exports = app;
