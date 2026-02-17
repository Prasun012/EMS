const USERS_KEY = "users";

const initializeUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  if (!users) {
    const defaultUser = [
      { email: "test@test.com", password: "123456" }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUser));
    return defaultUser;
  }
  return JSON.parse(users);
};

export const getUsers = () => initializeUsers();

export const registerUser = (email, password) => {
  const users = getUsers();

  const exists = users.find((user) => user.email === email);
  if (exists) return { success: false, message: "User already exists" };

  users.push({ email, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return { success: true, message: "Registered successfully" };
};

export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) return { success: true };

  return { success: false, message: "Invalid credentials" };
};

export const resetPassword = (email, newPassword) => {
  const users = getUsers();

  const user = users.find((u) => u.email === email);
  if (!user) return { success: false, message: "User not found" };

  user.password = newPassword;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return { success: true, message: "Password updated" };
};
