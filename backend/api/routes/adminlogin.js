const express = require('express');
const AdminLogin = require('../model/adminlogin');
const router = express.Router();

router.get('/:email', async (req, res, next)=>{
    try {
        const [classroom, _] = await AdminLogin.findById(req.params.email);

        res.status(200).json(classroom);
    } catch (error) {
        console.log(error);
        next(error);
    }
})

module.exports = router;