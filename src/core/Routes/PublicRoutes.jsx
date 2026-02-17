import { Routes, Route } from "react-router-dom";
import Register from "../core/Auth/Register";
import Login from "../core/Auth/Login";


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default PublicRoutes;

