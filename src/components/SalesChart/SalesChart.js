import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import SalesChartData from "./SalesChartData";

export default function SalesChart() {
  return (
    <BarChart
      dataset={SalesChartData}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "Income", label: "Income" },
        { dataKey: "Visitors", label: "Visitors" },
        {
          dataKey: "CompletedOrders",
          label: "Completed Orders",
        },
        { dataKey: "PendingOrders", label: "Pending Orders" },
      ]}
      sx={{
        border: "2px solid var(--border-color)",
        borderRadius: "20px",
        padding: "10px",
      }}
      maxWidth={1000}
      height={500}
    />
  );
}
