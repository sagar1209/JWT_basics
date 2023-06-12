const jwt = require('jsonwebtoken');
const unauthorized= require('../errors/unauthorized')

const authenticationmiddleware = async(req,res,next)=>{
    const authheader = req.headers.authorization;
    if(!authheader || !authheader.startsWith('Bearer ')){
       
        throw new unauthorized('no token provided')
    }
    
    const token = authheader.split(' ')[1];
      
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const {id,username} = decode;
        req.user = {id,username}
        
    } catch (error) {
        throw new unauthorized('not authorized to access this route');
    }
    next()

}

module.exports = authenticationmiddleware