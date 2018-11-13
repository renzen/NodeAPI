// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
    productName: String,
    code: String,
    description: String,
    price: Number,
    imgUrl: String,
    active: Boolean,
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: null },
    updatedBy: String
})

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Product', ProductSchema);