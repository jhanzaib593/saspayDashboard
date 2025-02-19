import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, Typography } from "antd";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const VolumeServiceChart = () => {
  const data = {
    labels: ["", "", "", "", "", ""], // No labels
    datasets: [
      {
        data: [400, 550, 470, 420, 350, 390],
        backgroundColor: "#007bff",
        borderRadius: 6,
        barThickness: 20,
      },
      {
        data: [260, 300, 210, 250, 230, 270],
        backgroundColor: "#00c49f",
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: { display: false, drawBorder: false },
        ticks: { display: false },
        border: { display: false },
      },
      y: {
        stacked: true,
        grid: { display: false, drawBorder: false },
        ticks: { display: false },
        beginAtZero: true,
        border: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <Card
      style={{
        border: "none",
      }}
    >
      <Typography.Title level={4} style={{ color: "#001f3f" }}>
        Volume vs Service Level
      </Typography.Title>

      <div style={{ height: "100%" }}>
        <Bar data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          borderTop: "1px solid #BDC9D3",
          paddingTop: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            borderRight: "1px solid #BDC9D3",
            paddingRight: 20,
          }}
        >
          <span
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#007bff",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "8px",
            }}
          ></span>
          <Typography.Text style={{ color: "#666" }}>Volume</Typography.Text>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#00c49f",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "8px",
            }}
          ></span>
          <Typography.Text style={{ color: "#666" }}>Services</Typography.Text>
        </div>
      </div>

      {/* Summary Numbers */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#001f3f",
          gap: "4em",
        }}
      >
        <div>1,135</div>
        <div>635</div>
      </div>
    </Card>
  );
};

export default VolumeServiceChart;
