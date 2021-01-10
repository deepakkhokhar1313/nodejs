const express = require('express')
const router = express.Router()
const Medical = require('../Models/Medical_teams')

router.get('/' , async(req , res) => {
    try{
        const medical = await Medical.find()
        res.json(medical)
    }catch(error){
        //console.log(error)
        res.send('error')
    }
})

router.post('/' , async (req , res) => {
        const medical = await Medical({
            border_name : req.body.border_name,
            hospital_name : req.body.hospital_name,
            hospital_contact_no : req.body.hospital_contact_no,
            hospital_address : req.body.hospital_address
        })
        try{
            const medical1 = await medical.save()
            res.json(medical1)
        }catch(error){
            res.send('error')
        }
    });

module.exports = router