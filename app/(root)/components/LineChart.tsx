"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Total",
        data: [1, 4, 6, 8, 9, 3, 5, 1, 4, 3, 6, 5],
        borderColor: "#F5FF80",
        backgroundColor: "#F5FF80",
      },
      {
        label: "Remaining",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgb(34,197,94)",
      },
      {
        label: "Spend",
        data: [5, 6, 3, 4, 1, 5, 9, 8, 6, 4, 1, 3],
        borderColor: "rgb(239,68,68)",
        backgroundColor: "rgb(239,68,68)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 15,
            weight: "400",
            family: "Poppins",
          },
        },
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
        labels: {
          font: {
            size: 15,
            weight: "400",
            family: "Poppins",
          },
        },
      },
    },
  };

  return <Line options={options} data={data} className="w-full" />;
}

export default LineChart;
