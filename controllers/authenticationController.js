const jwt = require('jsonwebtoken');
const settings = require('../config/settings');
const db = require('../models');

module.exports = {
  registerUser(req, res) {
    if (!req.body.username || !req.body.password) {
      res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
      const newUser = new db.User({
        username: req.body.username,
        password: req.body.password,
      });
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({ success: false, msg: 'Username already exists.' });
        }
        res.json({ success: true, msg: 'Successfully created new user.' });
      });
    }
  },
  loginUser(req, res) {
    db.User.findOne(
      {
        username: req.body.username,
      },
      function(err, user) {
        if (err) throw err;

        if (!user) {
          res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
          // check if password matches
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              // if user is found and password is right create a token
              const token = jwt.sign(user.toJSON(), settings.secret);
              // return the information including token as JSON
              res.json({ success: true, token: `JWT ${token}` });
            } else {
              res
                .status(401)
                .send({ success: false, msg: 'Authentication failed. Wrong password.' });
            }
          });
        }
      }
    );
  },
  loggedIn() {
    console.log('Checking if properly logged in...');
  },
};
