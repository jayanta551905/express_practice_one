const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        unique: [true, 'Please provide a unique name'],
        required: [true, 'Name is required'],
        trim: true
    },
    roll: {
        type: Number,
        min: [1, 'Minimum roll 1 & maximum 100, but got {VALUE}'],
        max: [100, 'Minimum roll 1 & maximum 100, but got {VALUE}']
    },
    class: {
        type: String,
        required: [true, 'Roll is required'],
    },
    mobileNo: {
        type: String,
        validate: {
            validator: function(value){
                // if(value.length===11){
                //     return true
                // }else{
                //     return false
                // }
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
            }, message: '11 Digit Mobile No Required'
        }
    },
    remarks: {
        type: String
    }
},{versionKey:false});

const studentModel = mongoose.model('students', studentSchema);
module.exports = studentModel;

