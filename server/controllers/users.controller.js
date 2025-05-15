const {
  getAllUsers,
  createUserInDB,
  updateUserInDb,
  deleteUserInDb,
  login,
} = require("../db/users.db");

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.send(users);
};

const loginController = async (req, res) => {
  const { email } = req.body;
  const response = await login(email);

  res.send(response);
};

const createUser = async (req, res) => {
  const { name } = req.body;
  const response = await createUserInDB({ name });
  res.send(response);
};

const updateUser = async (req, res) => {
  const { name } = req.body;
  const { id: userId } = req.params;
  const response = await updateUserInDb({ name }, userId);
  res.send(response);
};

const deleteUser = async (req, res) => {
  const { id: userId } = req.params;
  const response = await deleteUserInDb(userId);
  res.send(response);
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginController,
};
