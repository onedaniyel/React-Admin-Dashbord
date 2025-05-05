import React from "react";
import { Box, Grid, Container, Button } from "@mui/material";
import SaleStatisticsBox from "../../components/SaleStatistics/SaleStatisticsBox";
import SaleStatistics from "../../components/SaleStatistics/SaleStatistics";
import SalesChartData from "../../components/SalesChart/SalesChart";

export default function Sales() {
  return (
    <Container>
      <Grid
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={5}
      >
        <Button
          sx={{
            fontFamily: " var(--font-family)",
            textAlign: "center",
            border: "2px solid var(--border-color)",
            width: "300px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          Sale Statistics
        </Button>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        spacing={5}
        mt={2}
        display={"flex"}
      >
        {SaleStatistics.map((SaleStatistic) => {
          return (
            <SaleStatisticsBox
              key={SaleStatistic.Title}
              Title={SaleStatistic.Title}
              PeriodTime={SaleStatistic.PeriodTime}
              Amount={SaleStatistic.Amount}
              Comparison={SaleStatistic.Comparison}
              Time={SaleStatistic.Time}
            ></SaleStatisticsBox>
          );
        })}
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={10}
      >
        <Button
          sx={{
            fontFamily: " var(--font-family)",
            textAlign: "center",
            border: "2px solid var(--border-color)",
            width: "300px",
            padding: "10px",
            borderRadius: "20px",
            mb: 2,
          }}
        >
          Sale Chart
        </Button>

        <SalesChartData />
      </Grid>
    </Container>
  );
}
