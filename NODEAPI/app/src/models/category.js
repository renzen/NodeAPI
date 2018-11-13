// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
    categoryName: String,
    description: String,
    active: Boolean,
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: null },
    updatedBy: String
})

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Category', CategorySchema);