import * as React from "react";
import { Box, Grid, Container, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import UserDatas from "./UserDatas";
import { useState } from "react";

export default function DataGridDemo() {
  const [rows, setRows] = useState(UserDatas);
  let removeHandler = (id) => {
    setRows(rows.filter((rows) => rows.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "FullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (_, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "UserName",
      headerName: "User Name",
      width: 150,
      editable: true,
      valueGetter: (_, row) => `${row.firstName || ""} ${row.Age || ""}`,
    },
    {
      field: "Avatar",
      headerName: "Avatar",
      width: 150,
      editable: false,
    },
    {
      field: "Age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "Status",
      headerName: "Status",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "Actions",
      headerName: "Actions",

      width: 150,

      renderCell: (params) => {
        return (
          <>
            <DeleteIcon
              onClick={() => removeHandler(params.row.id)}
              sx={{ cursor: " pointer", color: "#D2122E", mr: 2 }}
            />

            <Link to={`/User/${params.row.id}`}>
              <EditIcon sx={{ color: "#318CE7" }} />
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <Box sx={{ height: 400, width: "100%" }}>
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
              mb: "20px",
            }}
          >
            Users List
          </Button>
        </Grid>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={2}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}
