// Users.js

let Users = [
    { id: 1, email: "ram@example.com", username: "Ram", password: "123456", role: "superadmin" },
    { id: 2, email: "p1@example.com", username: "P1", password: "asdfghjkl", role: "user" },
];
<<<<<<< HEAD

export const addUser = (user) => {
    Users.push({
        id: Users.length + 1,
        role: "user", // default role
        ...user
    });
=======
//  registeration
 export let users = [];
 export const addUser = (newUser) => {
     users.push(newUser);
 };
 export const getUsers = () => {
     return users;
>>>>>>> 66bfa559fb20fc918fd2cb1e3539bb2e6d462788
};

export default Users;