const { Friend } = require('../models');


const getAllCategory = async (req, res) => {
  try {
    const friends = await Friend.findAll();
    res.status(200).json(friends);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getFriendsById = async (req, res) => {
  try {
    const friend = await Friend.findByPk(req.params.id);
    if (friend) {
      res.status(200).json(friend);
    } else {
      res.status(404).json({ message: 'friend no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const deleted = await Friend.destroy({
      where: { id_friend: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'friend deleted' });
    } else {
      res.status(404).json({ message: 'friend no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getFriendsById,
  getAllFriend,
  deleteFriend
};