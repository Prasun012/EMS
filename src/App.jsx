import { BrowserRouter,Routes, Route } from "react-router-dom"
import { useState } from "react";

import './App.css'
import PrivateRoutes from "./route/privateRoute";
import PublicRoutes from "./route/publicRoute";

function App() {
const[isAuthenticated] = useState(localStorage.getItem("token") ? true : false);
  return (
    <BrowserRouter>
{isAuthenticated ? <PrivateRoutes/> : <PublicRoutes/>}
  
   </BrowserRouter>
  )
}

export default App
