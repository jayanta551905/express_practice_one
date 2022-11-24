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