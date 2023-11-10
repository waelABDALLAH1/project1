const express = require("express")
const router=express.Router()
const Event = require('../models/Event')

//rout to home events 
router.get('/',(req,res)=>{
    Event.find({}, (err,events)=>{
      //  res.json(events)
      let chunk=[]
      let chunksize = 3
      for (let i=0; i< events.length ; i+=chunksize){
      chunk.push(events.slice(i,chunksize + i ))
    }
    //res.json(chunk)
      res.render('events/index',{
      chunk: chunk
    })
})
  
})


//show single event 

router.get('/:id',(req,res)=>{
    res.render('events/show')
})

module.exports = router