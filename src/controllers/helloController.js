exports.HelloGet = (req, res)=>{
    res.status(200).json({
        status: 'Get Run success',
        data: 'Hello get method'
    });
};

exports.HelloPost = (req, res)=>{
    res.status(201).json({
        status: 'Post Run success',
        data: 'Hello post method'
    });
};