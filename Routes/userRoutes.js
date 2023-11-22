const express = require('express')
const router = express.Router()
const empData = require('../Models/EmployeeData')
const cors = require('cors')
const jwt = require('jsonwebtoken')


router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.use(cors())

function verifytoken(req,res,next){
    try{
      const token=req.headers.token;
      console.log(token);
      if(!token) throw 'Unauthorized';
      let payload=jwt.verify(token,'reactempapp');
      if(!payload) throw 'Unauthorized';
      next()
    }
    catch(error){
      //console.log(error);
      res.status(401).send('error');
    }
  }


router.get('/viewall',verifytoken,async(req,res)=>{
    try{
        // res.set('Access-Control-Allow-Origin', '*');
        const data = await empData.find()
        res.status(200).json(data)
      

    }catch(e){
        console.log(e)
        res.send(e)
    }
 }
)

//TODO: get single data from db  using api '/api/employeelist/:id'
router.get ('/employeelist/:id',verifytoken, async(req,res)=>{

    try{
    const data = await empData.find()
    const id = req.params.id
    const index = data.findIndex(data => data.id === id);
    res.status(200).json(data[index]);

    }
    catch(error){

        res.status(404).json(error)
    }
   
})



router.post('/addData',verifytoken, async(req,res)=>{

    try{
        // res.headers('Access-Control-Allow-Origin','*')
        var item = req.body
        const data = new empData(item)
        await data.save()
        res.json(data)
        

    }
    catch(error){
        res.status(404).json(error)
    }
})
  




//TODO: delete a employee data from db by using api '/api/employeelist/:id'
router.delete('/delete/:id',verifytoken,async(req,res)=>{

    try{
       
        res.set('Access-Control-Allow-Origin', '*');
        const id = req.params.id
        const data =await empData.deleteOne({_id: id})
        
        res.json(data)

    }
    catch(error){
        res.status(404).json(error)
    }
})




router.put('/update/:id',verifytoken,async(req,res)=>{

    try{
    
    var item = req.body
    const data =await empData.findByIdAndUpdate(req.params.id, item, { new: true }) 
    res.status(200).send('updated successfully')
    

    
    }
    catch(error){
        console.error(error);
        res.status(404).send('error')
        
    }
   
})





















module.exports = router