const db = require("../models");


//Mongoose query abstractions
module.exports = {
    createUser: function (req, res) {
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    creatRecommendation: function (req, res) {
        console.log(req.body);
        db.Recommendation.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }, 
    getRecommendation: function (req, res) {
        console.log(req.body);
        db.Recommendation.find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getUser: function(req,res){
        db.User.findOne({id : req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};