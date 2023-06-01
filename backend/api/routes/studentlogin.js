const express = require('express');
const StudentLogin = require('../model/studentlogin');
const router = express.Router();


router.get('/', async (req, res, next)=>{
    try {
        const classroom = await StudentLogin.findAll();

        res.status(200).json(classroom);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('/:email', async (req, res, next)=>{
    try {
        const [classroom, _] = await StudentLogin.findById(req.params.email);

        res.status(200).json(classroom);
    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.post('/', async (req, res, next)=>{
    try {
        let {ID,name, email, password} = req.body;
        let studentlogin = new StudentLogin(ID,name, email, password);
        studentlogin =  await studentlogin.save();
        res.status(201).json({message:"Student Login added"})
    } catch (error) {
        console.log(error);
        next(error);
    }
    
})


module.exports = router;