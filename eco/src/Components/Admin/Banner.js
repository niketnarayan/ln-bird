
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
import Sidebar from '../Admin/Sidebar';

function Banner() {

    const [banners, setBanners] = useState([]);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [editData, setEditData] = useState(null);
    const [newBanner, setNewBanner] = useState({
      bannerTitle: "",
      bannerImage: null,  // This will hold the image file
      bannerLink: "",
    });
  
    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
  
    useEffect(() => {
      fetchBanners();
    }, []);
  
    // Fetch banners from backend
    const fetchBanners = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/banners");
        setBanners(response.data);
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
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setNewBanner((prev) => ({
        ...prev,
        bannerImage: file,
      }));
    };
  
    // Handle banner submission (Adding or Editing)
    const handleBannerSubmit = async () => {
      const formData = new FormData();
      formData.append("bannerTitle", newBanner.bannerTitle);
      formData.append("bannerLink", newBanner.bannerLink);
      formData.append("bannerImage", newBanner.bannerImage);
  
      try {
        if (editData) {
          // Editing existing banner
          await axios.put(`http://localhost:5000/api/banners/${editData._id}`, formData);
        } else {
          // Adding a new banner
          await axios.post("http://localhost:5000/api/banners", formData);
        }
        setNewBanner({
          bannerTitle: "",
          bannerImage: null,
          bannerLink: "",
        });
        setOpenDialog(false);
        fetchBanners(); // Reload the banners list
      } catch (error) {
        console.error("Error submitting banner:", error);
      }
    };
  
    // Handle Edit Banner
    const handleEdit = (row) => {
      setEditData(row);
      setNewBanner({
        bannerTitle: row.bannerTitle,
        bannerLink: row.bannerLink,
        bannerImage: row.bannerImage, // Save current image URL
      });
      setOpenDialog(true);
    };
  
    // Handle Delete Banner
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/api/banners/${id}`);
        fetchBanners(); // Reload the banners list after delete
      } catch (error) {
        console.error("Error deleting banner:", error);
      }
    };
  
    // DataGrid columns
    const columns = [
      { field: "bannerTitle", headerName: "Banner Title", width: 200 },
      { field: "bannerLink", headerName: "Banner Link", width: 200 },
      {
        field: "bannerImage",
        headerName: "Banner Image",
        width: 150,
        renderCell: (params) => (
          <img
            src={params.row.bannerImage}
            alt="Banner"
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
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Paper>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
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
              onChange={handleImageChange}
              style={{ marginTop: "10px" }}
            />
            {newBanner.bannerImage && (
              <img
                src={URL.createObjectURL(newBanner.bannerImage)}
                alt="Preview"
                style={{ width: "50px", height: "50px", marginTop: "10px" }}
              />
            )}
            <div>
            <label>Product Banner</label>
            </div>

<input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginTop: "10px" }}
            />
            {newBanner.bannerImage && (
              <img
                src={URL.createObjectURL(newBanner.bannerImage)}
                alt="Preview"
                style={{ width: "50px", height: "50px", marginTop: "10px" }}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
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
  )
}

export default Banner