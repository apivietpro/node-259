const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require(config.get("router")));
module.exports = app;
