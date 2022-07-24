import React from "react";
import ReactApexChart from "react-apexcharts";

import { state } from "../data/apexColumn";
import { useSelector } from "react-redux/es/exports";
import { selectForecastData } from "../redux/slices/forecastSlice";

const ColumnApexChart = () => {
  const forecast = useSelector(selectForecastData);
  
  const series = [
    {
      name: "Max temp",
      data: forecast.length ? forecast[0].daily.temperature_2m_max : [],
    },
  ];
  const options = Object.assign({}, state.options, {
    xaxis: {
      categories: forecast.length ? forecast[0].daily.time : [],
    },
  });
  return (
    <div className="chart w-full sm:p-5 bg-gradient-to-r from-cyan-800 to-gray-500 py-3  my-8">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default ColumnApexChart;
