const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
  },
];

export const getUsers = () => {
  return users;
}

export const addUser = ({ firstName, lastName }) => {
  const id = users.length + 1;

  users.push({
    id,
    firstName,
    lastName,
  });
}