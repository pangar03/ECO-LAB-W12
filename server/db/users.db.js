let currentUser = null;

const supabaseCli = require("../services/supabase.service");

const getCurrentUser = () => {
  return currentUser;
};

const login = async (email) => {
  const { data, error } = await supabaseCli
    .from("users")
    .select()
    .eq("email", email)
    .single();

  if (error) {
    console.error(error);
    return error;
  }

  currentUser = data;

  return currentUser;
};

const getAllUsers = async () => {
  console.log("Fetching all users");
  const { data, error } = await supabaseCli.from("users").select('username, email');
  console.log("Fetched all users", data);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const createUserInDB = async (user) => {
  const { data, error } = await supabaseCli
    .from("users")
    .insert([user])
    .select();

  if (error) {
    console.error(error);
    return error;
  }

  return data;
};

const updateUserInDb = async (newData, userId) => {
  const { data, error } = await supabaseCli
    .from("users")
    .update(newData)
    .eq("id", userId)
    .select();

  if (error) {
    console.error(error);
  }

  return data;
};

const deleteUserInDb = async (userId) => {
  const { data, error } = await supabaseCli
    .from("users")
    .delete()
    .eq("id", userId)
    .select();

  if (error) {
    console.error(error);
  }

  return data;
};

module.exports = {
  getAllUsers,
  createUserInDB,
  updateUserInDb,
  deleteUserInDb,
  login,
  getCurrentUser,
};
