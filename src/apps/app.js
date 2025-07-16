const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(config.get("staticFolder")));
app.set("views", config.get("viewsFolder"));
app.set("view engine", config.get("viewEngine"));

app.use(require(config.get("router")));
module.exports = app;
