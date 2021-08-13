const express = require('express');
const router=express.Router();
const Card = require("../models/card");
const images = require('../models/modelTest');
const multer=require('multer');

const path = require('path');

const storage = multer.diskStorage({
    destination:function (req,file,cb){
     cb(null,"uploads");  
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    },
})


const upload = multer({
    storage: storage,
    limits: {
      fieldSize: 1024 * 1024 * 3,
    },
  });

router.get('/',(req,res)=>{
     Card.find().then(card=>{
         res.json(card);
    });
})
    
router.get('/singlecard/:id',async (req, res)=>{
   const card = await Card.findById(req.params.id);
   res.json(card);
   console.log(card);
});

router.post('/', upload.single('imagePath'), async (request, response) => {
 
  try {
      
    // console.log(request.body);
    let novocard = new Card({
      name: request.body.name,
      ano: request.body.ano,
      desc: request.body.desc,
      imagePath: request.file.path
    });
  await novocard.save()
      .then(res=>console.log(res));
    } catch (error) {
      console.log(error);
    }
  });
  
router.post("/new", upload.single("imagePath"),(req,res)=>{

});

module.exports = router ;    