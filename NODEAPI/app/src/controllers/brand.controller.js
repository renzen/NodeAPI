var mongoose =  require('mongoose');
var brandModel = require('../models/brand');
var BrandDb = mongoose.model('Brand', brandModel.Brand);

export const addNewBrand = (req, res) => {
    let newBrand = new BrandDb(req.body);

    newBrand.save((err, brand) => {
        if (err){
            res.send(err);
        }
        res.json(brand);
    });
};

export const updateBrand = (req, res) => {
    BrandDb.findOneAndUpdate({brandName: req.body.brandName}, req.body, {new: true}, (err, brand) => {
        if (err) {
            res.send(err);
        }
        res.json(brand);
    });

};

export const updateBrandStatus = (req, res) => {
    BrandDb.findOne({brandName: req.body.brandName}, (err, brand) => {
        if (err) {
            res.send(err);
        }

        brand.active = req.body.active;
        brand.updatedAt = Date.now;
        brand.updatedBy = req.body.updatedBy;

        brand.save(function(err) {
            if(err) res.send(err);

        res.json(brand)

        });
    });

};

export const getBrand = (req, res) => {
    BrandDb.find({}, (err, brand) => {
        if (err) {
            res.send(err);
        }
        res.json(brand)
    });

};

export const getBrandbyId = (req, res) => {
    BrandDb.findOne({_id: req.body.id}, (err, brand) => {
        if (err) {
            res.send(err);
        }
        res.json(brand)
    });
};