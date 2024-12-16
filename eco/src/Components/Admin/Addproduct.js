import React, { useState } from "react";
import Sidebar from './Sidebar'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css"; // ReactQuill styles
import ReactQuill from "react-quill";
import axios from "axios";
import Swal from 'sweetalert2';
import api from '../api'

function Addproduct() {


    const [product, setproduct] = useState({
        product_code: "",
        product_name: "",
        product_price: "",
        product_quantity: "",
        product_image: [],
        product_description: "",
        product_benefits: [],
        product_quantity1: 1,

      });
      
      
      const [benefitInput, setBenefitInput] = useState("");

      const handleAddBenefit = () => {
        if (benefitInput.trim() !== "") {
            setproduct((prevData) => ({
            ...prevData,
            product_benefits: [...prevData.product_benefits, benefitInput],
          }));
          setBenefitInput(""); // Clear input field
        }
      };

       // Delete a benefit by index
  const handleDeleteBenefit = (indexToDelete) => {
    setproduct((prevData) => ({
      ...prevData,
      product_benefits: prevData.product_benefits.filter(
        (_, index) => index !== indexToDelete
      ),
    }));
  };


 
   
    
    const handleImageChange = (event) =>
    {
     
      const files = Array.from(event.target.files)
      setproduct({...product,product_image:files})

    }
      const handleDescriptionChange = (value) => {
        setproduct({ ...product, product_description: value });
      };
    
    
   
    
    const handleSubmit = async () => {
      
      
        try {
          const resp = await api.post("addproduct", product,{
            headers: {
                "Content-Type": "multipart/form-data"

              }
          }
            );
      
          if (resp.status === 200) {
           
            Swal.fire({
              title: 'Success!',
              text: 'Product saved successfully!',
              icon: 'success',
              confirmButtonText: 'OK',
            });

          }
        } catch (error) {
          console.error("Error while saving product:", error.response || error.message);
        }
      };
      
console.log(product.product_image);




    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
      };
    
  return (
    <div>
      <Sidebar/>

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
   <div className="container mt-4">
      <h2 className="mb-4" style={{textAlign:"center"}}>Add New Product</h2>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
           

            <div className="mb-3">
                <label className="form-label">Product Code</label>
                <input
                  type="number"
                  name="Productcode"
                  className="form-control"
                  
                  onChange={(e)=>setproduct({...product,product_code:e.target.value})}
                  placeholder="Enter Productcode"
                  required
                />
              </div>
              {/* Product Name */}
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  className="form-control"
                 
                  onChange={(e)=>setproduct({...product,product_name:e.target.value})}
                  placeholder="Enter product name"
                  required
                />
              </div>

              {/* Price */}
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  
                  onChange={(e)=>setproduct({...product,product_price:e.target.value})}
                  placeholder="Enter price"
                  required
                />
              </div>

              {/* Quantity */}
              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  
                  onChange={(e)=>setproduct({...product,product_quantity:e.target.value})}
                  placeholder="Enter quantity"
                  required
                />
              </div>

              {/* Product Image */}
              <div className="mb-3">
                <label className="form-label">Product Image</label>
                <input
                multiple
                  type="file"
                  name="image"
                  className="form-control"
                  
                  onChange={(event)=>handleImageChange(event)}
                  required
                />
              </div>

              {/* Product Description */}
              <div className="mb-3">
                <label className="form-label">Product Description</label>
                <ReactQuill
                 
                 onChange={handleDescriptionChange}
                  placeholder="Enter product description"
                  theme="snow"
                />
              </div>

               {/* Product Benefits */}
        <div className="mb-3">
          <label className="form-label">Product Benefits</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Enter benefit"
             
              onChange={(e) => setBenefitInput(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddBenefit}
            >
              Add
            </button>
          </div>
          {/* Show Product Benefits */}
          <ul className="mt-3 list-group">
            {product.product_benefits.map((benefit, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {benefit}
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteBenefit(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

              {/* Submit Button */}
              <div className="text-end">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Add Product
                </button>
              </div>
           
          </div>
        </div>
      </div>
    </div>




        
        </div>



    </div>
  )
}

export default Addproduct