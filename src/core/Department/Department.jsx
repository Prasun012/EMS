import Table from "../../components/DataTable/Table";
import Data from "./Department";

const Department = () => {
  const columns = [
    { key: "index", label: "Id" },
    { key: "department", label: "Department" }
  ];

  return <Table columns={columns} data={Data} />;
};

export default Department;
