var mongoose =  require('mongoose');
var productModel = require('../models/product');
var ProductDb = mongoose.model('Product', productModel.Product);

export const addNewProduct = (req, res) => {
    let newProduct = new ProductDb(req.body);

    newProduct.save((err, prod) => {
        if (err){
            res.send(err);
        }
        res.json(prod);
    });
};

export const updateProduct = (req, res) => {
    ProductDb.findOneAndUpdate({code: req.body.code}, req.body, {new: true}, (err, prod) => {
        if (err) {
            res.send(err);
        }
        res.json(prod);
    });

};

export const updateProductStatus = (req, res) => {
    ProductDb.findOne({code: req.body.code}, (err, prod) => {
        if (err) {
            res.send(err);
        }

        prod.active = req.body.active;
        prod.updatedAt = Date.now;
        prod.updatedBy = req.body.updatedBy;

        prod.save(function(err) {
            if(err) res.send(err);

        res.json(prod)

        });
    });

};

export const getProduct = (req, res) => {
    ProductDb.find({}, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product)
    });

};