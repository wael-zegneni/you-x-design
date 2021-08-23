const Candidate = require('../models/Candidates')
const { validationResult } = require('express-validator');

const addCandidate = async (req,res) => {

    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    let candidate = await Candidate.findOne({email: req.body.email})
    if(candidate) {
        return res.status(400).json({errors :[{msg: "Email already applied !"}]})
    }else{
    try {
        candidate = new Candidate({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            residence : req.body.residence,
            age : req.body.age,
            job : req.body.job,
            bio : req.body.bio,
            school : req.body.school,
            degree : req.body.degree,
            facebook : req.body.facebook,
            linkedin : req.body.linkedin,
            instagram : req.body.instagram,
            cv: req.file.path
        })
        await candidate.save();
        res.send(candidate)
        
    } catch (error) {
        res.status(400).send(error)
    }
}
}

    module.exports = {
        addCandidate,
    }