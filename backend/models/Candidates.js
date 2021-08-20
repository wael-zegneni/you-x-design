const mongoose = require('mongoose')

const CandidateSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'must provide your full name'],

    },
    email : {
        type: String,
        required: [true, 'must provide email'],
    },
    phone : {
        type: Number,
        required: [true, 'must provide a phone number']
    },
    residence : String,
    age: Number,
    job : {
        type: String,
        required: [true, 'must provide a job title'],
    },
    cv: String,
    bio: String,
    school: String,
    degree: {
        type: String,
        required: [true, 'must provide a degree'],
    },
    facebook: String,
    linkedin: String,
    instagram: String


})
module.exports = mongoose.model('candidate',CandidateSchema)