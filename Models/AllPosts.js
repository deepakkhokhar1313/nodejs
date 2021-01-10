const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    creater_name :{
        type : String,
        require : true,
    },
    mediatype : {
        type : String,
        require : true,
    },
    mediaurl :{
        type : String,
        require : true,
    },
    textdata :{
        type : String,
        require : true,
    },
    time :{
        type : String,
        require : true,
    },
    user_id:{
        type:String,
        require : true,
    }
})

module.exports = mongoose.model('Posts' , PostSchema)