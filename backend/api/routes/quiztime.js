const express = require('express');
const QuizTime = require('../model/quiztime');
const router = express.Router();

router.post('/:ID', async (req, res, next)=>{
    try {
        let {ID, time} = req.body;
        let Quiztime = new QuizTime(ID, time);
        Quiztime =  await Quiztime.update(req.params.ID);
        res.status(201).json({message:"Time updated"})
    } catch (error) {
        console.log(error);
        next(error);
    }
    
})

router.get('/', async (req, res, next)=>{
    try {
        const Quiztime = await QuizTime.findAll();

        res.status(200).json(Quiztime);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;