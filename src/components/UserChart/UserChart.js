import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart({ ActiveUsers, Mounth, NewUers }) {
  return (
    <LineChart
      sx={{
        border: "2px solid var(--border-color)",
        borderRadius: "20px",
        padding: "10px",
      }}
      xAxis={[{ scaleType: "point", data: Mounth }]}
      series={[
        { data: ActiveUsers, label: "ActiveUsers" },
        { data: NewUers, label: "NewUers" },
      ]}
      maxWidth={1000}
      height={500}
    />
  );
}
