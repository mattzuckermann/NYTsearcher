const db = require('../models');

// Mongoose query abstractions
module.exports = {
  findAll(req, res) {
    db.Article.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById(req, res) {
    db.Article.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.Article.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db.Article.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db.Article.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllU(req, res) {
    const user = req.body.user;
    db.Article.find({ user })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIdU(req, res) {
    const user = req.body.user;
    db.Article.findOne({ user, _id: req.body.id })
      .populate('comments')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createU(req, res) {
    db.Article.create(req.body.articleData)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateU(req, res) {
    db.Article.findOneAndUpdate({ user: req.params.user, _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  async removeU(req, res) {
    try {
      // Store comments array from current article ID
      const commentsIdArr = await db.Article.findById({
        user: req.body.user,
        _id: req.body.id,
      }).then(dbModel => dbModel.comments);

      // Loop through commentsIdArr and delete each comment associated with the respective ID
      await commentsIdArr.forEach(commentId => {
        db.Comment.findById({ _id: commentId }).then(dbModel => dbModel.remove());
      });

      // Find article and delete it
      await db.Article.findById({ user: req.body.user, _id: req.body.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel));
    } catch {
      err => res.status(422).json(err);
    }
  },
};
