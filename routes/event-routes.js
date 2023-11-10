const express = require("express")
const router=express.Router()

//rout to home events 
router.get('/',(req,res)=>{
    res.render('events/index')
})


//show single event 

router.get('/:id',(req,res)=>{
    res.render('events/show')
})

module.exports = router