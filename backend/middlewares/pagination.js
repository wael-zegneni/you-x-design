

exports.paginatedResults = function(model, pop){
    return async (req, res, next) => {
      const page = parseInt(req.query.page)
      const limit = 12
  
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
  
      const results = {}
  
      if (endIndex < await model.countDocuments().exec()) {
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
          if (pop) {
            
            results.results = await model.find().populate(pop).limit(limit).skip(startIndex).exec()
            results.total = Math.ceil((await model.countDocuments()) / limit)
            results.limit = limit
            res.paginatedResults = results
          } else {
            results.results = await model.find().limit(limit).skip(startIndex).exec()
            results.total = Math.ceil((await model.countDocuments()) / limit)
            results.limit = limit
            res.paginatedResults = results
          }
        
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
    next()
}
}