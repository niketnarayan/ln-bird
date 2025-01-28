import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import api from '../Components/api'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { useCart } from './cartcontext'
import Swal from 'sweetalert2';
import Footer from './footer';

function Category() {

    const {cart,setcart}=useCart()
    
    const location=useLocation()
    const category=location.state
   
    

    const[categorydata,setcategorydata]=useState([])
    const getcategorydata=async()=>
    {
            try {
                const resp= await api.get(`getproductbycategory/${category}`)
                setcategorydata(resp.data.product)
            } catch (error) {
             console.log(error);
                
            }
    }

    useEffect(()=>
    {
    getcategorydata()
    },[category])

    console.log(categorydata);

     const navigate=useNavigate()
    
        const handleProductClick = (id) => {
          navigate(`/product/${id}`); // Navigate to specific product details page
        };


          const handleprouctadd = (product) => {
                // Check if the product already exists in the cart
                const isProductInCart = cart.some((item) => item._id === product._id);
              
                if (!isProductInCart) {
                  // Add the product to the cart if it's not already present
                  setcart([...cart, product]);
                } else {
                  Swal.fire({
                                title: 'Error!',
                                text: 'Product alredy in your cart',
                                icon: 'Error',
                                confirmButtonText: 'OK',
                              });
                }
              };
    
    
  return (
    <>
    <Header/>
    <div className='container'>
    <div
  className="row"
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "20px",
    padding: "20px",
    boxSizing: "border-box", // Ensures padding doesn't cause overflow
    overflow: "hidden", // Prevents scrolling
    width: "100%", // Ensures the row stays within the viewport
    margin: "0 auto", // Centers the content if needed
    marginTop:"2rem"
  }}
>
  {categorydata.map((product) => (
    <React.Fragment key={product.id}>
      <div
        className="col-md-3"
        style={{
          height: "550px",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="grocery-card"
          style={{
            width: "95%",
            maxWidth: "300px",
            backgroundColor: "#fff",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <div style={{ position: "relative", width: "100%" }}>
            <img
              src={product.product_image}
              alt={product.product_name}
              className="grocery-card-image img-fluid"
              style={{
                width: "100%",
                height: "270px",
                objectFit: "cover",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                borderRadius: "10px",
              }}
            />
          </div>
          <span
            className="grocery-card-name"
            style={{
              fontSize: "1rem",
              height: "3rem",
              fontWeight: "bold",
              color: "#333",
              marginTop: "10px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              maxWidth: "90%",
              transform:"inherit",
              fontFamily:"'ITC Modern No 216', serif"  ,
            }}
          >
            {product.product_name}
          </span>
          <div
            className="grocery-card-rating"
            style={{
              fontSize: "1rem",
              color: "#ffc107",
              margin: "5px 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {"★".repeat(product.rating)}
            <span style={{ color: "#ccc", marginLeft: "5px" }}>
              {"★".repeat(5 - product.rating)}
            </span>
          </div>
          <p
            className="grocery-card-price"
            style={{
              fontSize: "1rem",
              color: "#666",
              marginTop: "5px",
            }}
          >
            ₹{product.product_price}
          </p>
          <button
            onClick={() => handleprouctadd(product)}
            className="add-to-cart-btn"
            style={{
              backgroundColor: "#c8b89a",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "5px",
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginTop: "10px",
              width: "80%",
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </React.Fragment>
  ))}
</div>
</div>

      <Footer/>
      </>
  )
}


export default Category