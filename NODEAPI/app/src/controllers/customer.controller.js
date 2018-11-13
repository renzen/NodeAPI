var mongoose =  require('mongoose');
var customerModel = require('../models/Customer');
var CustomerDb = mongoose.model('Customer', customerModel.Customer);
var bcrypt = require('bcryptjs');

export const addNewCustomer = (req, res) => {

    CustomerDb.findOne({username: req.body.username}, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (user) return res.status(200).send('User name already exists!');
    });

    let newCust = new CustomerDb(req.body);

    newCust.password = bcrypt.hashSync(req.body.password, 8);

    newCust.save((err, cust) => {
        if (err){
            res.send(err);
        }
        res.json(cust);
    });
};

export const updateCustomer = (req, res) => {
    CustomerDb.findOneAndUpdate({email: req.body.email}, req.body, {new: true}, (err, cust) => {
        if (err) {
            res.send(err);
        }
        res.json(cust);
    });

};

export const updateCustomerStatus = (req, res) => {
    CustomerDb.findOne({email: req.body.email}, (err, cust) => {
        if (err) {
            res.send(err);
        }

        cust.active = req.body.active;
        cust.updatedAt = Date.now;
        
        cust.save(function(err) {
            if(err) res.send(err);

        res.json(cust)

        });
    });

};

export const getCustomer = (req, res) => {
    CustomerDb.find({}, (err, customer) => {
        if (err) {
            res.send(err);
        }
        res.json(customer)
    });

};