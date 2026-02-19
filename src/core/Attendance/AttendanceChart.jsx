import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";

const Attendance = () => {
  // Demo attendance data
  const data = [
    { day: "Mon", Present: 22, Absent: 3 },
    { day: "Tue", Present: 20, Absent: 5 },
    { day: "Wed", Present: 25, Absent: 0 },
    { day: "Thu", Present: 18, Absent: 7 },
    { day: "Fri", Present: 23, Absent: 2 }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Weekly Attendance Overview
      </h2>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Present" fill="#22c55e" />
            <Bar dataKey="Absent" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Attendance;
