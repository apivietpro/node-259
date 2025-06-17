exports.index = (req, res) => {
  return res.send("Get all product");
};
exports.create = (req, res) => {
  return res.send("Create product");
};
exports.edit = (req, res) => {
  return res.send("Edit product");
};
exports.del = (req, res) => {
  return res.send("Delete product");
};
