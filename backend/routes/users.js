const express = require('express');
const router = express.Router();
const {uploadAvatar} = require('../middlewares/fileStorageEngine')
const {paginatedResults} = require('../middlewares/pagination')
const User = require('../models/User')


const {
    updateUser,
    deleteUser,
    findUserById,
    getInstructors,
    // getStudents,
    updateProfilePic,
    approveInstructor,
    saveCourse,
    removeProfilePic,
    getInsights,
    } = require ( "../controllers/UserController")

    
router.route('/').get(findUserById);
router.delete('/delete', deleteUser);
router.get('/instructors', getInstructors)
router.patch('/update', updateUser)
router.patch('/updatepic',uploadAvatar.single('avatar') , updateProfilePic)
router.get('/students', paginatedResults(User,24,3), (req, res) => {  
    console.log('paginatedresults ' + res.paginatedResults)
    res.send(res.paginatedResults)  
    })
router.get('/instructorspag', paginatedResults(User,15,4), (req, res) => {  
    console.log('paginatedresults ' + res.paginatedResults)
    res.send(res.paginatedResults)  
    })
router.post('/approve', approveInstructor)
router.post('/saveCourse',saveCourse)
router.patch('/removePic', removeProfilePic)
router.get('/insights',getInsights)

module.exports = router