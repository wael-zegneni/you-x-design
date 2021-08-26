const express = require('express')
const router = express.Router();

const {addWorkshop,
    indexWorkshop,
    liveSession,
    updateWorkshop,
} = require('../controllers/WorkshopController')
router.route('/').get(indexWorkshop)
router.route('/add').post(addWorkshop)
router.route('/livesession').get(liveSession)
router.route('/update').patch(updateWorkshop)

module.exports = router

