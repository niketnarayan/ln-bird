import React, { useState } from "react";
import Sidebarcu from "./Sidebarcu";
import Cuheader from "./Cuheader";

function Manageadds() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

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
          flexGrow: 1,
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          fontFamily: "Arial, sans-serif",
          marginTop:"100px"
        }}
      >
              <div
          style={{ 
            margin: "auto",
            marginTop:"100px"
          }}
        >
   
   <h2 >Manage Addresses</h2>
        {!isFormVisible && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "4px",
              backgroundColor: "#fff",
              width: "300px", // Reduced width
            }}
          >
            <span style={{ color: "blue", cursor: "pointer" }} onClick={toggleFormVisibility}>
              + ADD A NEW ADDRESS
            </span>
          </div>
        )}

        {isFormVisible && (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Name"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                placeholder="10-digit mobile number"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Pincode"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                placeholder="Locality"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <textarea
              placeholder="Address (Area and Street)"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="City/District/Town"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <select
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                <option value="">--Select State--</option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Landmark (Optional)"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                placeholder="Alternate Phone (Optional)"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ marginRight: "10px" }}>
                <input type="radio" name="addressType" value="Home" />
                Home
              </label>
              <label>
                <input type="radio" name="addressType" value="Work" />
                Work
              </label>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  width: "100px", // Reduced width
                  padding: "10px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                SAVE
              </button>
              <button
                onClick={handleCancel}
                style={{
                  width: "100px", // Reduced width
                  padding: "10px",
                  backgroundColor: "#ccc",
                  color: "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                CANCEL
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Manageadds;
