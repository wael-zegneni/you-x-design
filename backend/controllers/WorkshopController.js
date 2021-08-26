const Workshop = require('../models/Workshop')

const addWorkshop = async (req,res)=> {
    let workshop = await Workshop.findOne({ title : req.body.title})
    if (workshop) {
        res.status(400).send('workshop already exists')
    } else {
        
    
    try {
        workshop = new Workshop({
            title : req.body.title,
            description : req.body.description,
            date : req.body.date,
            endDate : req.body.endDate,
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
}

const indexWorkshop = async (req,res) => {
    const workshops = await Workshop.find().sort('date')
    console.log(workshops)
    return res.send(workshops)
}
const liveSession = async(req,res) => {
    try {
        
    
    const livesession= await Workshop.aggregate([
        {
            $project : {
                date : 1,
                title : 1,
                description : 1,
                date : 1,
                endDate : 1,    
                maxAtt : 1,
                link : 1,
                difference : {
                    $abs : {
                        $subtract : [new Date(), "$date"]
                    }
                }
            }
        },
        {
            $sort : {difference : 1}
        },
        {
            $limit : 1
        }
        ]);
        return res.send(livesession)
    } catch (error) {
        res.status(400).send(error)
    }
        
}

module.exports = {
    liveSession,
    addWorkshop,
    indexWorkshop,
}
