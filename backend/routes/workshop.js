const express = require('express')
const router = express.Router();

const {addWorkshop, indexWorkshop,liveSession} = require('../controllers/WorkshopController')
router.route('/').get(indexWorkshop)
router.route('/add').post(addWorkshop)
router.route('/livesession').get(liveSession)


module.exports = router

