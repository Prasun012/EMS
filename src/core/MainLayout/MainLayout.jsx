import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const sidebarMenu = [
    { id: 1, name: "Dashboard", path: "/" },
    { id: 2, name: "Employee", path: "/employee" },
    { id: 3, name: "Department", path: "/department" },
    { id: 4, name: "Attendance", path: "/attendance" },
    { id: 5, name: "Details", path: "/viewDetail" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("users");
    navigate("/login");
    window.location.reload(); // refresh to update App.jsx
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between bg-blue-600 text-white px-6 py-3 shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-2xl"
          >
            ☰
          </button>

          <h1 className="text-lg font-semibold">
            Employee Management System
          </h1>
        </div>

        <div className="flex gap-4 text-sm">
          <button className="hover:underline">Profile</button>
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside className="w-56 bg-white shadow-md p-4 flex flex-col justify-between">
            {/* Top Menu */}
            <ul className="space-y-2">
              {sidebarMenu.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md transition ${
                        isActive
                          ? "bg-blue-100 text-blue-600 font-medium"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Bottom Logout */}
            
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
