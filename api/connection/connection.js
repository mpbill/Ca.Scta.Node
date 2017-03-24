/**
 * Created by mpbil on 3/15/2017.
 */
var mysql = require('mysql');
module.exports = mysql.createPool({
    connectionLimit : 2,
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'password',
    database: 'scta'
});
