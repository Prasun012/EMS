import { useState, useEffect } from "react";
import Table from "../../components/DataTable/Table";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import DepartmentsData from "../Department/DepartmentTable";
import EmployeeData from "./EmployeeTable"; // Import static data

const EmployeeManagement = () => {
  const [open, setOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

 
  // Load employees from localStorage or fallback to EmployeeData
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : EmployeeData.map((emp, i) => ({ ...emp, index: i + 1 }));
  });

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    department: DepartmentsData.length > 0 ? DepartmentsData[0].department : ""
  });

  const [alert, setAlert] = useState(""); // For popup messages

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const columns = [
    { key: "index", label: "ID" },
    { key: "name", label: "Name" },
    { key: "contact", label: "Contact Number" },
    { key: "email", label: "Email" },
    { key: "department", label: "Department" },
    { key: "actions", label: "Actions" }
  ];

  const handleOpenAdd = () => {
    setEditingEmployee(null);
    setFormData({
      name: "",
      contact: "",
      email: "",
      department: DepartmentsData.length > 0 ? DepartmentsData[0].department : ""
    });
    setAlert("");
    setOpen(true);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setFormData({
      name: employee.name,
      contact: employee.contact,
      email: employee.email,
      department: employee.department
    });
    setAlert("");
    setOpen(true);
  };

  const handleSave = () => {
    // Validation
    if (!formData.name.trim()) {
      setAlert("Name is required");
      return;
    }
    if (!formData.contact.trim()) {
      setAlert("Contact number is required");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setAlert("Please enter a valid email containing '@'");
      return;
    }

    if (editingEmployee) {
      const updated = employees.map((emp) =>
        emp.index === editingEmployee.index ? { ...emp, ...formData } : emp
      );
      setEmployees(updated);
    } else {
      const newEmployee = {
        index: employees.length + 1,
        ...formData
      };
      setEmployees([...employees, newEmployee]);
    }

    setOpen(false);
    setEditingEmployee(null);
    setAlert("");
  };

  const handleDelete = (id) => {
    const filtered = employees.filter((emp) => emp.index !== id);
    const reindexed = filtered.map((emp, i) => ({ ...emp, index: i + 1 }));
    setEmployees(reindexed);
  };

  const tableData = employees.map((emp) => ({
    ...emp,
    actions: (
      <div className="flex gap-2">
        <Button variant="primary" size="sm" onClick={() => handleEdit(emp)}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => handleDelete(emp.index)}>
          Delete
        </Button>
      </div>
    )
  }));
console.log(tableData)
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className={open ? "blur-sm pointer-events-none" : ""}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
          <Button variant="primary" size="md" onClick={handleOpenAdd}>
            Add Employee
          </Button>
        </div>

        {/* Table */}
        <Table columns={columns} data={tableData} />
        
      </div>

      {/* Modal */}
      {open && (
        <Modal
          title={editingEmployee ? "Edit Employee" : "Add Employee"}
          onClose={() => {
            setOpen(false);
            setAlert("");
          }}
          onSave={handleSave}
        >
          <div className="space-y-3">
            {alert && (
              <div className="bg-red-100 text-red-700 p-2 rounded-md text-sm">
                {alert}
              </div>
            )}
            <input
              type="text"
              placeholder="Employee Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {DepartmentsData.map((dept) => (
                <option key={dept.id} value={dept.department}>
                  {dept.department}
                </option>
              ))}
            </select>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EmployeeManagement;
