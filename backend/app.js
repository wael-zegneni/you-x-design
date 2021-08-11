
const express = require('express');
const app = express()
const port = 4000
const connectDB = require('./helpers/connect')
require('dotenv').config()
require('./middlewares/passport-config')
const users = require('./routes/users')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>you x design</h1>')
})
app.use('/api/v1/user', users)


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