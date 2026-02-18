import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from "../../UserData/Users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const userFound = Users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (userFound) {
      localStorage.setItem("user", JSON.stringify(userFound));
      window.location.reload();
    } else {
      setMessage("Invalid Username or Password ❌");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;   // ✅ MUST BE OUTSIDE THE COMPONENT
