
<<<<<<< HEAD
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
=======
import { BrowserRouter,Routes, Route } from "react-router-dom"
// import { useState } from "react";

import './App.css'
import PrivateRoutes from "./core/Routes/PrivateRoutes";
// import PublicRoutes from "./core/Routes/PublicRoutes";

function App() {
// const[isAuthenticated] = useState(localStorage.getItem("token") ? true : false);
  return (
    <BrowserRouter>
{/* {isAuthenticated ? <PrivateRoutes/> : <PublicRoutes/>} */}
<PrivateRoutes/>
  
   </BrowserRouter>
>>>>>>> fca391fa5e2f5414699e2138d885bee334afa05e
  )
}

export default App;

