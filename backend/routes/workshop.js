const express = require('express')
const router = express.Router();

const {addWorkshop, indexWorkshop} = require('../controllers/WorkshopController')
router.route('/').post(indexWorkshop)
router.route('/add').post(addWorkshop)


module.exports = router

