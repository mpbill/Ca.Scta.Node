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
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectId;
let url = "mongodb://localhost:27017/scta";

let getAllPositions = function (args,request,resp) {
    return new Promise(function (resolve,reject) {
        pool.getConnection(function (err, connection) {
            console.log(err);
            connection.query("SELECT * FROM positions",function (error, results, fields) {
                connection.release();
                resolve(results);

            });
        });

    });
};
let getPositionById = function ({id}) {
    return new Promise(function (resolve,reject) {
        pool.getConnection(function (err, connection) {
            connection.query("SELECT * FROM positions where id=?",[id],function (error, results, fields) {
                connection.release();
                resolve(results[0]);

            });
        });

    });
};
let updatePosition = function ({position}) {
    console.log(position._id);
    return new Promise(function (resolve,reject) {
        pool.getConnection(function (err, connection) {
            connection.query("update positions set positionName=?,positionEmail=?,volunteerName=? WHERE id=?",[position.positionName,position.positionEmail,position.volunteerName,id],function (error, results, fields) {
                connection.release();
                resolve(position);
            });
        });
    });
};
let deletePosition = function({id}){
    return new Promise(function (resolve,reject) {
        pool.getConnection(function (err, connection) {
            connection.query("delete from positions where id=?;",[id],function (error, results, fields) {
                connection.release();
                resolve();
            });
        });
    });
};
let createPosition = function({position}){
    return new Promise(function (resolve,reject) {
        pool.getConnection(function (err, connection) {
            connection.query("insert into positions (positionName,positionEmail,volunteerName) values (?,?,?);",[position.positionName,position.positionEmail,position.volunteerName],function (error, results, fields) {
                connection.release();
                position.id=results.insertId;
                console.log(error);
                console.log(results);
                resolve(position);
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
  id:Int!
  positionName:String!
  volunteerName:String!
  positionEmail:String!
  
}
input PositionUpdateInput{
  id:Int!
  positionName:String!
  volunteerName:String!
  positionEmail:String!
}
input NewPositionInput{
  positionName:String!
  volunteerName:String!
  positionEmail:String!
}
type Query {
  getAllPositions : [Position]
  getPositionById(id:Int!):Position
}
type Mutation {
  updatePosition(position:PositionUpdateInput!) : Position
  createPosition(position:NewPositionInput!):Position
  deletePosition(id:Int!):String
}
`);
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
