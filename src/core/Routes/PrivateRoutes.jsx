import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import EmployeeID from "../EmployeeID/employeeID";
import ViewDetails from "../ViewDetails/ViewDetails";
import Employee from "../AddEmployee/Employee";
import MainLayout from "../MainLayout/MainLayout";
import Attendance from "../Attendance/Attendance";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/employeeID" element={<EmployeeID />} />
        <Route path="/viewDetail" element={<ViewDetails />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/employee" element={<Employee />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PrivateRoutes;
