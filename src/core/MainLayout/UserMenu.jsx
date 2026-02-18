import { useState } from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* User Icon */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-xl"
      >
        <img
          src="/src/assets/usermenu.png"
          alt="User Icon"
          className="h-8 w-8 rounded-full"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg">
          <NavLink
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Profile
          </NavLink>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
