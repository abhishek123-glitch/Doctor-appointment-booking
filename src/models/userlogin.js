const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }

})

// we need a collection
const User = mongoose.model("User", userSchema);
module.exports = User;