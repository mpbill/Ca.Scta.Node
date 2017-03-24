var express = require('express');
var router = express.Router();
var pool = require('../connection/connection');
/* GET users listing. */
router.get('/', function(req, res, next) {

  pool.getConnection(function (err, connection) {
      let getContactsCb = function (error, results, fields) {
          res.send(results);
          connection.release();

      };
      connection.query("SELECT * FROM contacts",getContactsCb);

  });
});
router.post('/',function (req, res, next) {
    let body = req.body;

    let contact = {
        City:body.City,
        Email:body.Email,
        Name:body.Name,
        Description:body.Description,
        Position:body.Position
    };
    pool.getConnection(function (err, connection) {
        connection.query("INSERT INTO contacts SET ?",contact,function (error,results,fields) {
            res.send({ContactId:results.insertId});
            connection.release();
        })
    })
});
module.exports = router;

