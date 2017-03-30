/**
 * Created by mpbil on 3/28/2017.
 */
let pool = require('../connection/connection');

let getAllAddresses=function () {
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            connection.query("SELECT * FROM addresses;",function (err, results, fields) {
                resolve(results);
            });
        });
    });
};
let getAddressById=function ({id}) {
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            connection.query("SELECT * FROM addresses WHERE id=?;",[id],function (err, results, fields) {
                resolve(results);
            });
        });
    });
};