const express = require('express');
const router = express.Router();
const {uploadAvatar} = require('../middlewares/fileStorageEngine')


const {
    updateUser,
    deleteUser,
    findUserById,
    getInstructors,
    getStudents,   
    } = require ( "../controllers/UserController")

    
router.route('/').get(findUserById);
router.delete('/delete', deleteUser);
router.get('/instructors', getInstructors)
router.patch('/update',uploadAvatar.single('avatar') , updateUser)
router.get('/students', getStudents)

module.exports = router