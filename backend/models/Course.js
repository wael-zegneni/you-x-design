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
    rating : Number,
    thumbnail: String,
    url : String,
    content : {
        type : String,
        required : true,
    },
    type : String,
    // category: [
    //     {
    //         type: mongoose.Types.ObjectId,
    //         ref: 'category'
    //     }
    // ]
})

module.exports = mongoose.model('course',CourseSchema)