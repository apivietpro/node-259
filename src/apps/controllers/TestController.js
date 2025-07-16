const UserModel = require("../models/user");
const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
exports.Test = async (req, res) => {
  console.log(req.query);

  // const user = {
  //   email: "vietpro.edu.vn@gmail.con",
  //   password: "123456",
  // };
  // UserModel(user).save();
  // UserModel.updateOne(
  //   { email: "vietpro.edu.vn@gmail.con" },
  //   {
  //     password: "666666",
  //     role: "admin",
  //   }
  // ).exec((err, docs) => {
  //   console.log(err);
  //   console.log(docs);
  // });
  // UserModel.deleteOne({ email: "vietpro.edu.vn@gmail.con" }, (err, docs) => {
  //   console.log(docs);
  // });
};

// exports.Form = (req, res) => {
//   return res.send(`
//     <form method="post">
//         <input type=text name=email>
//         <br>
//         <input type=password name=password>
//         <br>
//         <button type=submit>Send</button>
//     </form>
//   `);
// };
