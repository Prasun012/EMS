import { useLocation } from "react-router-dom";

// Import your ready components
import ViewDetails from "../ViewDetails/ViewDetails";
import Department from "../Department/Department";
import Attendance from "../Attendance/Attendance";
import AttendanceChart from "../Attendance/AttendanceChart";
import EmployeeID from "../EmployeeID/employeeID";

const Dashboard = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <h2>Please login first</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {user.name}</h1>

      {/* SUPER ADMIN VIEW */}
      {user.role === "superadmin" && (
        <>
          <Section title="View Detail List">
            <ViewDetails />
          </Section>

          <Section title="Department Detail List">
            <Department />
          </Section>

          <Section title="Time Stand Attendance Chart">
            <AttendanceChart />
          </Section>
        </>
      )}

      {/* NORMAL USER VIEW */}
      {user.role === "user" && (
        <>
          <Section title="My Personal Details">
            <EmployeeID user={user} />
          </Section>

          <Section title="My Attendance">
            <Attendance user={user} />
          </Section>
        </>
      )}
    </div>
  );
};

const Section = ({ title, children }) => (
  <div
    style={{
      marginTop: "30px",
      padding: "20px",
      background: "#f8fafc",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
    }}
  >
    <h2 style={{ marginBottom: "15px" }}>{title}</h2>
    {children}
  </div>
);

export default Dashboard;
