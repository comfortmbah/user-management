import { getUsers, addUser } from "../storages/userStorage.js"; 

export const userListGet = (req, res) => {
  const users = getUsers();

  res.render("index", {
    title: "User Lists", 
    users
  });
}

export const usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create User"
  });
}

export const usersCreatePost = (req, res) => {
  const { firstName, lastName } = req.body;

  addUser({ firstName, lastName, email, age, bio });

  res.redirect("/");
}