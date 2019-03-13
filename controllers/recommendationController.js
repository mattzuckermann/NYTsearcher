const db = require("../models");
const passport = require('passport');
require('../config/passport')(passport);

//Mongoose query abstractions
module.exports = {
    createUser: function (req, res) {
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createRecommendation: function (req, res) {
        console.log(req.body.data);
        db.Recommendation.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }, 
    getRecommendation: function (req, res) {
        var username = req.params.username;
        db.Recommendation.find({receiver : username})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getUser: function(req,res){
        db.User.findOne({username : req.params.username})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};