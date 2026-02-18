<<<<<<< HEAD

import { BrowserRouter,Routes, Route } from "react-router-dom"
import { useState } from "react";

import './App.css'
import PrivateRoutes from "./Route/PrivateRoute";
import PublicRoutes from "./Route/publicRoute";

function App() {
const[isAuthenticated] = useState(localStorage.getItem("token") ? true : false);
  return (
    <BrowserRouter>
{isAuthenticated ? <PrivateRoutes/> : <PublicRoutes/>}
  
   </BrowserRouter>
  )
=======
import PrivateRoutes from "./core/Routes/PrivateRoutes";
import PublicRoutes from "./core/Routes/PublicRoutes";

function App() {
  const isAuthenticated = localStorage.getItem("users");

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
>>>>>>> 09e62d37dfe90e49804f0159804d7c41f8893d54
}

export default App;
