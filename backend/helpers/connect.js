const mongoose = require('mongoose');
const connectionString ="mongodb+srv://yassine:yassine123.@nodeexpressprojects.6njoh.mongodb.net/you-x-design?retryWrites=true&w=majority"
const connectDB=(url)=>{
    mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true})
}
module.exports= connectDB
