const db = require('../models');

// Mongoose query abstractions
module.exports = {
  saveComment(req, res) {
    db.Comment.create(req.body)
      .then(function(dbComment) {
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
  },
};
