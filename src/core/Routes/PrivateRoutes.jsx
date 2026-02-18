import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Department from "../Department/department";
import EmployeeID from "../EmployeeID/employeeID";
import ViewDetails from "../ViewDetails/ViewDetails";
import Attendance from "../Attendance/attendance";
import Employee from "../AddEmployee/Employee";
import MainLayout from "../MainLayout/MainLayout";


const PrivateRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<MainLayout />} >

        <Route path="/" element={<Dashboard />} />
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