var mongoose =  require('mongoose');
var userModel = require('../models/user');
var UserDb = mongoose.model('User', userModel.User);
var bcrypt = require('bcryptjs');

export const addNewUser = (req, res) => {

    UserDb.findOne({username: req.body.username}, (err, user) => {
        if (err) return res.status(500).json({status:'Error on the server.'});
        if (user) return res.status(200).json({status:'User name already exists!'});

        let newUser = new UserDb(req.body);

        newUser.password = bcrypt.hashSync(req.body.password, 8);

        newUser.save((err1, user) => {
            if (err1){
                res.json({status: err1});
            }
            res.json({status:'Successfully added'});
        });
    });

    
};

export const updateUser = (req, res) => {
    UserDb.findOneAndUpdate({email: req.body.email}, req.body, {new: true}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });

};

export const updateUserStatus = (req, res) => {
    UserDb.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            res.send(err);
        }

        user.active = req.body.active;
        user.updatedAt = Date.now;
        
        user.save(function(err) {
            if(err) res.send(err);

        res.json(user)

        });
    });

};

export const getUser = (req, res) => {
    UserDb.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user)
    });

};