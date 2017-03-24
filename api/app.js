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
let schema = require("./schema/schema");


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
let root = Object.assign(
    require('./graphql/positions'),
    require('./graphql/hotlines')
);


app.use('/graphql',graphHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

module.exports = app;
