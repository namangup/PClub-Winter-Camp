const jwt =require('jsonwebtoken')

const KEY=process.env.JWT_KEY || '38hf98hf29fh29fh2fh2f';

const auth = (req,res,next)=>{
    const token=req.cookies['x-auth-token'];
    try{ 
    const decoded = jwt.verify(token,KEY);
    req.userId=decoded.userId;
    next();
    }
    catch(err)
    {
        res.status(401).send('Token not Found');
    }
}

module.exports=auth;