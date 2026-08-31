import { getUsers } from "../storages/userStorage"; 

export const userListGet = (req, res) => {
  const users = getUsers();

  res.render("index", {
    title: "User Lists", 
    users
  });
}