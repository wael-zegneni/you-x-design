const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    email : {
        type: String,
        required: [true, 'must provide email'],
    },
    password : {
        type : String,
        required : [true, 'must provide password'],
    },
    userName : {
        type : String,
        required : [true, 'must provide user name'],
    },
    phone : Number,
    role : {
        type : String,
        required : true 
    },
    avatar : String,
    residence : String,
    age: Number,
    bio : String,
    career : String,
    school: String,
    degree: String,
    followers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ],
    courses: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'course'
        }
    ],
    facebook: String,
    linkedin: String,
    instagram: String
    


})

module.exports = mongoose.model('user',UserSchema)