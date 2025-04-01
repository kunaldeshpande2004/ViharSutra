const joi = require('joi')
const signupvalidation=(req,res,next)=>{
 
    const schema = joi.object({
        fullname:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().required().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#%^~])[A-Za-z\d@$!%*?&_#%^~]{8,}$/)
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400)
        .json({message:'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',error})
    }
   
    next();
}

const loginValidation =(req,res,next) =>{


    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#%^~])[A-Za-z\d@$!%*?&_#%^~]{8,}$/),
    });
    const {error} = schema.validate(req.body);
    if(error){

        console.log('bunt')
        return res.status(400)
           .json({message:" Auth failed email or password is wrong",success:false})
    }
    next();
}
module.exports = {
    signupvalidation,
    loginValidation
}