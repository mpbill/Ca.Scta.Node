let pool = require('../connection/connection');

let getAllHotlines =()=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,conn)=>{
            conn.query("select * from hotlines",(err,results,fields)=>{
                conn.release();
                resolve(results);
            });
        });
    });
}

let getHotlineById=({id})=>{

}
let createHotline=({hotline})=>{

}
let updateHotline=({id,hotline})=>{

}
let deleteHotline=({id})=>{

}
module.exports={
    getAllHotlines,
    getHotlineById,
    createHotline,
    updateHotline,
    deleteHotline
}