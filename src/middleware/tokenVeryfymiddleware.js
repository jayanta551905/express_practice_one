const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    exports.decodeToken = (req, res)=>{
        let token = req.headers['token-key'];
        jwt.verify(token, 'secretKey123', (err, decode)=>{
            if(err){
                res.status(401).json({status:'Invalid token', data: err});
            }else{
                next()
            }
        })
    }
}