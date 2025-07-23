const ProductModel = require("../models/product");
const CategoryModel = require("../models/category");
const paginate = require("../../common/paginate");
const fs = require("fs");
const slug = require("slug");
exports.index = async (req, res) => {
  //
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
exports.create = async (req, res) => {
  const categories = await CategoryModel.find().sort({ _id: 1 });
  return res.render("admin/products/add_product", { categories });
};
exports.store = async (req, res) => {
  const { body, file } = req;
  const product = {
    name: body.name,
    slug: slug(body.name),
    price: body.price,
    warranty: body.warranty,
    accessories: body.accessories,
    promotion: body.promotion,
    status: body.status,
    cat_id: body.cat_id,
    is_stock: body.is_stock,
    featured: body.featured === "on" || false,
    description: body.description,
  };
  if (file) {
    const originalname = file.originalname;
    const thumbnail = `products/${originalname}`;
    // di chuyển ảnh từ thư mục tạm về thư mục upload/products
    fs.renameSync(file.path, `${__dirname}/../../public/upload/${thumbnail}`);
    product.thumbnail = thumbnail;
    await ProductModel(product).save();
    return res.redirect("/admin/products");
  }
};
exports.edit = (req, res) => {
  //
  return res.render("admin/products/edit_product");
};
exports.del = (req, res) => {
  //
  return res.send("Delete product");
};
