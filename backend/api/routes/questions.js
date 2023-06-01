const express = require('express');
const QUestion = require('../model/questions');
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

router.get('/:qid', async (req, res, next)=>{
    try {
        const [Question, _] = await QUestion.findById(req.params.qid);

        res.status(200).json(Question);
    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.post('/', async (req, res, next)=>{
    try {
        let {qid, question , op1 , op2 , op3 , op4 , answer} = req.body;
        let Question = new QUestion(qid, question , op1 , op2 , op3 , op4 , answer);
        Question =  await Question.save();
        res.status(201).json({message:"Question added"})
    } catch (error) {
        console.log(error);
        next(error);
    }
    
})

router.post('/:qid', async (req, res, next)=>{
    try {
        let {qid, question , op1 , op2 , op3 , op4 , answer} = req.body;
        let Question = new QUestion(qid, question , op1 , op2 , op3 , op4 , answer);
        Question =  await Question.update(req.params.qid);
        res.status(201).json({message:"Question updated"})
    } catch (error) {
        console.log(error);
        next(error);
    }
    
})

module.exports = router;