const mongoose = require("mongoose");
// const Schema = mongoose.Schema;



const contactSchema = mongoose.Schema({
        mname: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true

        },
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        symptoms: {
            type: String,
            required: true
        }
    }

)

// we need a collection
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;