const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    email :{

        type: String,
        required:true
    },
    password : {
        type: String,
        required:true
    },
    date: {
        type: String,
        default : Date.now
    },

    role: {
        type: String,
        enum: ["user","admin"],
        default: "user"
    },
    photo :{
        type: String,
        default : 'avatar.png'
    },
    

    passwordChangedAt : Date,
    passwordResetToken : String,
    passwordResetExpire : { type: Date} 
    

});

const User = mongoose.model('User' , UserSchema);

module.exports = User;

