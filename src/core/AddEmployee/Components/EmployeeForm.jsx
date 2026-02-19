import { useState } from "react";
import Button from "../../core/Button";
import departments from "../department"; // adjust path if needed

const emptyForm = {
  name: "",
  contactNumber: "",
  email: "",
  department: ""
};

const EmployeeForm = ({ onSubmit, editEmployee }) => {
  const [form, setForm] = useState(editEmployee || emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    if (!editEmployee) setForm(emptyForm);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-medium mb-4">
        {editEmployee ? "Edit Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Employee Name"
          className="w-full border rounded-md p-2"
          required
        />

        {/* Contact Number */}
        <input
          name="contactNumber"
          value={form.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full border rounded-md p-2"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-md p-2"
          required
        />

        {/* Department Dropdown */}
        <select
          name="department"
          value={form.department}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.name}>
              {dept.name}
            </option>
          ))}
        </select>

        <Button
          type="submit"
          variant={editEmployee ? "success" : "primary"}
          size="md"
        >
          {editEmployee ? "Update Employee" : "Add Employee"}
        </Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
