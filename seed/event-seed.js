constdb=require('../config/database')
const Event=require('../models/Event')


let newEvents=[
    new Event({
        title: ' this is event 1',
        description: 'blablabla' , 
        location: ' malaga ',
         date:  Date.now(),
         created_at: Date.now()

    }),
    new Event({
        title: ' this is event 1',
        description: 'blablabla' , 
        location: ' malaga ',
         date:  Date.now(),
         created_at: Date.now()

    }),
    new Event({
        title: ' this is event 1',
        description: 'blablabla' , 
        location: ' malaga ',
         date:  Date.now(),
         created_at: Date.now()

    }),
    new Event({
        title: ' this is event 1',
        description: 'blablabla' , 
        location: ' malaga ',
         date:  Date.now(),
         created_at: Date.now()

    }),
    new Event({
        title: ' this is event 1',
        description: 'blablabla' , 
        location: ' malaga ',
         date:  Date.now(),
         created_at: Date.now()

    }),
    new Event({
        title: ' this is event 1',
        description: 'blablabla' , 
        location: ' malaga ',
         date:  Date.now(),
         created_at: Date.now()

    }),
    new Event({
        title: ' this is event 1',
        description: 'blablabla' , 
        location: ' malaga ',
         date:  Date.now(),
         created_at: Date.now()

    }),
    new Event({
        title: ' this is event 1',
        description: 'blablabla' , 
        location: ' malaga ',
         date:  Date.now(),
         created_at: Date.now()

    })
    
]

newEvents.forEach((event)=>{
    event.save((err)=>{
        if(err){
            console.log(err)
        }
    })
})


// let newEvent=new Event({
//     title: ' this is event 1',
//     description: 'blablabla' , 
//     location: ' malaga ',
//     date:  Date.now()
// })

// newEvent.save((err)=>{
//     if (!err){
//         console.log('record was added ')

//     }else {
//         console.log(err)
//     }
// })
