import React, { useState } from "react";
import Sidebarcu from "./Sidebarcu";
import Cuheader from "./Cuheader";

function Personalinfo() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobile: "",
  });

  const [isEditing, setIsEditing] = useState({
    firstName: false,
    lastName: false,
    gender: false,
    email: false,
    mobile: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleSave = (field) => {
    alert(`${field} saved!`);
    setIsEditing({ ...isEditing, [field]: false });
  };

  return (
    <div>
      <div> <Sidebarcu/></div>
   
      <div style={{marginLeft:"260px",marginTop:"-100px",position:"relative"}} ><Cuheader /></div>
   


      {/* <Sidebarcu isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} /> */}
      <div
        style={{
          marginLeft: isSidebarCollapsed ? "80px" : "250px",
          transition: "margin-left 0.3s ease",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          fontFamily: "'Roboto', sans-serif",
          color: "#333",
          marginTop:"100px"
        }}
      >
        <div
          style={{
            maxWidth: "800px", // Increased width
            margin: "auto",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
            marginTop:"100px"
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "24px",
              fontWeight: "600",
              textAlign: "center",
              color: "#4a4a4a",
            }}
          >
            Personal Information
          </h2>

          {/* First Name and Last Name */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                flex: 1,
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                backgroundColor: isEditing.firstName ? "white" : "#f9f9f9",
                outline: isEditing.firstName ? "2px solid #007bff" : "none",
              }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!isEditing.lastName}
              style={{
                flex: 1,
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                backgroundColor: isEditing.lastName ? "white" : "#f9f9f9",
                outline: isEditing.lastName ? "2px solid #007bff" : "none",
              }}
            />
            {(!isEditing.firstName && !isEditing.lastName) && (
              <button
                onClick={() => {
                  handleEdit("firstName");
                  handleEdit("lastName");
                }}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                EDIT
              </button>
            )}
            {(isEditing.firstName || isEditing.lastName) && (
              <button
                onClick={() => handleSave("Personal Information")}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
              >
                SAVE
              </button>
            )}
          </div>

          {/* Gender */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "10px",
                display: "block",
              }}
            >
              Gender
            </label>
            <div>
              <label style={{ marginRight: "20px", fontSize: "16px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  style={{ marginRight: "5px" }}
                />
                Male
              </label>
              <label style={{ fontSize: "16px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  style={{ marginRight: "5px" }}
                />
                Female
              </label>
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "10px",
                display: "block",
              }}
            >
              Email Address
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing.email}
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "16px",
                  backgroundColor: isEditing.email ? "white" : "#f9f9f9",
                  outline: isEditing.email ? "2px solid #007bff" : "none",
                }}
              />
              {!isEditing.email && (
                <button
                  onClick={() => handleEdit("email")}
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  EDIT
                </button>
              )}
              {isEditing.email && (
                <button
                  onClick={() => handleSave("Email Address")}
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  SAVE
                </button>
              )}
            </div>
          </div>

          {/* Mobile */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "10px",
                display: "block",
              }}
            >
              Mobile Number
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                disabled={!isEditing.mobile}
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "16px",
                  backgroundColor: isEditing.mobile ? "white" : "#f9f9f9",
                  outline: isEditing.mobile ? "2px solid #007bff" : "none",
                }}
              />
              {!isEditing.mobile && (
                <button
                  onClick={() => handleEdit("mobile")}
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  EDIT
                </button>
              )}
              {isEditing.mobile && (
                <button
                  onClick={() => handleSave("Mobile Number")}
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  SAVE
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personalinfo;
