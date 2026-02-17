
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
}

export default App;
