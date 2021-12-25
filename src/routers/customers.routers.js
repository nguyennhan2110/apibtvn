const express = require('express')
const router = express.Router()

const customersServices = require('../servers/customers/customers.service')

router.use('/', customersServices.get)
router.use('/:id', customersServices.getCustomersById)

module.exports = router


// module.exports = (app) => {
//     const customersServices = require('../servers/customers/customers.service')

//     app.route('/')
//         .get(customersServices.get);

//     apps.route('/:id')
//         .get(customersServices.getCustomersById);
// }   

