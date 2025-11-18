import jwt from 'jsonwebtoken'

const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers
        
        if (!atoken) {
            return res.json({ success: false, message: "Not Authorized - No Token Provided" })
        }
        
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        
        if (!req.body) {
            req.body = {}
        }
        req.body.aid = token_decode.aid
        next()
    } catch (error) {
        console.log("Auth Error:", error.name, error.message)
        
        // Better error messages
        if (error.name === 'JsonWebTokenError') {
            return res.json({ 
                success: false, 
                message: "Invalid Token - Please login again" 
            })
        }
        
        if (error.name === 'TokenExpiredError') {
            return res.json({ 
                success: false, 
                message: "Token Expired - Please login again" 
            })
        }
        
        return res.json({ success: false, message: "Authentication failed" })
    }
}

export default authAdmin