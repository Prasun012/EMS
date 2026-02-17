const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="text-left px-4 py-2 text-gray-700 font-medium uppercase text-sm"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-2 text-gray-800">
                  {column.key === "index" ? rowIndex + 1 : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
