const db = require('../models');

// Mongoose query abstractions
module.exports = {
  saveComment(req, res) {
    const token = getToken(req.headers);
    if (token) {
      db.Comment.create(req.body)
        .then(function(dbComment) {
          // If a Comment was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Comment
          // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
          // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
          return db.Article.update(
            { _id: req.params.id },
            { $push: { comments: dbComment } },
            { new: true }
          );
        })
        .then(function(dbArticle) {
          res.json(dbArticle);
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
};

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
