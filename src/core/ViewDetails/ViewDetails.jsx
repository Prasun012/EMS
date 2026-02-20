import { useEffect, useState } from "react";

const ViewDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get logged-in user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("users"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return (
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold text-red-500">
          No user data found.
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        User Profile
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-gray-500">Full Name</p>
          <p className="text-lg font-medium">{user.username}</p>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <p className="text-lg font-medium">{user.email}</p>
        </div>

        <div>
          <p className="text-gray-500">Role</p>
          <p className="text-lg font-medium">{user.role }</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
