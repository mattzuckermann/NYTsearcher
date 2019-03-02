const db = require("../models");


//Mongoose query abstractions
module.exports = {
    createUser: function (req, res) {
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    creatRecommendation: function (req, res) {
        db.Recommendation.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};