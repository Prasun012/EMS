import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import PrivateRoutes from "./core/Routes/PrivateRoutes";
import PublicRoutes from "./core/Routes/PublicRoutes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
