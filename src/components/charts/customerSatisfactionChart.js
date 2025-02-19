import React, { useRef, useEffect, useState } from "react";
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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const createGradient = (ctx, color) => {
  if (!ctx) return color;
  // Change the coordinates to make the gradient go from bottom to top
  const gradient = ctx.createLinearGradient(0, 400, 0, 0); // Bottom to Top
  gradient.addColorStop(0, color + "80"); // Start from the bottom
  gradient.addColorStop(1, color + "10"); // End at the top
  return gradient;
};

const CustomerSatisfactionChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [1],
    datasets: [1],
  });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart || !chart.ctx) return;

    const ctx = chart.ctx;

    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Last Month",
          data: [3000, 4000, 2000, 2500, 2700, 2900, 4500],
          borderColor: "#007BFF",
          backgroundColor: createGradient(ctx, "#007BFF"),
          pointBackgroundColor: "#007BFF",
          pointBorderColor: "#fff",
          pointRadius: 6,
          fill: true,
          tension: 0.4,
        },
        {
          label: "This Month",
          data: [4000, 4200, 3500, 3800, 3700, 3600, 5000],
          borderColor: "#00C853",
          backgroundColor: createGradient(ctx, "#00C853"),
          pointBackgroundColor: "#00C853",
          pointBorderColor: "#fff",
          pointRadius: 6,
          fill: true,
          tension: 0.4,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true, intersect: false },
    },
    scales: {
      x: {
        display: false, // Hide x-axis labels
        grid: { display: false },
      },
      y: {
        display: false, // Hide y-axis
      },
    },
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "16px",
        height: "0%",
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
        Customer Satisfaction
      </h3>
      {chartData.labels.length > 0 ? (
        <Line ref={chartRef} data={chartData} options={options} />
      ) : (
        <p style={{ textAlign: "center", fontSize: "16px", color: "#777" }}>
          Loading chart...
        </p>
      )}

      {/* Custom legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
          borderTop: "1px solid #EAEAEA",
          paddingTop: "10px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#007BFF",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></span>
          <span style={{ color: "#777", fontSize: "14px" }}>Last Month</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#00C853",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></span>
          <span style={{ color: "#777", fontSize: "14px" }}>This Month</span>
        </div>
      </div>

      {/* Custom values */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5px",
          gap: "40px",
        }}
      >
        <span style={{ color: "#000", fontSize: "16px", fontWeight: "bold" }}>
          $3,004
        </span>
        <span style={{ color: "#000", fontSize: "16px", fontWeight: "bold" }}>
          $4,504
        </span>
      </div>
    </div>
  );
};

export default CustomerSatisfactionChart;
