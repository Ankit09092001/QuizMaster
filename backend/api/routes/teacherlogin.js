const express = require('express');
const TeacherLogin = require('../model/teacherlogin');
const router = express.Router();


router.get('/', async (req, res, next)=>{
    try {
        const classroom = await TeacherLogin.findAll();

        res.status(200).json(classroom);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('/:email', async (req, res, next)=>{
    try {
        const [classroom, _] = await TeacherLogin.findById(req.params.email);

        res.status(200).json(classroom);
    } catch (error) {
        
        console.log(error);
        next(error);
    }
})

router.post('/', async (req, res, next)=>{
    try {
        let {ID, email, password} = req.body;
        let teacherlogin = new TeacherLogin(ID, email, password);
        teacherlogin =  await teacherlogin.save();
        res.status(201).json({message:"Teacher Login added"})
    } catch (error) {
        console.log(error);
        next(error);
    }
    
})



module.exports = router;