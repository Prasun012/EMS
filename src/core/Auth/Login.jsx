import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from "../../UserData/Users";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const userFound = Users.find(
      (user) =>
        user.username === username && user.password === password
    );

    if (userFound) {
      localStorage.setItem("user", JSON.stringify(userFound));
      setIsAuthenticated(true);
      navigate("/");
    } else {
      setMessage("Invalid Username or Password ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

        {message && (
          <p className="mt-4 text-center text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
