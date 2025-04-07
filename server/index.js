const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Users");
const CRUDUsersModel = require("./models/CRUDUsers");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://vladimirkenjurado2626:mRTDxliMYfB0oB3U@vladimirken.jqmjwp4.mongodb.net/medspecializedExam"
);

app.post("/", (req, res) => {
  const { email, password } = req.body;
  UsersModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  UsersModel.create(req.body)
    .then((loginAccount) => res.json(loginAccount))
    .catch((err) => res.json(err));
});

app.get("/users", (req, res) => {
  CRUDUsersModel.find({})
    .then((crudUser) => res.json(crudUser))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  CRUDUsersModel.findById({ _id: id })
    .then((crudUser) => res.json(crudUser))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  CRUDUsersModel.findByIdAndUpdate(
    { _id: id },
    {
      email: req.body.email,
      name: req.body.name,
      status: req.body.status,
      role: req.body.role,
    }
  )
    .then((crudUser) => res.json(crudUser))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  CRUDUsersModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  CRUDUsersModel.create(req.body)
    .then((crudUser) => res.json(crudUser))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
