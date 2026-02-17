import { Routes, Route } from "react-router-dom";


const PrivateRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<MainLayout />} >

        <Route path="/dashboard" element={<Dashbord />} />
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