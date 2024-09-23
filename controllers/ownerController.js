const { Owner } = require('../models');

const createOwner = async (req, res) => {
  try {
    const owner = await Owner.create(req.body);
    res.status(201).json(owner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createOwner
};
