const jwt = require('jsonwebtoken');


// create token method
exports.createToken = (req, res)=>{
    let payload = {
        exp: Math.floor(Date.now()/1000) + (60*60),
        data: {name:"Jayanta Mondal", city: "Dhaka", admin: true}
    }

    let token = jwt.sign(payload, 'secretKey123');
    res.send(token);
}

// decode token method
exports.decodeToken = (req, res)=>{
    let token = req.headers['token-key'];
    jwt.verify(token, 'secretKey123', (err, decode)=>{
        if(err){
            res.status(401).json({status:'Invalid token', data: err});
        }else{
            res.status(200).json({status: 'Success', data:decode});
        }
    })
}
