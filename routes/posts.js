const express = require('express')
const router = express.Router()

const posts = require('../Models/AllPosts')

router.get('/' , async(req , res) => {
    try{
        const post = await posts.find()
        res.json(post)
    }catch(error){
        //console.log(error)
        res.send('error')
    }
})

router.post('/' , async (req , res) => {
        const post = await posts({
            creater_name : req.body.creater_name,
            mediatype : req.body.mediatype,
            mediaurl : req.body.mediaurl,
            textdata : req.body.textdata,
            time : req.body.time,
            user_uid : req.body.user_uid,
        })
        try{
            const post1 = await post.save()
            res.json(post1)
        }catch(error){
            res.send('error')
        }
    });


    router.patch('/:id' , async(req , res) => {
        try{
            const post = await posts.findById(req.params.id)
            console.log(post)
            post.textdata = req.body.textdata
            const post1 = await post.save()
            res.json(post1)
        }catch(error){
            //console.log(error)
            res.send('error')
        }
        //res.send('get request in user')
    })
    
    
    router.delete('/:id' , async(req , res) => {
        try{
            const post = await posts.findByIdAndRemove(req.params.id)
            console.log("Successfully deleted")
            //res.json(user)
        }catch(error){
            //console.log(error)
            res.send('error')
        }
        //res.send('get request in user')
    })

    //res.send('get request in user')


module.exports = router