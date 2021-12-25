const express = require('express')
const router = express.Router()

const employeesService = require('../servers/employees/employees.service')

router.use('/', employeesService.get)
router.use('/:id', employeesService.getEmployeesById)

module.exports = router