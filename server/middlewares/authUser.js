import jwt from 'jsonwebtoken';

//in this we will get cookies from the request so when we request any api endpoint in this req we will have cookies 
//so from that cookies we will extract the token 

const authUser = async ( req, res, next ) => { //next will execute the controller function

    const { token } = req.cookies;

    if (!token) {
        return res.json({success: false, message: 'Not authorized'});
    }
    //if token is available then we will decode this token to extract the id
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if (tokenDecode.id) {
            
            if (!req.body) req.body = {}; // ✅ Add this line to avoid the error
            req.body.userId = tokenDecode.id;
        }
        else{
            return res.json({success: false, message: 'Not authorized'});
        }

        next();

    } catch (error) {
        res.json({success: false, message: error.message});
    }
} 

export default authUser;

