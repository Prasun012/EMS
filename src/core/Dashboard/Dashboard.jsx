const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Card title="Total Employees" value="25" />
        <Card title="Departments" value="5" />
        <Card title="Present Today" value="18" />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => {
  return (
    <div style={{
      background: "#f1f5f9",
      padding: "20px",
      borderRadius: "8px",
      width: "200px"
    }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
};

export default Dashboard;
