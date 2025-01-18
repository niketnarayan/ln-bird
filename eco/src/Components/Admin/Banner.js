import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Sidebar from "../Admin/Sidebar";
import Swal from "sweetalert2"; // Import Swal
import api from '../api'

function Banner() {
  const [banners, setBanners] = useState([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editData, setEditData] = useState(null);
  const [newBanner, setNewBanner] = useState({
    bannerTitle: "",
    sliderBannerImage: [], // Slider banner image file
    productBannerImage: [], // Product banner image file
    bannerLink: "",
  });

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  useEffect(() => {
    fetchBanners();
  }, []);

  // Fetch banners from backend
  const fetchBanners = async () => {
    try {
      const response = await api.get("getAllBanners");
      console.log(response);
      
      setBanners(response.data.banner); // Set the banners state with fetched data
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  // Handle Banner Form Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBanner((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e, type) => {
    const files = Array.from(e.target.files);
    setNewBanner((prev) => ({
      ...prev,
      [type]: files,
    }));
  };
  

  // Reset form and dialog state
  const resetForm = () => {
    setNewBanner({
      bannerTitle: "",
      sliderBannerImage: [],
      productBannerImage: [],
      bannerLink: "",
    });
    setEditData(null);
    setOpenDialog(false);
  };

  // Handle banner submission (Adding or Editing)
  const handleBannerSubmit = async () => {
    const formData = new FormData();
    formData.append("bannerTitle", newBanner.bannerTitle);
    formData.append("bannerLink", newBanner.bannerLink);

    // Handle slider banner image
// Handle slider banner images
if (Array.isArray(newBanner.sliderBannerImage) && newBanner.sliderBannerImage.length > 0) {
  newBanner.sliderBannerImage.forEach((image, index) => {
    formData.append(`sliderBannerImage[${index}]`, image);
  });
} else if (editData?.sliderBannerImage && !newBanner.sliderBannerImage) {
  editData.sliderBannerImage.forEach((image, index) => {
    formData.append(`sliderBannerImage[${index}]`, image); // Use existing images
  });
}

// Handle product banner images
if (Array.isArray(newBanner.productBannerImage) && newBanner.productBannerImage.length > 0) {
  newBanner.productBannerImage.forEach((image, index) => {
    formData.append(`productBannerImage[${index}]`, image);
  });
} else if (editData?.productBannerImage && !newBanner.productBannerImage) {
  editData.productBannerImage.forEach((image, index) => {
    formData.append(`productBannerImage[${index}]`, image); // Use existing images
  });
}


    try {
      if (editData) {
        await api.put(`editBanner/${editData._id}`, formData);
        Swal.fire("Updated!", "Banner updated successfully.", "success");
      } else {
        await api.post("uploadBanner", formData);
        Swal.fire("Added!", "Banner added successfully.", "success");
      }         
      resetForm();
      fetchBanners(); // Reload the banners list
    } catch (error) {
      console.error("Error submitting banner:", error);
      Swal.fire("Error!", "There was an issue submitting the banner.", "error");
    }
  };




  // Handle Edit Banner
  const handleEdit = (row) => {
    setEditData(row);
    setNewBanner({
      bannerTitle: row.bannerTitle,
      bannerLink: row.bannerLink,
      sliderBannerImage: null, // Reset to null for file upload
      productBannerImage: null, // Reset to null for file upload
    });
    setOpenDialog(true);
  };

  // Handle Delete Banner
  const handleDelete = async (id) => {
    try {
      await api.delete(`deleteBanner/${id}`);
      fetchBanners(); // Reload the banners list after delete
      Swal.fire("Deleted!", "Banner deleted successfully.", "success");
    } catch (error) {
      console.error("Error deleting banner:", error);
      Swal.fire("Error!", "There was an issue deleting the banner.", "error");
    }
  };

  // DataGrid columns
  const columns = [
    { field: "bannerTitle", headerName: "Banner Title", width: 200 },
    { field: "bannerLink", headerName: "Banner Link", width: 200 },
    {
      field: "sliderBannerImage",
      headerName: "Slider Banner",
      width: 150,
      renderCell: (params) => (
        <img
          src={params.row.sliderBannerImage}
          alt="Slider Banner"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      field: "productBannerImage",
      headerName: "Product Banner",
      width: 150,
      renderCell: (params) => (
        <img
          src={params.row.productBannerImage}
          alt="Product Banner"
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
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  // Utility function to check if an object is a File or Blob


  // Utility function to handle image preview
  const getImagePreview = (images) => {
    if (Array.isArray(images)) {
      // Map over the array and return previews for each item
      return images.map((image, index) => {
        if (image instanceof File || image instanceof Blob) {
          return URL.createObjectURL(image); // For File/Blob, create object URL
        } else if (typeof image === "string" && image.startsWith("http")) {
          return image; // For URL strings, return them as is
        }
        return null; // Return null if neither condition is met
      });
    }
    return null; // Return null if the images array is not valid
  };
  

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
            Banner Management
          </span>
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenDialog(true)}
        >
          Add Banner
        </Button>

        <Paper sx={{ height: 400, width: "100%", marginTop: "20px" }}>
          <DataGrid
            rows={banners}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableRowSelectionOnClick
            getRowId={(row) => row._id} // Use the _id field as the unique identifier
          />
        </Paper>

        <Dialog open={openDialog} onClose={resetForm}>
          <DialogTitle>{editData ? "Edit Banner" : "Add Banner"}</DialogTitle>
          <DialogContent>
            <TextField
              label="Banner Title"
              variant="outlined"
              fullWidth
              name="bannerTitle"
              value={newBanner.bannerTitle}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              label="Banner Link"
              variant="outlined"
              fullWidth
              name="bannerLink"
              value={newBanner.bannerLink}
              onChange={handleInputChange}
              margin="normal"
            />
            <div>
              <label>Slider Banner</label>
            </div>
            <input
              type="file"
              accept="image/*"
              name="sliderBannerImage"
              onChange={(e) => handleImageChange(e, "sliderBannerImage")}
              style={{ marginTop: "10px" }}
            />
            {newBanner.sliderBannerImage ? (
              <img
                src={getImagePreview(newBanner.sliderBannerImage)}
                alt="Preview"
                style={{ width: "50px", height: "50px", marginTop: "10px" }}
              />
            ) : (
              editData?.sliderBannerImage && (
                <img
                  src={getImagePreview(editData.sliderBannerImage)}
                  alt="Existing Slider Banner"
                  style={{ width: "50px", height: "50px", marginTop: "10px" }}
                />
              )
            )}
            <div>
              <label>Product Banner</label>
            </div>
            <input
              type="file"
              accept="image/*"
              name="productBannerImage"
              onChange={(e) => handleImageChange(e, "productBannerImage")}
              style={{ marginTop: "10px" }}
            />
            {newBanner.productBannerImage ? (
              <img
                src={getImagePreview(newBanner.productBannerImage)}
                alt="Preview"
                style={{ width: "50px", height: "50px", marginTop: "10px" }}
              />
            ) : (
              editData?.productBannerImage && (
                <img
                  src={getImagePreview(editData.productBannerImage)}
                  alt="Existing Product Banner"
                  style={{ width: "50px", height: "50px", marginTop: "10px" }}
                />
              )
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={resetForm} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleBannerSubmit}
              color="primary"
              variant="contained"
            >
              {editData ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Banner;
