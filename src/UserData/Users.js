// Users.js

let Users = [
    { id: 1, email: "ram@example.com", username: "Ram", password: "123456", role: "superadmin" },
    { id: 2, email: "p1@example.com", username: "P1", password: "asdfghjkl", role: "user" },
];
//  registeration
export let users = [];
export const addUser = (newUser) => {
    users.push(newUser);
};
export const getUsers = () => {
    return users;
};

export default Users;