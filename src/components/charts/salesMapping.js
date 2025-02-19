import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const colorMapping = {
  "United States of America": "#ff9800",
  China: "#673ab7",
  Brazil: "#f44336",
  Indonesia: "#009688",
  Nigeria: "#3f51b5",
  "Saudi Arabia": "#009688",
};

// Use a working GeoJSON URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const SalesMapping = () => {
  return (
    <div
      style={{
        padding: "20px 5px",
        textAlign: "center",
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
        Sales Mapping by Country
      </h3>

      <ComposableMap
        projectionConfig={{ scale: 200 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;

              const fillColor = colorMapping[countryName] || "#e0e0e0"; // Default gray
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor}
                  stroke="#fff"
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#ccc", outline: "none" },
                    pressed: { fill: "#ccc", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default SalesMapping;
