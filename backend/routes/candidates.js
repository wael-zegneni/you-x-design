const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {uploadCv} = require('../middlewares/fileStorageEngine')

const {addCandidate,getCandidateById,getCandidates} = require ('../controllers/CandidateController')

router.post('/',[
    // [body('name','please enter your full name').notEmpty(),
    // body('email','please provide a valid email').isEmail(),
    // body('phone','please provide a valid phone number').isNumeric(),
    // body('residence').optional(),
    // body('age','please enter a valid age').isNumeric(),
    // body('job').optional(),
    // body('bio','bio must be at least 20 caracters').isLength({min:20}).optional(),
    // body('school').optional(),
    // body('degree','please enter your degree').notEmpty()],
    uploadCv.single('cv')
],addCandidate)
router.get('/', getCandidateById),
router.get('/all', getCandidates)


module.exports = router