// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')
const router = express.Router()

router.post('/', async (req,res,next)=>{
    try{
       const item = await Resources.addResources(req.body)
       res.json(item)
    }catch(err){
        next(err)
    }
})
router.get('/', async (req,res,next)=>{
    try{
     const resources =  await Resources.getResources()
     res.json(resources)
    }catch(err){
        next(err)
    }
})

module.exports = router;