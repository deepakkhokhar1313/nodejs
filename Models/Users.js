
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        email :{
            type : String,
            require :true,
        },
        password :{
            type : String,
            require:true,
        },
        name : {
            type : String,
            require : true,
        },
        contact_no : {
            type : String,
            require:true,
        }
    }
)

module.exports = mongoose.model('User' , UserSchema)