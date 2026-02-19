import { useState } from "react";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeTable from "./Components/EmployeeTable";


const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  const handleSubmit = (data) => {
    if (editEmployee) {
      // Update
      setEmployees(
        employees.map((emp) =>
          emp.id === editEmployee.id ? { ...data, id: emp.id } : emp
        )
      );
      setEditEmployee(null);
    } else {
      // Add
      const newEmployee = {
        ...data,
        id: Date.now().toString(),
      };
      setEmployees([...employees, newEmployee]);
    }
  };

  const handleEdit = (employee) => {
    setEditEmployee(employee);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Employee Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EmployeeForm
          onSubmit={handleSubmit}
          editEmployee={editEmployee}
        />

        <EmployeeTable
          employees={employees}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default EmployeeManagement;
