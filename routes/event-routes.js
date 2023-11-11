const express = require("express")
const router=express.Router()
const Event = require('../models/Event')
const { event } = require("jquery")
const { check, validationResult }=require('express-validator');


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

 //create new event 
 router.get('/create',(req,res)=>{
  res.render('events/create',{
    errors:false

  })
 })
//save even to db 

router.post('/create', [
  check('title').isLength({min: 5}).withMessage('Title should be more than 5 char'),
  check('description').isLength({min: 5}).withMessage('Description should be more than 5 char'),
  check('location').isLength({min: 3}).withMessage('Location should be more than 5 char'),
  check('date').isLength({min: 5}).withMessage('Date should valid Date'),
 

  
],
( req, res)=>{
  const errors=validationResult(req)


  if (!errors.isEmpty()){
    res.render('events/create', {
      errors: errors.array()
  })
} else {
  
  let newEvent = new Event({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      location: req.body.location,
      created_at: Date.now()
  })

  newEvent.save( (err)=> {
      if(!err) {
          console.log('event was added')
          res.redirect('/events')
      } else {
          console.log(err)
      }
  })
}

})


//show single event 

router.get('/:id',(req,res)=>{
  

    Event.findOne({_id: req.params.id},(err,event)=>{
      if (!err){
        res.render('events/show',{
          event: event 
        })
      }else {
        console.log(err)
      }
     
     
    })
    
})

module.exports = router