import { Routes, Route } from "react-router-dom";
import Dashboard from "../core/Dashboard/dashbord";
import Department from "../core/Department/department";
import EmployeeID from "../core/EmployeeID/employeeID";
import ViewDetail from "../core/ViewDetail/viewDetail";
import Attendance from "../core/Attendance/attendance";
import Employee from "../core/AddEditEmployee/Employee";
import MainLayout from "../core/MainLayout";

const PrivateRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<MainLayout />} >

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/employeeID" element={<EmployeeID />} />
        <Route path="/viewDetail" element={<ViewDetail />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/employee" element={<Employee />} />
        </Route>
      </Routes>

  );
};
export default PrivateRoutes;