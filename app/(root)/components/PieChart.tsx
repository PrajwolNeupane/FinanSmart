"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PieController,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// register the elements to use
ChartJS.register(ArcElement, Tooltip, Legend, PieController);

function PieChart() {
  const data = {
    labels: ["Teachers", "Students", "Faculty"],
    datasets: [
      {
        label: "EMI Chart",
        data: [60, 370, 45],
        borderColor: "black",
        backgroundColor: ["#7a94ae", "#25394d", "#d4e1ef"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return <Pie data={data} options={options} ></Pie>;
}

export default PieChart;
