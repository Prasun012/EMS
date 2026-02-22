// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
//   Navigate
// } from "react-router-dom";

// import { loginUser, registUser, resetPassword } from "./fakeDatabase";

// function ProtectedRoute({ isAuthenticated, children }) {
//   if (!isAuthenticated) return <Navigate to="/" replace />;
//   return children;
// }

// function Card({ children }) {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//         {children}
//       </div>
//     </div>
//   );
// }

// function Login({ setIsAuthenticated }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const result = loginUser(email, password);

//     if (result.success) {
//       localStorage.setItem("isAuthenticated", "true");
//       setIsAuthenticated(true);
//       navigate("/home");
//     } else {
//       alert(result.message);
//     }
//   };

//   return (
//     <Card>
// 	<h2 className="text-1xl font-semibold text-center text-blue-500 mb-6">Employee Management System</h2>
//       <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />

//       <button
//         onClick={handleLogin}
//         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//       >
//         Login
//       </button>

//       <div className="text-sm text-center mt-4 space-y-2">
//         <div>
//           <Link to="/forgot" className="text-blue-500 hover:underline">
//             Forgot Password?
//           </Link>
//         </div>

//         <div>
//           Don't have an account?{" "}
//           <Link to="/register" className="text-blue-500 hover:underline">
//             Register
//           </Link>
//         </div>
//       </div>
//     </Card>
//   );
// }

// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = () => {
//     const result = registerUser(email, password);
//     alert(result.message);
//     if (result.success) navigate("/");
//   };

//   return (
//     <Card>
//       <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full mb-3 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full mb-4 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
//       />

//       <button
//         onClick={handleRegister}
//         className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
//       >
//         Register
//       </button>

//       <div className="text-sm text-center mt-4">
//         Already have an account?{" "}
//         <Link to="/" className="text-blue-500 hover:underline">
//           Login
//         </Link>
//       </div>
//     </Card>
//   );
// }

// function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const navigate = useNavigate();

//   const handleReset = () => {
//     const result = resetPassword(email, newPassword);
//     alert(result.message);
//     if (result.success) navigate("/");
//   };

//   return (
//     <Card>
//       <h2 className="text-2xl font-semibold text-center mb-6">
//         Reset Password
//       </h2>

//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full mb-3 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
//       />

//       <input
//         type="password"
//         placeholder="New Password"
//         onChange={(e) => setNewPassword(e.target.value)}
//         className="w-full mb-4 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
//       />

//       <button
//         onClick={handleReset}
//         className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
//       >
//         Reset
//       </button>

//       <div className="text-sm text-center mt-4">
//         Back to{" "}
//         <Link to="/" className="text-blue-500 hover:underline">
//           Login
//         </Link>
//       </div>
//     </Card>
//   );
// }


// function Home({ setIsAuthenticated }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated");
//     setIsAuthenticated(false);
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md text-center">
//         <h2 className="text-2xl font-semibold mb-4">Home</h2>
//         <p className="mb-6 text-gray-600">You are logged in 🎉</p>

//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const auth = localStorage.getItem("isAuthenticated");
//     if (auth === "true") setIsAuthenticated(true);
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<Login setIsAuthenticated={setIsAuthenticated} />}
//         />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot" element={<ForgotPassword />} />
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Home setIsAuthenticated={setIsAuthenticated} />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
