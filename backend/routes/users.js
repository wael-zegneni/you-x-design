const express = require('express');
const router = express.Router();
const {uploadAvatar} = require('../middlewares/fileStorageEngine')


const {
    updateUser,
    deleteUser,
    findUserById,
    getInstructors,
    getStudents,
    updateProfilePic,
    approveInstructor,
    saveCourse,   
    } = require ( "../controllers/UserController")

    
router.route('/').get(findUserById);
router.delete('/delete', deleteUser);
router.get('/instructors', getInstructors)
router.patch('/update', updateUser)
router.patch('/updatepic',uploadAvatar.single('avatar') , updateProfilePic)
router.get('/students', getStudents)
router.post('/approve', approveInstructor)
router.post('/saveCourse',saveCourse)

module.exports = router