const express = require("express")
const app=express()
const db=require('./config/database')
const bodyParser=require('body-parser')
// bring ejs template 
app.set ('view engine','ejs')
//bring bodyparser 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//bring static
app.use(express.static('public'))
app.use(express.static('node_modules'))


app.get('/' , (req,res)=> {
    res.send("yemchy mil web ")
})

const events =require('./routes/event-routes')
app.use('/events',events)




app.listen(3000, ()=>{
    console.log('app fl port 3000')
})