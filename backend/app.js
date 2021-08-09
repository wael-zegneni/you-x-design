
const express = require('express');
const app = express()
const port = 3000
const connectDB = require('./helpers/connect')
require('dotenv').config()
app.get('/',(req,res)=>{
    res.send('<h1>you x design</h1>')
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