const express = require('express');
const router = express.Router();
const {uploadAvatar} = require('../middlewares/fileStorageEngine')


const {
    updateUser,
    deleteUser,
    getUser,
    getInstructors,   
    } = require ( "../controllers/UserController")

    
router.route('/').get(getUser).delete(deleteUser);
router.get('/instructors', getInstructors)
router.patch('/update',uploadAvatar.single('avatar') , updateUser)

module.exports = router