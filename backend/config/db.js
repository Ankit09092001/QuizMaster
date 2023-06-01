const mysql = require('mysql2')

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"2020btecs00019",
    password:"",
});

module.exports = pool.promise();