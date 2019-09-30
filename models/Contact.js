const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    // profilePicture: {
    //     type: Buffer,
    //     require: true,
    // },
    firstName: {
        type: String,
        require: true,
        trim: true,
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        require: true,
        trim: true
    }
});

module.exports = (Contact) = mongoose.model("contacts", ContactSchema);