import { Routes, Route } from "react-router-dom";
import Dasboard from "../core/Dashboard/Dashboard";
import Department from "../core/Department/department";
import ViewDetails from "../core/ViewDetails/viewDetail";
import EmployeeID from "../core/EmployeeID/employeeID";
import Attendance from "../core/Attendance/attendance";
import Employee from "../core/AddEditEmployee/Employee";


const PrivateRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<MainLayout />} >

        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/employeeID" element={<EmployeeID />} />
        <Route path="/viewDetail" element={<ViewDetails />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/employee" element={<Employee />} />
        </Route>
      </Routes>

  );
};
export default PrivateRoutes;