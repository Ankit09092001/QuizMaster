const express = require('express');
const QUestion = require('../model/questionbank');
const router = express.Router();


router.get('/', async (req, res, next)=>{
    try {
        const Question = await QUestion.findAll();

        res.status(200).json(Question);
    } catch (error) {
        console.log(error);
        next(error);
    }
});


router.post('/', async (req, res, next)=>{
    try {
        let {ID, question} = req.body;
        let Question = new QUestion(ID, question);
        Question =  await Question.save();
        res.status(201).json({message:"Question Bank added"})
    } catch (error) {
        console.log(error);
        next(error);
    }
    
})



module.exports = router;