const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const doctorSchema = mongoose.Schema({
    mname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    confirmpassword: {
        type: Number,
        required: true
    }
})

// we need a collection
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;