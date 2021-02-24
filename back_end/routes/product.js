const express = require("express");
const User = require("../model/User");
const Product = require("../model/Product");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
const fileUpload = require('express-fileupload');

router.use(fileUpload())
// add user product
router.post('/add' ,authenticate ,async (request, response)=>{     /// authenticate error
    const { name, description, price, location } = request.body;
    try {
        const newProduct = await new Product({
            name,
            description,
            price,  
            location,            
            user:request.id      /// authenticate error ??????

        });
        if(request.files === null){
            
            newProduct.save();
           return response.send(newProduct)
        }
       const file = request.files.file;
       const newPath = `${request.id}-${Date.now()}-${file.name}`;
       file.mv(`${__dirname}/../../front_end/public/uploads/${newPath}`, (error)=>{
           if(error){
            console.log(error);
            return response.status(500).send(error)
           }
           newProduct.photo = newPath;
           newProduct.save();
           response.status(200).json({newProduct})
           

       })
    
       
    } catch (error) {
        response.status(500).send('Server error')
    }

})
// get all user products 
router.get('/userProduct', authenticate, async (request, response) => {
    const products = await Product.find({user:request.id}).sort({ date : -1 });
 console.log(12222,request.id)
    if(!products){
        return response.status(404).json({msg:"no products yet"})
    }
    response.json({products})

});
// get single product
router.get('/details/:id', async (request, response) => {

    try {
        const product = await Product.findById(request.params.id);
    if(!product){
        return response.status(404).json({msg:"no products yet"})
    }
    response.json({product})
        
    } catch (error) {
        response.send(error)
    }

});

// get all products 
router.get('/all', async (request, response) => {
    const products = await Product.find();
    if(!products){
        return response.status(404).json({msg:"no products yet"})
    }
    response.json({"products":products})

});
// update product 
router.put('/edit/:id' , authenticate, async(request,response)=>{
    const { name,  description, price } = request.body;
    
    //create product object 
    const productObj = {};
    if(name){
        productObj.name = name
    }
    
    if(description){
        productObj.description = description
    }
    if(price){
        productObj.price = price
    }
   
    
  
    try {
        
        let product = await Product.findById(request.params.id)
          
        console.log('product', product);
       
        console.log('productObj', productObj);
        if(!product ) {
            return response.status(404).json({ msg :'product not found'})
        }
        // check if the user own the product 
        console.log('check if the user own the product',product.user.toString() !== request.user._id.toString())
        console.log('user._id', request.user._id);
        console.log('product.user', product.user);
        if(product.user.toString() !== request.user._id.toString()) {
            return response.status(401).json({ msg :'not authorized'})
        }
        console.log('request.files',request.files)
        if(request.files !== null ){

            const file = request.files.file;
            const newPath = `${Date.now()}-${request.user._id}-${file.name}`;
            file.mv(`${__dirname}/../../front_end/public/uploads/${newPath}` ,async (err)=>{
                if(err){
                    console.log(error)
                }
                const productObj = {};
                if(name){
                    productObj.name = name
                }
                
                if(description){
                    productObj.description = description
                }
                if(price){
                    productObj.price = price
                }
                productObj.photo = newPath;
                const productUpdate = await Product.findByIdAndUpdate(
                    request.params.id,
                    { $set : productObj},
                    {new :true , useFindAndModify:false }
                );
                console.log(productUpdate);
               return response.json({productUpdate})

            })
        }

      

        const productUpdate = await Product.findByIdAndUpdate(
            request.params.id,
            { $set : productObj},
            {new :true , useFindAndModify:false }
        );
        console.log(productUpdate);
       return response.json({productUpdate})

        
    } catch (error) {
        response.status(500).send('Server error ')
        
    }


})

module.exports = router;