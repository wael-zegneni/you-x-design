const mongoose = require('mongoose')

const RatingSchema = new mongoose.Schema({
    rating : Number,
    user : {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    course : {
        type: mongoose.Types.ObjectId,
        ref: 'course'
    }
})

module.exports = mongoose.model('rating', RatingSchema)