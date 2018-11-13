var mongoose =  require('mongoose');
var userModel = require('../models/user');
var UserDb = mongoose.model('User', userModel.User);
var jwt    = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

export const authenticate = (req, res) => {
    // auth user
    UserDb.findOne({username: req.body.username}, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid){
            return res.status(401).send({ auth: false, token: null});
        }

        const token = jwt.sign({user}, 'my_secret_key', {
            expiresIn: 86400
        });
        res.status(200).send({
          auth: true,                                     
          token: token
            
        });

    });
};

export const resetToken = (req, res) => {
    // auth user
    const user = req.body;
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
      'success':true,                                     
        token: token
        
    });

};

export const logout = (req, res) => {

    res.status(200).send({
        auth: false,                                     
        token: null
    });

};
