import { useState, useEffect } from "react";
import Table from "../../components/DataTable/Table";
import Data from "./DepartmentTable";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

const DepartmentSection = () => {
  const [open, setOpen] = useState(false);
  const [newDepartment, setNewDepartment] = useState("");

  // Load from localStorage or fallback to Data file
  const [departments, setDepartments] = useState(() => {
    const saved = localStorage.getItem("departments");
    return saved ? JSON.parse(saved) : Data;
  });

  // Save to localStorage whenever departments change
  useEffect(() => {
    localStorage.setItem("departments", JSON.stringify(departments));
  }, [departments]);

  const columns = [
    { key: "index", label: "ID" },
    { key: "department", label: "Department" },
    { key: "actions", label: "Actions" }
  ];

  // ✅ Add Department
  const handleAdd = () => {
    if (!newDepartment.trim()) return;

    const newDept = {
      index: departments.length + 1,
      department: newDepartment
    };

    setDepartments([...departments, newDept]);
    setNewDepartment("");
    setOpen(false);
  };

  // ✅ Delete Department
  const handleDelete = (id) => {
    const filtered = departments.filter((dept) => dept.index !== id);

    const reindexed = filtered.map((dept, i) => ({
      index: i + 1,
      department: dept.department
    }));

    setDepartments(reindexed);
  };

  // Prepare Table Data
  const tableData = departments.map((dept) => ({
    ...dept,
    actions: (
      <Button
        variant="danger"
        size="sm"
        onClick={() => handleDelete(dept.index)}
      >
        Delete
      </Button>
    )
  }));

  return (
<div className="min-h-screen bg-gray-100 p-8">
      
      {/* Wrat ModelDemo content */}
      <div className={open ? "blur-sm pointer-events-none" : ""}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Department
          </h1>

          <Button
            variant="primary"
            size="md"
            onClick={() => setOpen(true)}
          >
            Add Department
          </Button>
        </div>

        {/* Table */}
        <div>
          <Table columns={columns} data={tableData} />
        </div>
      </div>

      {/* Modal */}
      {open && (
        <Modal
          title="Add Department"
          onClose={() => setOpen(false)}
          onSave={handleAdd}
        >
          <input
            type="text"
            placeholder="Department Name"
            value={newDepartment}
            onChange={(e) => setNewDepartment(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </Modal>
      )}
    </div>
  );
};

export default DepartmentSection;
