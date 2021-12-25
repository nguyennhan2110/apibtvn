'use strict';
const util = require('util');
const mysql = require('mysql');

const db = require('../../database/db');

module.exports = {
    get: (req, res) =>{
        let sql = 'SELECT * FROM employees'
        db.query(sql, (err, rows) =>{
            if(err) throw err
            res.json(rows)
        })
    },

    getEmployeesById: (req, res) =>{
        let employee_id = req.params.id
        let sql = 'SELECT * FROM employees WHERE id=?'
        db.query(sql, employee_id, (err, rows) =>{
            if(err) throw err
            res.json(rows)
        })
    }
}