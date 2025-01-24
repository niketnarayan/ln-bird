import React, { useEffect, useState } from 'react';
import api from '../Components/api'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useCart } from './cartcontext'
import Swal from 'sweetalert2';
import Footer from './footer';

function Combo() {

     const {cart,setcart}=useCart()

    const[comboproduct,setcomboproduct]=useState([])

    const allproduct=async()=>
    {
        const resp= await api.get('getproduct')
        setcomboproduct(resp.data.product.filter((item)=>item.product_type==="combo"))
    }

    useEffect(()=>
    {   
        allproduct()
    },[])
    console.log(comboproduct);

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
    <div>
      <Header/>
       <div className="grocery1" style={{marginTop:"5rem",backgroundColor:"rgba(223, 255, 191, 0.18)",}}>
                <div className="row">
                  {comboproduct.map((product, index) => (
                     <React.Fragment key={product.id}>
                     <div
                       className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
                       style={{ height:"550px",background:"transparent"}}
                     >
                       <div
                         className="grocery-card"
                         style={{
                           width: "95%",
                           maxWidth: "300px",
                           backgroundColor: "transparent",
                           padding: "10px",
                           border: "none",
                           borderRadius: "10px",
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "center",
                           alignItems: "center",
                           textAlign: "center",
                           position: "relative",
                           overflow: "hidden",
                           // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                           // transition: "transform 0.3s ease, box-shadow 0.3s ease",
                         }}
                         onMouseEnter={(e) => {
                           // e.currentTarget.style.transform = "scale(1.05)";
                           // e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
                           e.currentTarget.querySelector(".add-to-cart-btn").style.display =
                             "block";
                         }}
                         onMouseLeave={(e) => {
                           // e.currentTarget.style.transform = "scale(1)";
                           // e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                           e.currentTarget.querySelector(".add-to-cart-btn").style.display =
                             "none";
                         }}
                       >
                         <div style={{ position: "relative", width: "100%" }}>
                           <img
                             src={product.product_image}
                             alt={product.product_name}
                             className="grocery-card-image img-fluid"
                             style={{
                               width: "95%",
                               height: "350px",
                               objectFit: "cover",
                               // borderRadius: "10px",
                               cursor: "pointer",
                               transition: "transform 0.3s ease",
                             }}
                           />
                         </div>
                         <span
                           className="grocery-card-name"
                           style={{
                             fontSize: "1rem",
                             height:"3rem",
                             fontWeight: "bold",
                             color: "#333",
                             marginTop: "15px",
                             textOverflow: "ellipsis",
                             overflow: "hidden",
                             whiteSpace: "nowrap",
                             maxWidth: "90%",
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
                           {"★".repeat(product.rating)}{" "}
                           <span
                             style={{
                               color: "#ccc",
                               marginLeft: "5px",
                             }}
                           >
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
                 display: "none",
                 backgroundColor: "#c8b89a",
                 color: "#fff",
                 border: "none",
                 padding: "10px 30px", // Increased padding for better width
                 borderRadius: "5px",
                 fontSize: "0.9rem",
                 cursor: "pointer",
                 transition: "all 0.3s ease",
                 marginTop: "10px", // Space below the price
                 width: "80%", // Set specific width for consistency
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

    </div>
  )
}

export default Combo