'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'northwind'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = db;