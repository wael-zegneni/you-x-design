

exports.paginatedResults = function(model, limit, query){
    return async (req, res, next) => {
      const page = parseInt(req.query.page)
      let count=0
      switch (query) {
        case 1:
          count=await model.countDocuments()
          break;
        case 2:
          count=await model.countDocuments()
          break;
        case 3:
          count=await model.countDocuments({role : "student"})
          break;
        case 4:
          count=await model.countDocuments({role : "instructor"}) 
        default:
          break;
      }
      console.log('count' + count)
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
  
      const results = {}
  
      if (endIndex < count) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
      }
      try {
          results.limit = limit
          results.page = page
          switch (query) {
            case 1:              
              results.totalelements = await model.countDocuments()
              results.total = Math.ceil((await model.countDocuments()) / limit)   
              results.results = await model.find().populate('instructor').limit(limit).skip(startIndex).exec()
              break;
            case 2:              
              results.totalelements = await model.countDocuments()
              results.total = Math.ceil((await model.countDocuments()) / limit)
              results.results = await model.find().limit(limit).skip(startIndex).exec()
              break;
            case 3:              
              results.totalelements = await model.countDocuments({role : "student"})
              results.total = Math.ceil((await model.countDocuments({role : "student"})) / limit)
              results.results = await model.find({role : "student"}).limit(limit).skip(startIndex).exec()
              break;
            case 4:              
              results.totalelements = await model.countDocuments({role : "instructor"})
              results.total = Math.ceil((await model.countDocuments({role : "instructor"})) / limit)
              results.results = await model.find({role : "instructor"}).limit(limit).skip(startIndex).exec()
            default:
              break;
          }                 
          res.paginatedResults = results
        
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
    next()
}
}