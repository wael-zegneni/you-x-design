const mongoose = require ("mongoose");

const CommentSchema = new mongoose.Schema({
    content : { type :String,
        required : true,
    },
    date : Date,
    istestimonial : Boolean,
    user : {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    course : {
        type: mongoose.Types.ObjectId,
        ref: 'course'
    }

})

module.exports = mongoose.model('comment',CommentSchema)