const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "sly123@gmail.com",
    age: 35,
    bio: "Backend Developer",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "ify123@gmail.com",
    age: 32,
    bio: "Frontend Developer",
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
    email,
    age,
    bio,
  });
}