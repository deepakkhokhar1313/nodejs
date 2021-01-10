const mongoose = require('mongoose')

const Food_RequirementSchema = mongoose.Schema({
    access_food :{
        type : String,
    },
    deficient_food:{
        type : String,
    },
    landmark:{
        type:String,
        require:true,
    },
    security_code:{
        type : String,
        require : true,
    },
    time : {
        type : String,
        require : true,
    }
})

module.exports = mongoose.model('food' , Food_RequirementSchema)