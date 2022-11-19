const studentModel = require("../models/studentModel");


// CRUD operation

// C = create
exports.insertStudent = (req, res)=>{
    let reqBody = req.body;
    studentModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({
                status: 'Fail',
                data: err
            });
        }else{
            res.status(201).json({
                status: 'Successfully inserted',
                data: data
            });
        }
    });
};

// R = read
exports.readStudent = (req, res)=>{
    let query = {};
    let projection = "name roll class"
    studentModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({
                status: 'Fail',
                data: err
            });
        }else{
            res.status(201).json({
                status: 'Success',
                data: data
            });
        }
    });
};


// U = update
exports.updateStudent = (req, res)=>{
    let id = req.params.id;
    let QUERY = {_id:id};
    let reqBody = req.body;
    studentModel.updateOne(QUERY, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({
                status: 'Fail',
                data: err
            });
        }else{
            res.status(201).json({
                status: 'Success',
                data: data
            });
        }
    });
};

// D = delete
exports.deleteStudent = (req, res)=>{
    let id = req.params.id;
    let QUERY = {_id:id};
    studentModel.remove(QUERY, (err, data)=>{
        if(err){
            res.status(400).json({
                status: 'Fail',
                data: err
            });
        }else{
            res.status(201).json({
                status: 'Success',
                data: data
            });
        }
    });
};