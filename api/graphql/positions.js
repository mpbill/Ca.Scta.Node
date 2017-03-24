let pool = require('../connection/connection');

let getAllPositions = function (args,request,resp) {
    return new Promise(function (resolve,reject) {
        pool.getConnection((err,connection)=>{
            connection.query("SELECT * FROM positions",(err,results,fields)=>{
                connection.release();
                resolve(results);
            })
        })
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

module.exports = {
    getAllPositions:getAllPositions,
    getPositionById:getPositionById,
    updatePosition:updatePosition,
    deletePosition:deletePosition,
    createPosition:createPosition
};