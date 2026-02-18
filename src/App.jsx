
import { BrowserRouter,Routes, Route } from "react-router-dom"
// import { useState } from "react";

import './App.css'
import PrivateRoutes from "./core/Routes/PrivateRoutes";
// import PublicRoutes from "./core/Routes/PublicRoutes";

function App() {
<<<<<<< HEAD
// const[isAuthenticated] = useState(localStorage.getItem("token") ? true : false);
=======
//const[isAuthenticated] = useState(localStorage.getItem("token") ? true : false);
>>>>>>> a8cee5f3592516cf5255736c69b5ffee8b7856b0
  return (
    <BrowserRouter>
{/* {isAuthenticated ? <PrivateRoutes/> : <PublicRoutes/>} */}
<PrivateRoutes/>
  
   </BrowserRouter>
  )
}

export default App;

