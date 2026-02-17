
import { BrowserRouter,Routes, Route } from "react-router-dom"
import { useState } from "react";

import './App.css'
import PrivateRoutes from "./core/Routes/PrivateRoutes";
import PublicRoutes from "./core/Routes/PublicRoutes";

function App() {
const[isAuthenticated] = useState(localStorage.getItem("token") ? true : false);
  return (
    <BrowserRouter>
{isAuthenticated ? <PrivateRoutes/> : <PublicRoutes/>}
  
   </BrowserRouter>
  )
}

export default App;
