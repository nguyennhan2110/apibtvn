const express = require('express')
const router = express.Router()

const customersServices = require('../servers/customers/customers.service')

router.use('/delete/:id', customersServices.deleteCustomerById)
router.use('/update', customersServices.updateCustomer)
router.use('/create', customersServices.addNewCustomer)
router.use('/:id', customersServices.getCustomersById)
router.use('/', customersServices.get)

module.exports = router




