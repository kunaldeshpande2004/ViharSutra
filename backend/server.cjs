const express = require('express')
require('dotenv').config()
const port = process.env.PORT;
const User= require('./UserSchema.cjs')
require('./mongoDB.cjs')
const cors = require('cors')
const server = express()
const {
    signup,
    login
  
} = require('./controller/Authcontroller.cjs')

const {
    signupvalidation,
    loginValidation
} = require('./middlewares/AuthValidation.cjs')

const {
    Find ,
    Set
}= require('./middlewares/Trips.cjs')
server.use(cors())
server.use(express.json()); 

server.post('/signup',signupvalidation,signup)
server.post('/login',loginValidation,login)
server.post('/trips',Find)
server.post('/setTrips',Set)

server.listen(port,()=>{
    console.log('running at port ', port)
});
