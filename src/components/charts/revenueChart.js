import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Chart Data
const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Online Sales",
      data: [15000, 17000, 5000, 16000, 12000, 15000, 20000],
      backgroundColor: "#0095FF",
      borderRadius: 6,
      barThickness: 15, // Fixed width for bars
    },
    {
      label: "Offline Sales",
      data: [13000, 12000, 22000, 6000, 11000, 12000, 10000],
      backgroundColor: "#00E096",
      borderRadius: 6,
      barThickness: 15, // Fixed width for bars
    },
  ],
};

// Chart Options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        font: { size: 10, weight: "bold" },
      },
    },
    tooltip: {
      enabled: true,
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { size: 12 }, color: "#666" },
    },
    y: {
      beginAtZero: true,
      grid: { color: "#EAEAEA" },
      ticks: { stepSize: 5000, font: { size: 12 }, color: "#666" },
    },
  },
};

const RevenueChart = () => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px 20px 3.5em 20px",
        borderRadius: "20px",
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        Total Revenue
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
