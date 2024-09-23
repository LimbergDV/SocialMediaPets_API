
const getAllCategory = async (req, res) => {
  try {
    const categorys = await Category.findAll();
    res.status(200).json(categorys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getCategoryById = async (req, res) => {
  try {
    const categorys = await Category.findByPk(req.params.id);
    if (categorys) {
      res.status(200).json(categorys);
    } else {
      res.status(404).json({ message: 'category no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: { id_category: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'category deleted' });
    } else {
      res.status(404).json({ message: 'category no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
getAllCategory,
getCategoryById,
deleteCategory

};