let mysql = require('mysql');
let fs = require('fs');
let crypto = require('crypto');
let path = require('path');
let configJson = fs.readFileSync("./change-log.json");
let config = JSON.parse(configJson);



let checkIfMigrationsTableExists =()=> new Promise(function (resolve, reject) {
    let connection = mysql.createConnection(config.dbConfig);
    connection.connect();
    connection.query("SELECT * FROM mysql_migrations", function (err, results, fields) {
        connection.end();
        if (err) {
            resolve();
        }
        else {
            reject();
        }

    });
});

let md5aFile = (changeSetDir,fileName)=> new Promise(function (resolve, reject) {
    let filePath = path.resolve(__dirname,changeSetDir,fileName);
    let file = fs.readFile(filePath,function (err, data) {
        if(err){
            reject();
        }
        let hash = crypto.createHash('md5').update(data).digest("hex");
        resolve({fileName:fileName,md5:hash});
    });
});

let md5AllFiles=(config)=>new Promise(function (resolve, reject) {
    let hashPromises=[];
    config.changeSets.forEach((e)=>{
        let upHash = md5aFile(config.changeSetDir,e.up);
        let downHash = md5aFile(config.changeSetDir,e.down);
        hashPromises.push(upHash);
        hashPromises.push(downHash);
    });
    Promise.all(hashPromises).then(values=>resolve(values)).catch(reason=>reject(reason));
});


