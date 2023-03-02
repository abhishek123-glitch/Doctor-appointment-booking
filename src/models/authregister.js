const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;



const authSchema = mongoose.Schema({
    mname: {
        type: String,
        required: true,
        unique: true

    },
    phone: {
        type: String,
        required: true,
        unique: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true,
    }
})

// we need a collection
const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;