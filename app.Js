const express = require("express")
const app=express()

// bring ejs template 
app.set ('view engine','ejs')
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