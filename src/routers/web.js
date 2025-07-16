const express = require("express");
const router = express.Router();
const TestController = require("../apps/controllers/TestController");
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");

router.get("/test", TestController.Test);
// router.get("/form", TestController.Form);
// router.post("/form", TestController.Test);
router.get("/admin/login", AuthController.getLogin);
router.post("/admin/login", AuthController.postLogin);
router.get("/admin/logout", AuthController.logout);
router.get("/admin/dashboard", AdminController.dashboard);
router.get("/admin/products", ProductController.index);
router.get("/admin/products/create", ProductController.create);
router.get("/admin/products/edit/:id", ProductController.edit);
router.get("/admin/products/delete/:id", ProductController.del);

module.exports = router;
