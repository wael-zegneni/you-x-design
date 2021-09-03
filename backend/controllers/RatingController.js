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
                console.log('rating deleted')
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
    let coursex = await Course.findById(req.body.course).populate('ratings')
    if(coursex.ratings.length){
    var sum = 0
    for ( var i = 0 ; i< coursex.ratings.length; i++){
        sum = sum + coursex.ratings[i].rating
    }
    Course.updateOne({_id : req.body.course},{avgRating : sum/coursex.ratings.length },(err,result)=>{
        if (!err) {
            console.log('avgrating : ' + result)
        } else {
            console.log(err)
        }
    })
    // course.avgRating = sum/course.ratings.length
    }
    res.send( rating )
    
}
module.exports = {
    addRating,
}