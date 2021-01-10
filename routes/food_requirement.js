const express = require('express')
const router = express.Router()

const Food = require('../Models/Food_Requirement')

router.get('/' , async(req , res) => {
    try{
        const food = await Food.find()
        res.json(food)
    }catch(error){
        //console.log(error)
        res.send('error')
    }
})

router.post('/' , async (req , res) => {
        const food = await Food({
            access_food : req.body.access_food,
            deficient_food : req.body.deficient_food,
            landmark : req.body.landmark,
            security_code : req.body.security_code,
            time : req.body.time
        })
        try{
            const food1 = await food.save()
            res.json(food1)
        }catch(error){
            res.send('error')
        }
    });


module.exports = router