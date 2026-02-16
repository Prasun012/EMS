import { Routes, Route } from "react-router-dom";
import Login from "../core/Auth/Login";
import Register from "../core/Auth/Register";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default PublicRoutes;

