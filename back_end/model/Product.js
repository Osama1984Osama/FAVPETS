const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    photo :{
        type: String,
        default : 'pets-avatar.jpg'
    },
    description : {
        type: String
    },
    price :{
        type: String
    },
    location :{
        type: String
    },
    date: {
        type: String,
        default : Date.now
    },
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
   
});
const Product = mongoose.model('products' , ProductSchema);
module.exports = Product;