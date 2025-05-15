const express = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  loginController,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/users", getUsers);

router.post("/users", createUser);

router.post("/login", loginController);

router.patch("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
