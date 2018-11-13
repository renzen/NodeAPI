// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({ 
    firstname: String,
    lastname: String,
    gender: Number,
    birthDate: Date,
    contactNo: String,
    email: String,
    username: String, 
    password: String, 
    admin: Number,
    active: Boolean,
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: null },
    updatedBy: String,
    addresses: [{
        number: String,
        street: String,
        barangay: String,
        city: String,
        zipCode: String
    }]
})
// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', UserSchema);
