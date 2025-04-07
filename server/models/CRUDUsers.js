const mongoose = require("mongoose");

const CRUDUserSchema = new mongoose.Schema({
  email: String,
  name: String,
  status: String,
  role: String,
});

const CRUDUsersModel = mongoose.model("crudUser", CRUDUserSchema);
module.exports = CRUDUsersModel;
