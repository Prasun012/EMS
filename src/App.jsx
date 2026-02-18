
import { BrowserRouter,Routes, Route } from "react-router-dom"
import { useState } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import './App.css'

function App() {
//const[isAuthenticated] = useState(localStorage.getItem("token") ? true : false);
  return (
    <BrowserRouter>
{isAuthenticated ? <PrivateRoutes/> : <PublicRoutes/>}
  
   </BrowserRouter>
  )
}

export default App;

