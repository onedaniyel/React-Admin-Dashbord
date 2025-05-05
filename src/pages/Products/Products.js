import * as React from "react";
import { Box, Grid, Container, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ProductsData from "./ProductsData";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export default function Products() {
  let removeHandler = (id) => {
    setRows(rows.filter((rows) => rows.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "ProductName",
      headerName: "Product Name",
      width: 150,
      editable: true,
    },
    {
      field: "Price",
      headerName: "Price",
      width: 150,
      editable: true,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "Category",
      headerName: "Category",
      sortable: false,
      width: 160,
    },
    {
      field: "Actions",
      headerName: "Actions",
      sortable: false,
      width: 160,

      renderCell: (params) => {
        return (
          <>
            <DeleteIcon
              onClick={() => removeHandler(params.row.id)}
              sx={{ cursor: " pointer", color: "#D2122E", mr: 2 }}
            />
            <Link to={`/Product/${params.row.id}`}>
              <EditIcon
                sx={{
                  color: "#318CE7",
                }}
              />
            </Link>
          </>
        );
      },
    },
  ];

  const [rows, setRows] = useState(ProductsData);
  return (
    <Container>
      <Box sx={{ height: 400, maxWidth: "100%" }}>
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
            Products List
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
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}
