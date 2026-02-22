import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from "./UserMenu";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarMenu = [
    { id: 1, name: "Dashboard", path: "/" },
    { id: 2, name: "Employee", path: "/employee" },
    { id: 3, name: "Department", path: "/department" },
    { id: 4, name: "Attendance", path: "/attendance" },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      
      {/* Header */}
      <header className="flex items-center justify-between bg-black text-yellow-400 px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-2xl hover:text-yellow-300 transition"
          >
            ☰
          </button>

          <div className="flex items-center gap-2">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              className="h-8 w-9 object-contain"
            />
            <h1 className="text-xl font-bold tracking-wide">
            </h1>
          </div>
        </div>

        <UserMenu />
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside className="w-60 bg-black text-white shadow-xl flex flex-col justify-between">
            
            <div className="p-4">
              <ul className="space-y-3">
                {sidebarMenu.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-yellow-400 text-black shadow-md"
                            : "hover:bg-yellow-500 hover:text-black"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 text-sm text-gray-400 border-t border-gray-700">

            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-md p-6 min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;