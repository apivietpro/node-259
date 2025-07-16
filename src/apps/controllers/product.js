const ProductModel = require("../models/product");
exports.index = async (req, res) => {
  const products = await ProductModel.find()
    .populate({ path: "cat_id" })
    .sort({ _id: -1 })
    .limit(20);
  return res.render("admin/products/product", { products });
};
exports.create = (req, res) => {
  return res.render("admin/products/add_product");
};
exports.edit = (req, res) => {
  return res.render("admin/products/edit_product");
};
exports.del = (req, res) => {
  return res.send("Delete product");
};
