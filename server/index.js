import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoute.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.use('/api/v1/auth', userRouter)


const PORT = process.env.PORT
app.listen(PORT, (err) =>{
    console.log('listening at' + PORT);
    
})

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('connected to database');
    
})
.catch((err) =>{
    log(err)
})
