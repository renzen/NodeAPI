var mongoose =  require('mongoose');
var orderModel = require('../models/order');
var OrderDb = mongoose.model('Order', orderModel.Order);

export const addNewOrder = (req, res) => {
    let newOrder = new OrderDb(req.body);

    newOrder.save((err, order) => {
        if (err){
            res.send(err);
        }
        res.json(order);
    });
};

export const updateOrder = (req, res) => {
    OrderDb.findOneAndUpdate({transaction_Id: req.body.transaction_Id}, req.body, {new: true}, (err, order) => {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });

};

export const updateOrderStatus = (req, res) => {
    OrderDb.findOne({transaction_Id: req.body.transaction_Id}, (err, order) => {
        if (err) {
            res.send(err);
        }

        order.active = req.body.active;
        order.updatedAt = Date.now;
        order.updatedBy = req.body.updatedBy;

        order.save(function(err) {
            if(err) res.send(err);

        res.json(order)

        });
    });

};

export const getOrder = (req, res) => {
    OrderDb.find({}, (err, order) => {
        if (err) {
            res.send(err);
        }
        res.json(order)
    });

};