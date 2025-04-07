const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const UsersModel = mongoose.model("loginAccount", UsersSchema);
module.exports = UsersModel;
