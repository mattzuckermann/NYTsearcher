const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Article = require('../models/Article.js');
require('../config/passport')(passport);

const router = express.Router();

/* GET ALL ARTICLES */
router.get('/', passport.authenticate('jwt', { session: false }), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    Article.find(function(err, articles) {
      if (err) return next(err);
      res.json(articles);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

/* SAVE ARTICLE */
router.post('/', passport.authenticate('jwt', { session: false }), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    Article.create(req.body, function(err, post) {
      if (err) return err;
      res.json(post);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

const getToken = function(headers) {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    }
    return null;
  }
  return null;
};

module.exports = router;
