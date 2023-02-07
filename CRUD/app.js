
const express= require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
const url= 'mongodb://0.0.0.0/AlienDBex'
const app= express()

mongoose.connect(url, {useNewUrlParser:true})
mongoose.Promise=global.Promise

app.use(express.static('public'))

const con=mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(express.json())

app.use(bodyParser.json());

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () =>{
    console.log('Server started')
})