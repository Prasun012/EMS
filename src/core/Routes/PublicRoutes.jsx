import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default PublicRoutes;
