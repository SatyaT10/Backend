const mongoose=require("mongoose");


const employe=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});


const Employe = mongoose.model("Employee",employe);

// module.exports= mongoose.model("Employee",employe);

module.exports = Employe;