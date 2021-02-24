const jwt = require('jsonwebtoken');
const User = require('../model/User');


module.exports = async(request , response, next)=>{
    // const token = request.header('authorization')
    console.log('request.cookies : ', request.cookies);
   
    const token = request.cookies.jwt
    console.log('request.cookies',request.cookies);
    console.log('authenticate token : ',token);
    if(!token){
       return response.status(400).json({ msg : 'No Token , authorization denied!!'})
    }
    try {
        const decode = await jwt.verify(token , process.env.SECRET );
        console.log('decode: ', decode);        
        request.id = decode.id;
        const currentUser = await User.findById(decode.id)
        if(!currentUser){
            return response.status(400).json({ msg : 'the user with the current Token is no Longer exist'})
        }
        request.user = currentUser
        console.log(request.user);
        next();
        
    } catch (error) {
        console.log(error);
        return response.status(400).json({  msg : 'Token is not Valid'})
    }


    
}