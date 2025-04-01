const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.MONGO_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('connected to database'))
.catch(err=>console.error('connenction failed',err))

