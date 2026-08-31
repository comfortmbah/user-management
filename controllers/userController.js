import { getUsers } from "../storages/userStorage.js"; 

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