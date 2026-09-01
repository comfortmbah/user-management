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

export const usersSearchGet = (req, res) => {
  const { name, email } = req.query;

  const users = getUsers();

  const searchResults = users.filter(user => {
    const nameMatch = !name || `${user.firstName} ${user.lastName}`.toLowerCase().includes(name.toLowerCase());
    const emailMatch = !email || user.email.toLowerCase().includes(email.toLowerCase());
    return nameMatch && emailMatch;
  });

  res.render("search", {
    title: "Search Results",
    users: searchResults,
    name,
    email,
  });
}