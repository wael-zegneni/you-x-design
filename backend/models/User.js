const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
    },
    password : {
        type : String,
        required : true
    },
    userName : String,
    phone : Number,
    role : String,
    avatar : String,
    residence : String,
    age: number,
    followers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ],
    /*courses: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'course'
        }
    ]*/
    


})

module.exports = mongoose.model('user',UserSchema)