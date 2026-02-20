import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import Users from "../../UserData/Users";
import Button from "../../components/Button/Button";
import Users, { addUser } from "../../UserData/Users";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); //Store the values into the login form
  const [error, setError] = useState("");
  const navigate = useNavigate(); //used to redirect the user to a different page after login.

  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = Users.find(
      (user) =>
        user.username === username && user.password === password
    );

   if (validUser) {
  navigate("/dashboard", { state: { user: validUser } });
} else {
  setError("Invalid Username or Password");
}

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {error && (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          
          {/* Login Button */}
      <div className="flex justify-left">
          <Button type="submit" variant="primary" size="md" className="w-full">
            Login
          </Button>
</div>
          {/* Register Link */}
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;

// uses state to manage form inputs and error messages, and uses react-router-dom for navigation after successful login.
//  It checks the entered credentials against a list of users and provides feedback on login success or failure.