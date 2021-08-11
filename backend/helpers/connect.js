const mongoose = require('mongoose');
const connectDB=(url)=>{
    mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true}).then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
}
module.exports= connectDB
