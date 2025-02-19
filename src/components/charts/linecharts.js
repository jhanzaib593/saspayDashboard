import React from "react";
import { Line } from "react-chartjs-2";
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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define chart data
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Loyal Customers",
      data: [300, 100, 280, 250, 230, 270, 300, 340, 320, 300, 280, 260, 240],
      borderColor: "#8A2BE2",
      backgroundColor: "#A700FF",
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 3,
    },
    {
      label: "New Customers",
      data: [270, 100, 250, 220, 240, 280, 350, 380, 360, 320, 290, 260, 230],
      borderColor: "#FF4136",
      backgroundColor: "#EF4444",
      tension: 0.4,
      pointRadius: 0, // Larger point on Jul
      pointHoverRadius: 8,
      borderWidth: 3,
    },

    {
      label: "Unique Customers",
      data: [310, 100, 300, 270, 250, 280, 260, 290, 320, 330, 310, 290, 270],
      borderColor: "#2ECC40",
      backgroundColor: "#3CD856",
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 3,
    },
  ],
};

// Chart configuration
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        font: { size: 8, weight: "bold" },
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
      ticks: { font: { size: 10 } },
    },
    y: {
      beginAtZero: true,
      grid: { color: "#EAEAEA" },
      ticks: { stepSize: 100, font: { size: 10 } },
    },
  },
};

const LineChartComponent = () => {
  return (
    <div>
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        Visitor Insights
      </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;
