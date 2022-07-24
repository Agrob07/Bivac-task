import React from "react";
import DataTable from "../components/DataTable";
import { columns } from "../data/tableData";
import ColumnApexChart from "../components/ColumnApexChart";

const Forecast = () => {
  return (
    <div>
      <DataTable columns={columns} />
      <ColumnApexChart />
    </div>
  );
};

export default Forecast;
