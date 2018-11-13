var mongoose =  require('mongoose');
var categoryModel = require('../models/category');
var CategoryDb = mongoose.model('Category', categoryModel.Category);

export const addNewCategory = (req, res) => {
    let newCategory = new CategoryDb(req.body);

    newCategory.save((err, category) => {
        if (err){
            res.send(err);
        }
        res.json(category);
    });
};

export const updateCategory = (req, res) => {
    CategoryDb.findOneAndUpdate({categoryName: req.body.categoryName}, req.body, {new: true}, (err, category) => {
        if (err) {
            res.send(err);
        }
        res.json(category);
    });

};

export const updateCategoryStatus = (req, res) => {
    CategoryDb.findOne({categoryName: req.body.categoryName}, (err, category) => {
        if (err) {
            res.send(err);
        }

        category.active = req.body.active;
        category.updatedAt = Date.now;
        category.updatedBy = req.body.updatedBy;

        category.save(function(err) {
            if(err) res.send(err);

        res.json(category)

        });
    });

};

export const getCategory = (req, res) => {
    CategoryDb.find({}, (err, category) => {
        if (err) {
            res.send(err);
        }
        res.json(category)
    });

};