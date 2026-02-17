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

export default TableDemo;
