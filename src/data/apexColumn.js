export const state = {
  series: [
    {
      name: "Max temp",
      data: [30, 40, 28, 51, 42, 109, 100],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  },
};
