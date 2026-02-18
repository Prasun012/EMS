
// import { BrowserRouter,Routes, Route } from "react-router-dom"
// import { useState } from "react";
// import PrivateRoutes from "./routes/PrivateRoutes";
// import PublicRoutes from "./routes/PublicRoutes";
// import './App.css'

import Login from "./core/Auth/Login";

function App() {
//const[isAuthenticated] = useState(localStorage.getItem("token") ? true : false);
  return (
//     <BrowserRouter>
// {isAuthenticated ? <PrivateRoutes/> : <PublicRoutes/>}
<Login/>  
//    </BrowserRouter>
  )
}

export default App;

