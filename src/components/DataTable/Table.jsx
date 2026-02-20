const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="text-left px-6 py-3 text-gray-600 font-semibold text-sm uppercase tracking-wider"
              >
                {column.label} {/*shows the display name*/}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (  //For each object in data, it creates a table row.
            <tr
              key={row.id}
              className="hover:bg-gray-100 transition-colors duration-150"
            >
              {columns.map((column) => ( //Each row aligns perfectly with headers
                <td
                  key={column.key}  
                  className="px-6 py-4 text-gray-700 text-sm"
                >
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
//Uses mapping to render rows and columns dynamically based on the provided data and column definitions.