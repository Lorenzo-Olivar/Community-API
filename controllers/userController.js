const { User } = require('../models');

module.exports = {
  // get route to all users
  async getUsers(req, res) {
    try {
      const users = await User.find()
      .populate('thoughts');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get route to a single user using userId
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .populate('thoughts');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new post
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
