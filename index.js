const express = require('express')
const mongoose = require('mongoose')
const { addListener } = require('./Models/Users')
const url = 'mongodb://localhost/kisan'

const index = express()
index.use(express.json())
mongoose.connect(url , {useNewUrlParser:true})

const con = mongoose.connection

con.on('open' , function(){
    console.log('connected ..')
})

const userroute = require('./routes/user')
index.use('/user' , userroute)

const postsroute = require('./routes/posts')
index.use('/posts' , postsroute)

const foodroute = require('./routes/food_requirement')
index.use('/food' , foodroute)

const medicalroute = require('./routes/medical')
index.use('/medical' , medicalroute)

index.listen(9000 , () =>{
    console.log('server Started')
})