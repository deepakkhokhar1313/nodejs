const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const User = require('../Models/Users')

router.get('/' , async(req , res) => {
    try{
        const user = await User.find()
        res.json(user)
    }catch(error){
        //console.log(error)
        res.send('error')
    }
    //res.send('get request in user')
})
router.get('/:id' , async(req , res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(error){
        //console.log(error)
        res.send('error')
    }
    //res.send('get request in user')
})

router.post('/' , async(req , res) => {
    bcrypt.hash(req.body.password, 1, async(err, hash) => {
        const user = User({
            email : req.body.email,
            password : hash,
            name: req.body.name,
            contact_no : req.body.contact_no,
        })
        try{
            const user1 = await user.save()
            res.json(user1)
        }catch(error){
            res.send('error')
        }
      });
})

router.patch('/:id' , async(req , res) => {
    try{
        bcrypt.hash(req.body.password, 1, async(err, hash) => {
            const user = await User.findById(req.params.id)
            console.log(user)
            user.password = hash
            const user1 = await user.save()
            res.json(user1)
          });
    }catch(error){
        //console.log(error)
        res.send('error')
    }
    //res.send('get request in user')
})


router.delete('/:id' , async(req , res) => {
    try{
        const user = await User.findByIdAndRemove(req.params.id)

        res.json(user)
    }catch(error){
        //console.log(error)
        res.send('error')
    }
    //res.send('get request in user')
})

module.exports = router