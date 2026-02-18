import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, users } from "../../UserData/Users";
import "./Register.css";


const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const usernameExists = users.find(
      (user) => user.username === formData.username
    );

    if (usernameExists) {
      alert("Username already taken");
      return;
    }

    addUser({
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password
    });

    alert("Registration successful!");

    navigate("/login"); // redirect to login
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={handleChange} required />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;
