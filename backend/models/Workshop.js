const mongoose = require('mongoose')

const workshopSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        required : true,
    },
    endDate : {
        type : Date,
        required : true,
    },
    maxAtt : int,
    currentAtt : int,
    link : {
        type : String,
        required : true,
    },
    instructor : {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }

})
module.exports = mongoose.model('workshop', workshopSchema)