import React, { useRef } from "react";
import { useTable } from "react-table";
import { useSelector } from "react-redux/es/exports";
import { selectForecastData } from "../redux/slices/forecastSlice";

function DataTable({ columns }) {
  const forecastData = useSelector(selectForecastData);
  const data = useRef([]);

  if (forecastData.length) {
    const cast = forecastData[0];
    data.current = cast.daily.time.map((item, idx) => ({
      date: cast.daily.time[idx],
      temp: cast.daily.temperature_2m_max[idx],
      elev: cast.elevation,
      coords: `Lat: ${cast.latitude}  Long: ${cast.longitude}`,
    }));
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: data.current,
    });

  return (
    <>
      <table
        {...getTableProps()}
        className=" bg-white-500"
        style={{ width: "100%" }}
      >
        <thead style={{ width: "100%" }}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                style={{ border: "1px solid rgba(220,220,220 ,50)" }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default DataTable;
