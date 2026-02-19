import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Users, { addUser } from "../../UserData/Users";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    const usernameExists = Users.find(
      (user) => user.username === formData.username
    );

    if (usernameExists) {
      alert("Username already taken");
      return;
    }

    addUser({
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: "user" // default role
    });

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              name="username" 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Gmail */}
          <div className="form-group">
            <label>Gmail</label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@gmail.com"
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              onChange={handleChange} 
              required 
            />
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
