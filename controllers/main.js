const jwt = require('jsonwebtoken');
const bad_request = require('../errors/bad_request')



const login = async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        throw new bad_request('please provide a data');
    }
    const id = new Date().getDate();

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'});

    res.status(200).json({msg:'user created',token})
}

const deshboard = async(req,res)=>{

        const luckynumber = Math.floor(Math.random()*100)
        res.status(200).json({msg:`hello ${req.user .username}`,secret:`here is a athorized user , you are a lucky number is ${luckynumber}`})
}

module.exports = {
    deshboard,login
}
