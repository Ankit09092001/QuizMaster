const express = require('express');
const StudentReport = require('../model/studentreport');
const router = express.Router();


router.get('/', async (req, res, next)=>{
    try {
        const report = await StudentReport.findAll();

        res.status(200).json(report);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('/:ID', async (req, res, next)=>{
    try {
        const [report, _] = await StudentReport.findById(req.params.ID);

        res.status(200).json(report);
    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.post('/', async (req, res, next)=>{
    try {
        let {ID,name,marks} = req.body;
        let report = new StudentReport(ID,name,marks);
        report =  await report.save();
        res.status(201).json({message:"Report added"})
    } catch (error) {
        console.log(error);
        next(error);
    }
    
})


module.exports = router;