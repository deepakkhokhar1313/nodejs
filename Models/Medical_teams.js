const mongoose = require('mongoose')

const Medical_teamSchemaa = mongoose.Schema({
    border_name : {
        type : String,
        required : true,
    },
    hospital_name:{
        type : String,
        required : true,
    },
    hospital_contact_no:{
        type : String,
        required : true,
    },
    hospital_address:{
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('medical_team' , Medical_teamSchemaa)