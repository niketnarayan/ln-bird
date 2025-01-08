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
    },[])

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
    <div>
        <Header/>
        <div className="grocery" style={{marginTop:"10rem"}}>
          <div className="row">
            {categorydata.map((product, index) => (
              <React.Fragment key={product.id}>
               
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center align-items-center"
                >
                  <div
                    className="grocery-card"
                    style={{
                      width: "98%",
                      maxWidth: "280px",
                      height: "430px",
                      backgroundColor: "#fff",
                      padding: "20px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center", 
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={product.product_image}
                      alt={product.product_name}
                      className="grocery-card-image img-fluid"
                      style={{
                      }}
                      onClick={() => navigate('/vitamincfaceash',{state:product._id})}
                    />
                    <span className="grocery-card-name">{product.product_name}</span>
                    <p className="grocery-card-price">MRP: ₹{product.product_price}</p>
                    <button
                      onClick={() => handleprouctadd(product)}
                      className="grocery-card-button btn btn-primary"
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

export default Category