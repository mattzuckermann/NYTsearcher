const db = require('../models');
const passport = require('passport');
require('../config/passport')(passport);

// Mongoose query abstractions
module.exports = {
  createUser(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createRecommendation(req, res) {
    console.log(req.body);
    db.Recommendation.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getRecommendation(req, res) {
    const user = req.params.user;
    db.Recommendation.find({ receiver: user })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUser(req, res) {
    db.User.findOne({ username: req.params.user })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
