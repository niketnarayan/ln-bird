import React,{useEffect, useState } from 'react'
import Header from './Header'
import Footer from './footer'
import "./VitamincFacewash.css";
import { useCart } from './cartcontext';
import { useLocation } from 'react-router-dom';
import api from '../Components/api'

function VitamincFacewash() {


  const location = useLocation()
  const id = location.state || {}
  

  
  const[Products,setProducts]=useState([])
  const[category,setcategory]=useState('')
  const getproduct=async()=>
  {
    try {
      const resp=await api.get(`getproductbyid/${id}`)
      console.log(resp);
      setcategory(resp.data.product[0].product_category)
      setProducts(resp.data.product)

    } catch (error) {
      console.log(error);
      
    }
  }

  const[relatedproducts,setrelatedproducts]=useState([])
  const getproductbycategory=async()=>
    {
      try {
        const resp=await api.get(`getproductbycategory/${category}`)
        setrelatedproducts(resp.data.product.filter(item => item._id !== Products[0]._id));

  
      } catch (error) {
        console.log(error);
        
      }
    }

  useEffect(()=>
  {
  getproduct()
  },[id])
  useEffect(()=>
    {
    getproductbycategory()
    },[category])


  console.log(relatedproducts);

  
   

    const {cart,setcart}=useCart()

    // Add to Cart function
    const handleprouctadd = (product) => {
      // Check if the product already exists in the cart
      const isProductInCart = cart.some((item) => item.name === product.name);
    
      if (!isProductInCart) {
        // Add the product to the cart if it's not already present
        setcart([...cart, product]);
      } else {
        alert(`${product.name} is already in the cart.`);
      }
    };

    
return (
<div>

  <style>
    {
      `
      body{
      background-color:rgba(223, 255, 191, 0.18);
      }
      .image-div{
      // border: 2px solid #000;
      width: 50%;
      }
      .content-div{
      // border: 2px solid #000;
      width: 50%;
      }
      `
    }
  </style>

    <div>
        <Header/>
    </div>
 
    <div className="container custom mt-5" style={{ marginTop: "10rem !important" }}>
  {Products.map((product) => (
    <div key={product.id} className="row mb-5 ">
      {/* Image Section */}
      <div className="col-lg-4 image-div">
        <img
          src={product?.product_image}
          style={{ height: "100%", width:"100%", boxShadow:"10px 10px 20px rgba(0,0,0,0.2)" }}
          alt={product?.product_name || "Product Image"}
          className="img-fluid"
        />
      </div>

      {/* Text Content Section */}
      <div className="col-lg-8 content-div">
        <h3 className="fw-bold">{product.product_name}</h3>
        {/* Extracted Details */}
        <p className="text-muted">
          {typeof product.name === "string" && product.name.includes("(")
            ? product.name.split("(")[1].replace(")", "")
            : ""}
        </p>

        {/* Price and Discount */}
        <div className="mb-3">
          <span className="text-danger fw-bold fs-4">{product.product_price}</span>
          <span className="badge bg-success ms-2">63% off</span>
        </div>

        {/* Offers Section */}
        <div className="mb-4">
          <h6>Available Offers:</h6>
          <ul className="list-unstyled">
            <li>5% Unlimited Cashback on Flipkart Axis Bank Card</li>
            <li>10% off on HDFC Bank Credit Card EMI</li>
            <li>10 days return policy</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="d-flex gap-2">
          <button
            className="btn btn-warning"
            onClick={() => handleprouctadd(product)}
          >
            Add to Cart
          </button>
          <button className="btn btn-danger">Buy Now</button>
        </div>

        {/* Accordion Section */}
        <div className="accordion mt-5 custom-accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseOne-${product.id}`}
                aria-expanded="false"
                aria-controls={`collapseOne-${product.id}`}
              >
                Product Specification
              </button>
            </h2>
            <div
              id={`collapseOne-${product.id}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* Product Specification Content */}
                <h4 className="fw-bold mb-3">Vitamin C Face Wash</h4>
                <p>
                  Refresh and revitalize your skin with our Vitamin C Face Wash, a
                  powerful yet gentle cleanser designed to give your skin a
                  healthy, glowing complexion.
                </p>
                {/* Key Benefits */}
                <h5 className="mt-4">Key Benefits:</h5>
                <ul className="list-group list-group-flush mt-3">
                  <li className="list-group-item">
                    <strong>Brightens & Evens Skin Tone:</strong> Promotes a radiant and youthful glow.
                  </li>
                  <li className="list-group-item">
                    <strong>Fights Free Radical Damage:</strong> Prevents premature signs of aging.
                  </li>
                  <li className="list-group-item">
                    <strong>Deep Cleansing:</strong> Removes dirt and impurities effectively.
                  </li>
                  <li className="list-group-item">
                    <strong>Hydrates & Nourishes:</strong> Leaves skin smooth and soft.
                  </li>
                  <li className="list-group-item">
                    <strong>Suitable for All Skin Types:</strong> Gentle for daily use.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseTwo-${product.id}`}
                aria-expanded="false"
                aria-controls={`collapseTwo-${product.id}`}
              >
                Product Features
              </button>
            </h2>
            <div
              id={`collapseTwo-${product.id}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="features-container">
                  <div style={{ display: "flex", gap: "9rem" }}>
                    <div className="feature-item">
                      <i className="fa-solid fa-globe feature-icon"></i>
                      <span>On Time Delivery</span>
                    </div>
                    <div className="feature-item">
                      <i className="fa-brands fa-product-hunt feature-icon"></i>
                      <span>Easily Return</span>
                    </div>
                  </div>
                  <br />
                  <div style={{ display: "flex", gap: "6rem" }}>
                    <div className="feature-item">
                      <i className="fa-solid fa-clock feature-icon"></i>
                      <span>24/7 Customer Service</span>
                    </div>
                    <div className="feature-item">
                      <i className="fa-solid fa-lock feature-icon"></i>
                      <span>Secure Payments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="row" style={{marginBottom:"1rem",marginLeft:"20px"}}>
<h2 className='relatedproduct' style={{ }}>Check out these related items</h2>

    {relatedproducts.map((product, index) => (
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
  








<Footer />
</div>
)
}

export default VitamincFacewash