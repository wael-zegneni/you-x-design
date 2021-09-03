const mongoose = require ("mongoose");

const CourseSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    tags: String,
    language : {
        type : String,
        required : true,
    },
    date : Date,
    views : Number,
    ratings : [{
        type: mongoose.Types.ObjectId,
        ref: 'rating'
    }], 
    avgRating : Number,
    thumbnail: String,
    url : String,
    content : {
        type : String,
        required : true,
    },
    type : String,
    instructor : {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    // category: [
    //     {
    //         type: mongoose.Types.ObjectId,
    //         ref: 'category'
    //     }
    // ]
})

module.exports = mongoose.model('course',CourseSchema)