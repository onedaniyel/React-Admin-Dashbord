import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function StatisticsBox({
  title,
  price,
  compare,
  icon,
  description,
}) {
  return (
    <Card
      sx={{
        width: "300px",
        border: "2px solid var(--border-color)",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "30px",
            fontFamily: " var(--font-family)",
            fontWeight: 600,
          }}
          component="div"
        >
          {title}
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          height={"100px"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{ fontSize: "40px", fontFamily: " var(--font-family)" }}
          >
            {price}$
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
              fontFamily: " var(--font-family)",
            }}
          >
            {compare}%{icon}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: " var(--font-family)",
            fontWeight: 200,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
