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
import { ShoppingFilled, TransactionOutlined } from "@ant-design/icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TargetRealityChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [
      {
        label: "Reality Sales",
        data: [7, 5, 4, 6, 8, 8, 8],
        backgroundColor: "#4CAF8F",
        borderRadius: 4,
        barThickness: 15,
      },
      {
        label: "Target Sales",
        data: [8, 7, 9, 7, 10, 10, 10],
        backgroundColor: "#FFC107",
        borderRadius: 4,
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#888", font: { size: 10 } },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div
      style={{
        padding: "20px",
        height: "0%",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        Target vs Reality
      </h3>
      <Bar data={data} options={options} />
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
      {/* Legend Section */}

      <div
        style={{
          marginTop: "15px",
          gap: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              marginRight: "10px",
            }}
          >
            <ShoppingFilled
              style={{
                backgroundColor: "#E2FFF3",
                padding: 8,
                color: "#4AB58E",
                borderRadius: 5,
                fontSize: 20,
              }}
            />
          </div>
          <div>
            <p style={{ fontSize: "12px", color: "#151D48", fontWeight: 500 }}>
              Reality Sales
            </p>
            <p style={{ fontSize: "10px", color: "#737791" }}>Global</p>
          </div>
        </div>

        <div style={{ margin: "auto 0" }}>
          <p style={{ color: "#4CAF8F", fontSize: "14px", fontWeight: "bold" }}>
            8.823
          </p>
        </div>
      </div>

      {/* Bottom Values */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          //   marginTop: "5px",
          gap: "40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", paddingTop: 10 }}>
          <div
            style={{
              marginRight: "10px",
            }}
          >
            <TransactionOutlined
              style={{
                backgroundColor: "#FFF4DE",
                padding: 8,
                color: "#FFA800",
                borderRadius: 5,
                fontSize: 20,
              }}
            />
          </div>

          <div>
            <p style={{ fontSize: "12px", color: "#151D48", fontWeight: 500 }}>
              Target Sales
            </p>
            <p style={{ fontSize: "10px", color: "#737791" }}>Commercial</p>
          </div>
        </div>
        <div style={{ margin: "auto 0" }}>
          <p style={{ color: "#FFC107", fontSize: "14px", fontWeight: "bold" }}>
            12.122
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TargetRealityChart;
