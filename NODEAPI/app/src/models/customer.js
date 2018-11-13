// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({ 
    firstname: String,
    lastname: String,
    contactNo: String,
    email: String,
    password: String, 
    admin: Boolean,
    active: Boolean,
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: null },
    updatedBy: String,
    addresses: [{
        number: String,
        street: String,
        barangay: String,
        City: String,
        zipCode: String
    }]
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Customer', CustomerSchema);
