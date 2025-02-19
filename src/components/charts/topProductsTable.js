import React from "react";

const products = [
  {
    id: "01",
    name: "Home Decor Range",
    popularity: 45,
    color: "#0095FF",
    backcolor: "#CDE7FF",
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: 29,
    color: "#00E096",
    backcolor: "#8CFAC7",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    popularity: 18,
    color: "#884DFF",
    backcolor: "#C5A8FF",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    popularity: 25,
    color: "#FF8F0D",
    backcolor: "#FFD5A4",
  },
];

const TopProductsTable = () => {
  return (
    <div
      style={{
        padding: "20px",

        textAlign: "left",
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
        Top Products
      </h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr
            style={{
              textAlign: "start",
              color: "#96A5B8",
              fontSize: "13px",
            }}
          >
            <th style={{ paddingBottom: "10px" }}>#</th>
            <th style={{ paddingBottom: "10px" }}>Name</th>
            <th style={{ paddingBottom: "10px" }}>Popularity</th>
            <th style={{ paddingBottom: "10px" }}>Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              style={{ borderBottom: "1px solid #f0f0f0", height: "50px" }}
            >
              <td
                style={{
                  padding: "10px",
                  color: "#444A6D",
                  fontSize: 14,
                }}
              >
                {product.id}
              </td>
              <td style={{ padding: "10px", color: "#444A6D", fontSize: 14 }}>
                {product.name}
              </td>
              <td style={{ padding: "10px", width: "150px" }}>
                <div
                  style={{
                    background: product.backcolor,
                    borderRadius: "10px",
                    height: "5px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      background: product.color,
                      width: `${product.popularity}%`,
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  ></div>
                </div>
              </td>
              <td style={{ padding: "10px" }}>
                <span
                  style={{
                    background: product.backcolor + "40",
                    color: product.color,
                    padding: "5px 8px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    border: `1px  solid ${product.color}`,
                  }}
                >
                  {product.popularity}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProductsTable;
