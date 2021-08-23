const { findById } = require('../models/Workshop');
const Workshop = require('../models/Workshop')

const addWorkshop = async (req,res)=> {
    try {
        workshop = new Workshop({
            title : req.body.title,
            description : req.body.description,
            date : req.body.date,
            endDate : Date.now(),
            maxAtt : req.body.maxAtt,
            link : req.body.link,
        })
        console.log(workshop)
        await workshop.save();
        return res.send(workshop)
    } catch (error) {
        res.status(400).send(error)
    }
}

const indexWorkshop = async (req,res) => {
    const workshops = await Workshop.find()
    console.log(workshops)
    return res.send(workshops)
}

module.exports = {
    addWorkshop,
    indexWorkshop,
}
