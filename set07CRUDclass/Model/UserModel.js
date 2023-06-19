const mongoose = require("mongoose")


const userSchema =  mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type: String
    },
    password : {
        type : String
    },
    phoneNum : {
        type :Number
    },
    isFemale : {
        type : Boolean
    }
} )


const userModel = mongoose.model("Students" , userSchema)

module.exports = userModel