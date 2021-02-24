module.exports = (...roles)=>{
    return (request , response , next)=>{
        // roles is an array ['admin' ,'supervisor']
        if(!roles.includes(request.user.role)){
            return response.status(403).json({ msg : 'you dont have the permission for this action , authorization denied!!'})
        }
        next();

    }
}