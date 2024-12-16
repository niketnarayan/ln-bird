import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Sidebar from "../Admin/Sidebar";

function Allproductlist() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Columns definition
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Productcode", headerName: "Product Code", width: 100 },
    { field: "ProductName", headerName: "Product Name", width: 150 },
    {
      field: "ProductQuantity",
      headerName: "Product Quantity",
      type: "number",
      width: 130,
    },
    {
      field: "ProductDescription",
      headerName: "Product Description",
      width: 200,
    },
    {
      field: "ProductBenefits",
      headerName: "Product Benefits",
      width: 200,
    },
    {
      field: "ProductImage",
      headerName: "Product Image",
      width: 160,
      renderCell: (params) => (
        <img
          src={params.row.ProductImage}
          alt="Product"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: "10px" }}
            onClick={() => handleEdit(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  // Rows data
  const rows = [
    {
      id: 1,
      Productcode: "P001",
      ProductName: "Product 1",
      ProductQuantity: 10,
      ProductDescription: "A great product",
      ProductBenefits: "Benefit 1",
      ProductImage: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      Productcode: "P002",
      ProductName: "Product 2",
      ProductQuantity: 20,
      ProductDescription: "Another great product",
      ProductBenefits: "Benefit 2",
      ProductImage: "https://via.placeholder.com/50",
    },
  ];

  const handleEdit = (row) => {
    alert(`Editing Product: ${row.ProductName}`);
    // Add logic to handle editing here
  };

  const handleDelete = (id) => {
    alert(`Deleting Product with ID: ${id}`);
    // Add logic to handle deletion here
  };

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div>
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

      <div
        style={{
          marginLeft: isSidebarCollapsed ? "80px" : "250px",
          transition: "margin-left 0.3s ease",
          padding: "20px",
          flexGrow: 1,
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <span style={{ fontSize: "25px", fontFamily: "Arial, sans-serif" }}>
            List of All Products
          </span>
        </div>

        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Paper>
      </div>
    </div>
  );
}

export default Allproductlist;
