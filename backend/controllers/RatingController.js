const Rating = require('../models/Rating')
const Course = require('../models/Course')

const addRating = async (req,res) => {
    const existingRating = await Rating.findOne({user : req.body.user, course: req.body.course})
    // 
    console.log('existing rating : ', existingRating)

    if (existingRating){  
        Rating.deleteOne({_id : existingRating._id}, async function(err){
            let course = await Course.findById(req.body.course)
            console.log('course : ', course)
            if (!err && course) {
                await course.ratings.pull(existingRating._id)
                await course.save()
                console.log('course deleted')
            }
            else {
                console.log(err);
            }  
            })
    
    }
    const rating = new Rating({
        rating : req.body.rating,
        user : req.body.user,
        course : req.body.course,
    })
    console.log("rating : ",rating)
    let course = await Course.findById(req.body.course)
    console.log(rating._id)
    await course.ratings.push(rating._id)
    await rating.save()
    await course.save()
    res.send(rating)
    
}

module.exports = {
    addRating,
}