'use strict';
const util = require('util');
const mysql = require('mysql');

const db = require('../../database/db');

module.exports = {
    get: (req, res) =>{
        let sql = 'SELECT * FROM customers'
        db.query(sql, (err, rows) =>{
            if(err) throw err
            res.json(rows)
        })
    },

    getCustomersById: (req, res) =>{
        let customer_id = req.params.id
        let sql = 'SELECT * FROM customers WHERE id=?'
        db.query(sql, customer_id, (err, rows) =>{
            if(err) throw err
            res.json(rows)
        })
    }
}