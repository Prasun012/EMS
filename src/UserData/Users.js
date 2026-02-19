// Users.js

let Users = [
    { id: 1, email: "ram@example.com", username: "Ram", password: "123456", role: "superadmin" },
    { id: 2, email: "p1@example.com", username: "P1", password: "asdfghjkl", role: "user" },
];

export const addUser = (user) => {
    Users.push({
        id: Users.length + 1,
        role: "user", // default role
        ...user
    });
};

export default Users;