const mongoose = require("mongoose");
const validator = require("validator");

const Regiister = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true

    },
   
    email:{
        type:String,
        require:true,
        unique:[true,"email is already exist"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("invalid emai")
            }
        }

    },
    password:{
        type:String,
        require:true,
       
    }

})

const Lucky = new mongoose.model("Lucky",Regiister);
module.exports = Lucky;
