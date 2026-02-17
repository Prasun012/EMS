import { useState } from "react";
import Table from "../DataTable/Table";
import Data from "../DataTable/Data";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const ModelDemo = () => {
  const [open, setOpen] = useState(false);

  const columns = [
    { key: "index", label: "ID" },
    { key: "name", label: "Name" },
    { key: "department", label: "Department" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      {/* Wrat ModelDemo content */}
      <div className={open ? "blur-sm pointer-events-none" : ""}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Table
          </h1>

          <Button variant="primary" size="md" onClick={() => setOpen(true)}>
            + Add Employee
          </Button>
        </div>

        {/* Table Card */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <Table columns={columns} data={Data} />
        </div>
      </div>

      {/* Modal */}
      {open && (
        <Modal title="Add Employee" onClose={() => setOpen(false)}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Employee Name"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>IT</option>
              <option>HR</option>
              <option>Marketing</option>
            </select>

            
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ModelDemo;
