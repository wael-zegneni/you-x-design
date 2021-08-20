
const express = require('express');
const app = express()
const port = 4000
const connectDB = require('./helpers/connect')
require('dotenv').config()
require('./middlewares/passport-config')
const users = require('./routes/users')
const auth = require('./routes/auth')
const candidates = require ('./routes/candidates')
const passport = require('passport')
const multer = require('multer')
const upload = require('./middlewares/fileStorageEngine')
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>you x design</h1>')
})
app.use('/api/v1/user', passport.authenticate('jwt', {session: false}), users)
app.use('/api/v1/auth', auth)
app.use('/api/v1/candidate', candidates)

app.post('/upload',upload.single('image'),(req,res)=>{
    console.log(req.file);
    res.send('upload successfull !');
})

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}`)
        })

    } catch (error) {
        console.log(error)
    }
}
start()