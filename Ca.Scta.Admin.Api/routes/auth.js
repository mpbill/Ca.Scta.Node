/**
 * Created by mpbil on 3/19/2017.
 */
let express = require('express');
let router = express.Router();
let pool = require('../connection/connection');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let checkIfValid = function (data) {
    return !!(data.username && data.password);

};
let checkIfNewUserIsValid = function (data) {
    return !!(data.username && data.password && data.confirmPassword && data.password===data.confirmPassword);

};
let makeToken = function (user) {
    return jwt.sign({
        expiresIn:60*60,
        username:user.username,
        userId:user.Id
    },'secret');
};
router.post('/login',function (req,resp,next) {
    if(!checkIfValid(req.body)){
        next();
    }
    pool.getConnection(function (err, connection) {
        if(err){
            connection.release();
            next();
        }
        connection.query('SELECT * FROM users WHERE username=? limit 1;',[req.body.username],function (err, results, fields) {
            let user = results[0];
            bcrypt.compare(req.body.password,user.password,function (err, res) {
                if(res){
                    let token = makeToken(user);
                    resp.cookie('cascta_token',token);
                    resp.send(200);
                }
                else{
                    next();
                }
            })
        });

    });
});
router.post('/createUser',function (req,resp,next) {
    if(!checkIfNewUserIsValid(req.body)){
        next();
    }
    bcrypt.genSalt(10,function (err,salt) {
        bcrypt.hash(req.body.password,salt,function (err,hash) {
            pool.getConnection(function (err, connection) {
                if(err){
                    connection.release();
                    next();
                }
                connection.query('INSERT INTO users(username,password) VALUES (?,?);',[req.body.username,hash],function (err, results, fields) {
                    resp.send(200);

                });
            });
        })
    })

});




module.exports = router;