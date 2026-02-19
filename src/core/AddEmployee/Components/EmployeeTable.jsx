

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
      <h2 className="text-lg font-medium mb-4">
        Employee List
      </h2>

      {employees.length === 0 ? (
        <p className="text-gray-500">No employees added yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Email</th>
              <th className="p-2">Department</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-t">
                <td className="p-2">{emp.name}</td>
                <td className="p-2">{emp.contactNumber}</td>
                <td className="p-2">{emp.email}</td>
                <td className="p-2">{emp.department}</td>
                <td className="p-2 flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onEdit(emp)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(emp.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeTable;
