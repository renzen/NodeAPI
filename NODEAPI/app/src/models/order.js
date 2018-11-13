// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
    user_Id: String,
    transaction_Id: String,
    active: Boolean,
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: null },
    updatedBy: String,
    orderItem: [{
        item_Id: String,
        price: Number,
        quantity: Number,
    }]

})

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Order', OrderSchema);
