const ProductModel = require("../models/product");
const paginate = require("../../common/paginate");
exports.index = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;
  const skip = page * limit - limit;
  const totalRows = await ProductModel.find().countDocuments();
  const totalPages = Math.ceil(totalRows / limit);
  const products = await ProductModel.find()
    .populate({ path: "cat_id" })
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit);
  // console.log(paginate(totalRows, limit, page));

  return res.render("admin/products/product", {
    products,
    paginate: paginate(totalPages, limit, page),
    prev: page - 1,
    next: page + 1,
    page,
    totalPages,
  });
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
