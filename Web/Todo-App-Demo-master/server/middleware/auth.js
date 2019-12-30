import jwt from "jsonwebtoken"

const auth = (req,res,next)=>{
    const token=req.cookies['x-auth-token'];
    const KEY=process.env.JWT_KEY || '38hf98hf29fh29fh2fh2f';
    jwt.verify(token,KEY)
}