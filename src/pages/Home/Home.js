import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import StatisticsBox from "../../components/OveralStatistics/StatisticsBox";
import Statistics from "../../components/OveralStatistics/Statistics";
import BasicLineChart from "../../components/UserChart/UserChart";
import {
  Mounth,
  ActiveUsers,
  NewUers,
} from "../../components/UserChart/UserChartDatas";
import UserList from "../../components/NewUserList/NewUserList";
import LastTransactions from "../../components/LastTransactions/LastTransactions";

export default function Home() {
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
          Overview
        </Button>
        <Grid
          sx={{ mt: 2 }}
          container
          direction={"row"}
          spacing={5}
          justifyContent={"center"}
        >
          {Statistics.map((statistic) => {
            return (
              <StatisticsBox
                key={statistic.title}
                title={statistic.title}
                price={statistic.price}
                compare={statistic.compare}
                icon={statistic.icon}
                description={statistic.description}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid
        mt={10}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Button
          sx={{
            fontFamily: " var(--font-family)",
            textAlign: "center",
            border: "2px solid var(--border-color)",
            width: "300px",
            padding: "10px",
            borderRadius: "20px",
            mb: "20px",
          }}
        >
          User Chart
        </Button>
        <BasicLineChart
          Mounth={Mounth}
          ActiveUsers={ActiveUsers}
          NewUers={NewUers}
        />
      </Grid>
      <Grid
        mt={10}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Button
          sx={{
            fontFamily: " var(--font-family)",
            textAlign: "center",
            border: "2px solid var(--border-color)",
            width: "300px",
            padding: "10px",
            borderRadius: "20px",
            mb: "20px",
          }}
        >
          Transactions
        </Button>
        <Grid
          display={"flex"}
          justifyContent={"space-between"}
          container
          spacing={4}
        >
          <LastTransactions />
          <UserList />
        </Grid>
      </Grid>
    </Container>
  );
}
