import Data from "./Data";
import Table from "./Table";

const TableDemo = () => {
  const columns = [
    { key: "index", label: "Id" },
    { key: "name", label: "Name" },
    { key: "department", label: "Department" }
  ];

  return <Table columns={columns} data={Data} />;
};

<<<<<<< HEAD
export default TableDemo;
=======
export default TableDemo;
>>>>>>> 5cd1225f05a30d56b07aa572be6b04b53f6126a9
