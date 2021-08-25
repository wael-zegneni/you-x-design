
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
const workshop = require('./routes/workshop')
const course = require('./routes/coursers')
const cors = require("cors");
const path = require("path");

app.use(express.json())


const directory = path.join(__dirname, "/public");
// middlewares
app.use("/public", express.static(directory));
app.use(cors())

app.get('/',(req,res)=>{
    res.send('<h1>you x design</h1>')
})
app.use('/api/v1/user', /*passport.authenticate('jwt', {session: false}),*/ users)
app.use('/api/v1/auth', auth)
app.use('/api/v1/candidate', candidates)
app.use('/api/v1/workshop',workshop)
app.use('/api/v1/course', course)

app.disable("etag")


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