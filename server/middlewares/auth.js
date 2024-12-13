const jwt =require("jsonwebtoken");

export const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token =authHeader.split(" ")[1];
jwt.verify(token, 'its a secret', (err, user)=>{
if(err) res.status(403).json("Token is not Valid!");
req.user =user;
next();
});
    }else{
        return res.status(401).json("You are not authenticated!")                            //status code 401 means UnAuthorized
    }
};