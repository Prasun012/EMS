import PrivateRoutes from "./core/Routes/PrivateRoutes";
import PublicRoutes from "./core/Routes/PublicRoutes";

function App() {
  const isAuthenticated = localStorage.getItem("users");

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}

export default App;
