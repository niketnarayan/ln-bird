import React, { useState } from "react";
import { useCart } from './cartcontext'
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";
import Footer from "./footer";
import { useEffect } from "react";
import axios from "axios";
import api from '../Components/api'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';



function Home1() {
  const [cartMessage, setCartMessage] = useState("");
  const [comboProduct, setcomboproduct] = useState([])
  const [singleProduct, setsingleProduct] = useState([])
  const [showAll1, setShowAll1] = useState(false);

  const navigatecategory=(data)=>
    {
    navigate('/categoryproduct',{state:data})
    }

const {cart,setcart}=useCart()

  useEffect(()=>
  {
    getproduct()
  })

 
const[product1,setproduct1]=useState([])
  const getproduct=async()=>
  {
    try {
      const resp=await api.get("getproduct")
      setproduct1(resp.data.product)
      setcomboproduct(resp.data.product.filter((item)=>item.product_type==="combo"))
      setsingleProduct(resp.data.product.filter((item)=>item.product_type==="single"))
      // setcart(resp.data.product)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const visibleCombo = showAll1 ? comboProduct : comboProduct.slice(0, 4);

  
  const[fetchbanner,setfetchbanner]=useState([])
  const [sliderImages, setSliderImages] = useState([]);
  const [banners,setbanners] =useState([]);

  useEffect(() => {
    fetchSliderImages();
  }, []);

  const fetchSliderImages = async () => {
    try {
      const response = await api.get("getAllBanners"); // Replace with your API endpoint
      console.log(response);
      
      setfetchbanner(response.data.banner)
      // Filter only sliderBannerImage data
      const sliderData = response.data.banner.filter((banner) => banner.sliderBannerImage);
      setSliderImages(sliderData);

      const productData = response.data.banner.filter((banner) => banner.productBannerImage);
      setbanners(productData.flatMap((item) => item.productBannerImage)); // Derive banners directly
      
      

    } catch (error) {
      console.error("Error fetching slider images:", error);
    }
  };

  useEffect(() => {
    console.log("Banners updated:", banners);
  }, [banners]);
  

  const Combo = [
    {
      _id: "1",
      product_name: "Hair Care",
      product_image: "https://thumbs.dreamstime.com/b/composition-containers-global-cosmetics-brands-poznan-poland-dec-plastic-body-care-products-including-widely-available-106604090.jpg",
      description: "Unleash the power of Earth's essential bounty for naturally beautiful hair.",
      product_price: 599,
      product_quantity1: 1,
    },
    {
      _id: "2",
      product_name: "Face Care",
      product_image: "https://thumbs.dreamstime.com/b/composition-containers-global-cosmetics-brands-poznan-poland-dec-plastic-body-care-products-including-widely-available-106604090.jpg",
      description: "Embrace radiance naturally with the science of Earth's bounty.",
      product_price: 599,
      product_quantity1: 1,
    },
    {
      _id: "3",
      product_name: "Body Care",
      product_image: "https://thumbs.dreamstime.com/b/composition-containers-global-cosmetics-brands-poznan-poland-dec-plastic-body-care-products-including-widely-available-106604090.jpg",
      description: "Elevate your daily bath with Earth's nourishing touch for a rejuvenated you.",
      product_price: 599,
      product_quantity1: 1,
    },
  ];


   


      

      const handleprouctadd = (product) => {
        // Check if the product already exists in the cart
        const isProductInCart = cart.some((item) => item._id === product._id);
        if (!isProductInCart) {
          // Add the product to the cart if it's not already present
          setcart([...cart, product]);
          setCartMessage((prev) => ({
            ...prev,
            [product._id]: "Your product has been added to the cart!",
          }));
      
          // Hide the message after 2 seconds
          setTimeout(() => {
            setCartMessage((prev) => ({
              ...prev,
              [product._id]: "",
            }));
          }, 2000);



        } else {
          Swal.fire({
                        title: 'Error!',
                        text: 'Product alredy in your cart',
                        icon: 'Error',
                        confirmButtonText: 'OK',
                      });
        }
      };


    



    //   const handleprouctadd = (product) => {
    //     console.log('Adding product to cart:', product);
    //     setcart([...cart, product]);
    //   };
    // console.log(cart);
    // console.log(cart.length);


   
  

   // get all review of customer

   const [loading, setLoading] = useState(true);
   const [reviews, setReviews] = useState([]); // Initialize as an array
 
   // Function to fetch reviews
   const fetchReview = async () => {
     setLoading(true);
     try {
       const response = await api.get("allreview"); // Replace with actual endpoint
       if (response.status === 200) {
         setReviews(response.data); // Update the state correctly
         
       }
     } catch (error) {
       console.error("Error fetching reviews:", error.response || error.message);
       Swal.fire({
         title: "Error!",
         text: "Failed to fetch reviews. Please try again.",
         icon: "error",
         confirmButtonText: "OK",
       });
     } finally {
       setLoading(false);
     }
   };
 
   // Fetch reviews when component mounts
   useEffect(() => {
    fetchReview();
   }, []);
 
   // Function to render stars
   const renderStars = (rating) => {
     return "⭐".repeat(rating);
   };
 















    // Function to render stars based on rating
    // const renderStars = (rating) => {
    //   const totalStars = 5;
    //   const stars = [];
    //   for (let i = 1; i <= totalStars; i++) {
    //     stars.push(
    //       <i
    //         key={i}
    //         className={`bi bi-star${i <= rating ? "-fill" : ""}`}
    //         style={{
    //           color: i <= rating ? "#ffc107" : "#ddd",
    //           marginRight: "3px",
    //         }}
    //       ></i>
    //     );
    //   }
    //   return stars;
    // };

    const navigate=useNavigate()

    const handleProductClick = (id) => {
      navigate(`/product/${id}`); // Navigate to specific product details page
    };




    const [blogPosts, setBlogPosts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch blog posts from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("getblog"); // Replace with your API endpoint
        setBlogPosts(response.data); // Assuming the API returns an array of blogs
      } catch (error) {
        console.error("Error fetching blogs:", error.message || error);
      }
    };

    fetchBlogs();
  }, []);
   
    
  const visibleBlogs = showAll ? blogPosts : blogPosts.slice(0, 3);

  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleViewMore = () => {
    setVisibleProducts((prevCount) => prevCount + 4); // Show 4 more products each time
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " ...";
    }
    return text;
  };





  return (
    <div>
        <Header/>
      

{/* banner start----------------------------------------------------------------------------------------------- */}

<div className="container-fluid p-0">
  <Carousel data-bs-theme="dark" style={{marginTop:"100px",position:"relative"}}>
    {sliderImages.map((banner, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100 img-fluid"
          src={banner.sliderBannerImage}
          alt={`Slide ${index + 1}`}
          style={{
            objectFit: "cover",
            height: "100%", // Adjust as per requirements
            maxHeight: "500px", // Maximum height for larger screens
          }}
          onClick={() => window.location.href = banner.bannerLink}
        />
      </Carousel.Item>
    ))}
  </Carousel>
</div>









{/* banner main end--------------------------------------------------------------------------------------------- */}


{/* content start------------------------------------------------------------------- */}
<div style={{ padding: "40px", marginBottom: "3rem", marginTop: "3rem", textAlign: "center" }}>
  <h1
    style={{
      fontSize: "3.5rem",
      fontFamily: "'ITC Modern No 216', serif",
      fontWeight: "bold",
      color: "#222",
      marginBottom: "20px",
    }}
  >
    Kiona Skin Care: Embrace Your Natural Glow
  </h1>
  <p
    style={{
      fontSize: "20px",
      fontFamily: "Georgia, serif",
      color: "#444",
      lineHeight: "1.8",
      margin: "0 auto",
      maxWidth: "800px",
    }}
  >
    Founded in 2020 by a team of skincare professionals and holistic health
    experts, <strong>Kiona Skin Care</strong> was born out of a passion to bring
    back the purity of nature to your skincare routine. In a world where
    harsh chemicals dominate, we believe in the power of organic and
    plant-based ingredients that nurture and protect your skin.<strong>Our products,
    including face washes, shampoos, and serums, are crafted with love and
    care, using only the finest natural ingredients.</strong> 
  </p>

  {/* Centered Button */}
  <button
    style={{
      marginTop: "20px",
      padding: "12px 24px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}

    onClick={() =>
      navigate("/aboutus")
      }
  >
    More About
  </button>
</div>




{/* <div
  style={{
    backgroundColor: "rgb(255, 255, 255)", 
    padding: "2rem", 
    fontFamily: "'Arial', sans-serif", 
  }}
>
  <div className="row">

    <div className="col-lg-6 mb-4" style={{ padding: "20px" }}>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#555555",
          letterSpacing: "1px", 
          marginBottom: "1rem", 
        }}
      >
        What We Do
      </p>
      <h2
        style={{
          fontSize: "1.8rem", 
          fontWeight: "700",
          margin: "0 0 20px",
          color: "#000000",
          lineHeight: "1.6", 
        }}
      >
        We Make Multi-Purpose Complexion Boosting Skin-Loving Products
      </h2>
      <img
        className="img-fluid"
        src="https://wdtlilacdemo.wpengine.com/wp-content/uploads/2023/06/Lilac-Demo-Filler-Img-768x807.webp"
        alt="Natural Brushes"
        style={{
          width: "95%",
          borderRadius: "8px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", 
          marginTop: "1rem",
        }}
      />
    </div>

   
    <div className="col-lg-6 mb-4" style={{ padding: "20px" }}>
      <img
        src="https://wdtlilacdemo.wpengine.com/wp-content/uploads/2023/06/filler-img-03-768x764.webp"
        alt="Facial Mask"
        style={{
          width: "95%",
          borderRadius: "8px", 
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", 
          marginBottom: "1.5rem", 
        }}
      />
      <p
        style={{
          fontSize: "1rem", 
          lineHeight: "1.8",
          color: "#666666",
          textAlign: "justify",
        }}
      >
        "Nulla interdum sem sed nunc finibus maximus.<br /> Vivamus purus
        mauris, placerat sit amet bibendum sit amet."
      </p>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#555555",
          marginTop: "1rem",
        }}
      >
        - Frankie Aden
      </p>
    </div>
  </div>
</div> */}








{/* content end--------------------------------------------------------------------------- */}

{/* product cart section------------------------------------------------------------------------------------- */}


 {/* <div className="grocery">
  <h2 className="grocery-heading text-center" style={{marginBottom: "0px"}}>Our Products</h2>
  <div className="empty-div"></div>
  <div className="row justify-content-center">
    {product1.map((product, index) => (
      <React.Fragment key={product.id}>
       
        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center align-items-center"
        >
          <div
            className="grocery-card"
            style={{
              width: "98%",
              maxWidth: "280px",
              height: "400px",
              backgroundColor: "#fff",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
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
      
        {(index + 1) % 4 === 0 && banners.length > 0 && (
          <div className="col-12">
            <div className="banner text-center">
              <img
                className="img-fluid"
                src={banners[(Math.floor((index + 1) / 4) - 1) % banners.length]}
                alt={`banner-${(Math.floor((index + 1) / 4) - 1) % banners.length}`}
                style={{
                  marginTop: "3rem",
                  marginBottom: "3rem",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
</div>  */}


<div className="grocery" style={{ background: 'linear-gradient(to right, #FFF9B1, #FFB6C1, #FFF9B1)', width:"100%" }}>
  <h1
    className="grocery-heading text-center"
    style={{ marginBottom: "20px", color: "#333" }}
  >
Combo Products
  </h1>
  <div className="empty-div"></div>
  <div className="container">
  <div className="row justify-content-center" > {/* g-3 for consistent gaps */}
    {visibleCombo.map((product, index) => (
      <React.Fragment key={product.id}>
        <div
        key={product.id}
        className="col-12 col-sm-6 col-md-4 col-lg-3"
        style={{
          height: "550px",
          width:"300px",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="grocery-card"
          style={{
            width: "100%",
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
              onClick={() =>
                navigate("/vitamincfaceash", { state: product._id })
                }
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
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    maxWidth: "90%",
    fontFamily: "'ITC Modern No 216', serif",
  }}
>
  {truncateText(product.product_name, 30)} {/* Adjust maxLength as needed */}
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
  <div className="text-center mt-4">
    <button
      className="view-all-btn"
      style={{
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onClick={() => navigate("/combo")}
    >
      View All
    </button>
  </div>
</div>







{/* collection  start----------------------------------------------------------------------- */}
<div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "20px",
        padding: "40px",
        backgroundColor: "#fdfaf5",
      }}
    >
      {/* First Row */}
      <div style={{ gridColumn: "span 6" }} className="gallery-item">
        <img
          src="https://wdtlilacdemo.wpengine.com/wp-content/uploads/2023/06/Lilac-Demo-Grid-Banner-Img-2-768x737.webp"
          alt="Body Care"
          className="gallery-img"
        />
        <div className="overlay">
          <h6>KIONA</h6>
          <h5>Hair Serum</h5>
          <a  onClick={() => navigatecategory("hair serum")} >View Collections →</a>
        </div>
      </div>

      <div style={{ gridColumn: "span 3" }} className="gallery-item">
        <img
          src="https://wdtlilacdemo.wpengine.com/wp-content/uploads/2023/06/filler-img-10-768x353.webp"
          alt="Face Care"
          className="gallery-img"
        />
          <div className="overlay">
          <h6>KIONA</h6>
          <h5>Face Wash</h5>
          <a onClick={() => navigatecategory("face wash")}>View Collections →</a>
        </div>
      </div>

      <div style={{ gridColumn: "span 3" }} className="gallery-item">
        <img
          src="https://wdtlilacdemo.wpengine.com/wp-content/uploads/2023/06/filler-img-12-768x353.webp"
          alt="Leg Care"
          className="gallery-img"
        />
          <div className="overlay">
          <h6>KIONA</h6>
          <h5>Shampoo</h5>
          <a onClick={() => navigatecategory("shampoo")}>View Collections →</a>
        </div>
      </div>

      {/* Second Row */}
      <div style={{ gridColumn: "span 6" }} className="gallery-item">
        <img
          src="https://wdtlilacdemo.wpengine.com/wp-content/uploads/2023/06/Lilac-Demo-Grid-Banner-Img-768x353.webp"
          alt="Hair Care"
          className="gallery-img"
        />
          <div className="overlay">
          <h6>KIONA</h6>
          <h5>Soap</h5>
          <a onClick={() => navigatecategory("soap")}>View Collections →</a>
        </div>
      </div>

      <div style={{ gridColumn: "span 6" }} className="gallery-item">
        <img
          src="https://wdtlilacdemo.wpengine.com/wp-content/uploads/2023/06/filler-img-13-768x353.webp"
          alt="Fragrance"
          className="gallery-img"
        />
          <div className="overlay">
          <h6>KIONA</h6>
          <h5>Hair oil</h5>
          <a onClick={() => navigatecategory("hair oil")}>View Collections →</a>
        </div>
      </div>

      <style>{`
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          height: 300px;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        .overlay {
          position: absolute;
          top: 20px;
          left: 20px;
          color: #fff;
          backdrop-filter: blur(8px);
          padding: 10px;
        }

        .overlay h6 {
          font-size: 0.9rem;
          opacity: 0.9;
          font-weight: bold;
        }

        .overlay h5 {
          font-size: 1.8rem;
          font-weight: bold;
        }

        .overlay a {
          text-decoration: none;
          font-size: 1rem;
          color: #fff;
          font-weight: bold;
          border-bottom: 2px solid #fff;
          transition: opacity 0.3s ease-in-out;
          opacity: 0.9;
        }

        .overlay a:hover {
          opacity: 1;
        }

        @media (max-width: 1200px) {
          .gallery-item {
            grid-column: span 6 !important;
          }
        }

        @media (max-width: 768px) {
          .gallery-item {
            grid-column: span 12 !important;
            height: 250px;
          }

          .overlay h5 {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 480px) {
          .gallery-item {
            height: 200px;
          }
        }
      `}</style>
    </div>







{/* single products-------------------------------------------------------------------------- */}

<div className="grocery" style={{ background: 'linear-gradient(to right, #FFF9B1, #FFB6C1, #FFF9B1)', width:"100%" }}>
  <h1
    className="grocery-heading text-center"
    style={{ marginBottom: "20px", color: "#333" }}
  >
Incredible Products
  </h1>
  <div className="empty-div"></div>
  <div className="container">
  <div className="row justify-content-center" > 
    {singleProduct.map((product, index) => (
      <React.Fragment key={product.id}>
        <div
        key={product.id}
        className="col-12 col-sm-6 col-md-4 col-lg-3"
        style={{
          height: "550px",
          width:"300px",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="grocery-card"
          style={{
            width: "100%",
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
              onClick={() =>
                navigate("/vitamincfaceash", { state: product._id })
                }
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
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    maxWidth: "90%",
    fontFamily: "'ITC Modern No 216', serif",
  }}
>
  {truncateText(product.product_name, 30)} {/* Adjust maxLength as needed */}
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
  {/* <div className="text-center mt-4">
    <button
      className="view-all-btn"
      style={{
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onClick={() => navigate("/all-products")}
    >
      View All
    </button>
  </div> */}
</div>


{/* video secton- start------------------------------------------------------------------- */}

<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px",
    backgroundColor: "#c9bba6",
    height: "auto", // Allow height to adjust
    fontFamily: "'Arial', sans-serif",
    flexWrap: "wrap", // Wrap items for smaller screens
  }}
>
  {/* Left Section */}
  <div
    style={{
      maxWidth: "60%",
      flex: "1 1 60%",
      minWidth: "300px",
      marginBottom: "20px",
    }}
  >
    <p
      style={{
        textTransform: "uppercase",
        fontSize: "0.9rem",
        letterSpacing: "1px",
        fontWeight: "600",
        color: "black",
        marginBottom: "10px",
      }}
    >
      Award Winning Beauty Products
    </p>
    <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#000",
        marginBottom: "20px",
        lineHeight: "1.2",
      }}
    >
      Highly performing beauty formula
    </h1>
    <p
      style={{
        fontSize: "1rem",
        color: "black",
        marginBottom: "30px",
        lineHeight: "1.6",
      }}
    >
      Etiam ullamcorper facilisis porta. Donec tincidunt metus a elit tempor, a
      condimentum sapien laoreet. Nullam metus orci, malesuada ac tincidunt
      vitae, tincidunt eu elit. Phasellus.
    </p>
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#f5e6c8",
        border: "none",
        borderRadius: "5px",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#000",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#e5d4b8")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#f5e6c8")
      }
    >
      Explore Now
    </button>
  </div>

  {/* Right Section */}
  <div
    style={{
      textAlign: "center",
      flex: "1 1 30%",
      minWidth: "200px",
    }}
  >
    <div
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#f9f4ec",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: "15px solid #000",
        }}
      ></div>
    </div>
    <p
      style={{
        marginTop: "10px",
        fontSize: "0.9rem",
        fontWeight: "600",
        color: "#000",
      }}
    >
      Play Video
    </p>
  </div>

  <style>
    {`
      @media (max-width: 1024px) {
        div[style*="padding: 50px"] {
          padding: 30px; /* Reduce padding for medium screens */
        }

        h1 {
          font-size: 2rem; /* Adjust heading font size */
        }

        button {
          font-size: 0.9rem; /* Adjust button font size */
          padding: 8px 16px;
        }

        div[style*="width: 80px"] {
          width: 70px; /* Adjust play button size */
          height: 70px;
        }

        div[style*="borderTop: 15px solid"] {
          borderTop: 12px solid #000; /* Adjust play icon size */
        }
      }

      @media (max-width: 768px) {
        div[style*="flexWrap"] {
          flex-direction: column; /* Stack sections vertically */
          align-items: center;
          text-align: center;
        }

        div[style*="maxWidth: 60%"] {
          maxWidth: 100%; /* Expand left section */
        }

        div[style*="flex: 1 1 30%"] {
          margin-top: 20px; /* Add space between sections */
        }

        h1 {
          font-size: 1.8rem; /* Adjust heading font size */
        }

        p {
          font-size: 0.9rem; /* Adjust paragraph font size */
        }

        button {
          font-size: 0.8rem; /* Adjust button font size */
          padding: 8px 12px; /* Adjust button padding */
        }

        div[style*="width: 80px"] {
          width: 60px; /* Adjust play button size */
          height: 60px;
        }

        div[style*="borderTop: 15px solid"] {
          borderTop: 10px solid #000; /* Adjust play icon size */
        }
      }

      @media (max-width: 480px) {
        div[style*="flexWrap"] {
          padding: 20px; /* Further reduce padding */
        }

        h1 {
          font-size: 1.5rem; /* Smaller heading */
        }

        p {
          font-size: 0.8rem; /* Smaller text */
        }

        button {
          font-size: 0.7rem; /* Smaller button text */
          padding: 6px 10px;
        }

        div[style*="width: 80px"] {
          width: 50px; /* Smaller play button */
          height: 50px;
        }

        div[style*="borderTop: 15px solid"] {
          borderTop: 8px solid #000; /* Smaller play icon */
        }
      }
    `}
  </style>
</div>




{/* our stander start------------------------------------------------------------------------------- */}
<div style={{backgroundColor:"rgb(255, 255, 255)"}}>
<div className="row" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: "6rem", marginLeft: "3rem", marginRight: "3rem" }}>
  <h2 style={{textAlign:"center"}}>Everything your skin needs,<br/>
  Nothing it doesn’t</h2>
        <div className="col-md-3" style={{ flex: 1, textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="icon-circle">
            <i className="fa-solid fa-seedling" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>Pure & Clean</h4>
        </div>
        <div className="col-md-3" style={{ flex: 1, textAlign: 'center', padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="icon-circle">
            <i className="fa-solid fa-flask" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>Skin Safe Tested</h4>
        </div>
        <div className="col-md-3" style={{ flex: 1, textAlign: 'center', padding: '20px', backgroundColor: '#fff3e0', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="icon-circle">
            <i className="fa-solid fa-cat" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>Ethically Tested</h4>
        </div>
        <div className="col-md-3" style={{ flex: 1, textAlign: 'center', padding: '20px', backgroundColor: '#c8e6c9', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="icon-circle">
            <i className="fa-brands fa-pagelines" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>Free from Parabens</h4>
        </div>
      </div>

      {/* second row */}
      <div className="row" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: "3rem", marginLeft: "3rem", marginRight: "3rem" }}>
        <div className="col-md-3" style={{ flex: 1, textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="icon-circle">
            <i className="fa-solid fa-map" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>Made in India</h4>
        </div>
        <div className="col-md-3" style={{ flex: 1, textAlign: 'center', padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="icon-circle">
            <i className="fa-solid fa-flask-vial" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>No Harsh Surfactants</h4>
        </div>
        <div className="col-md-3" style={{ flex: 1, textAlign: 'center', padding: '20px', backgroundColor: '#fff3e0', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="icon-circle">
            <i className="fa-solid fa-leaf" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>All Natural Ingredients</h4>
        </div>
        <div className="col-md-3" style={{ flex: 1, textAlign: 'center', padding: '20px', backgroundColor: '#c8e6c9', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="icon-circle">
            <i className="fa-solid fa-droplet" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>PH Neutral</h4>
        </div>
      </div>

      </div>

{/*our stander end-----------------------------------------------------------------------------------  */}

{/* combo start----------------------------------------------------------------------------------- */}

<div
  style={{
    padding: "50px 0",
    marginTop: "2rem",
    background: 'linear-gradient(to right, #FFF9B1, #FFB6C1, #FFF9B1)',
  }}
>
  <div className="container" style={{}}>
    <div className="row g-4 main-product-div">
      {Combo.map((product, index) => (
        <div
          className="col-12 d-flex align-items-center product-item-div"
          key={product._id}
          style={{
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            display: "flex",
            alignItems: "center",
            marginTop:"0px",
            
          }}
        >
        
          <div className="product-image-div" style={{ flex: "1", width:"50%" }}>
            <img
              src={product.product_image}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: index % 2 === 0 
                  ? "10px 0 0 10px" 
                  : "0 10px 10px 0", 
              }}
            />
          </div>
         
         <div className="product-content-div" 
          style={{
            padding:"0 20px", 
            width: "50%", 
            height:"100%",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
          }}
         >
          <div
            className="product-content-item-div"
            style={{
              flex: "1",
              height: "12rem",
              width: "100%", 
              // padding: "20px",
              borderRadius: index % 2 === 0 
                ? "0 10px 10px 0" 
                : "10px 0 0 10px", 
              boxSizing: "border-box", 
            }}
          >
            <h4 style={{ fontWeight: "bold", margin: "20px 0 10px 20px" }} className="product-name-title">
              {product.product_name}
            </h4>
            <p style={{ margin: "0 0 10px 20px",fontFamily: "'Harmonia Sans', sans-serif" }}>{product.description}</p>
            <h6 style={{ fontWeight: "bold", margin: "20px 0 10px 20px" }}>
            ₹ {product.product_price}
            </h6>
            <a
            onClick={() => handleprouctadd(product)}
              style={{
                backgroundColor: "#37AFE1",
                border: "1px solid rgba(0,0,0,0.4)",
                color: "white",
                fontWeight: "bold",
                padding: "10px 20px",
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
                borderRadius: "5px",
                marginLeft: "20px",
                transition:"ease 0.3s all",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#4CC9FE")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#37AFE1")
              }
            >
              Shop Now
            </a>
          </div>
          </div>

        </div>
      ))}
    </div>
  </div>
</div>




{/* combo end-------------------------------------------------------------------------------------- */}









{/* revie */}

<Container fluid style={{ padding: "40px" }}>
      <h1
        className="revie-div"
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Customer Reviews
      </h1>
      <div className="empty-div"></div>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading reviews...</p>
      ) : reviews.length > 0 ? (
        <Carousel interval={3000} indicators={true} controls={true}>
          {reviews.map((review, idx) => (
            <Carousel.Item key={idx}>
              <Row
                className="d-flex justify-content-center"
                style={{ padding: "20px" }}
              >
                <Col
                  md={6}
                  style={{
                    background: "transparent",
                    padding: "20px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={review.product_image}
                    alt={review.name}
                    style={{
                      borderRadius: "50%",
                      width: "80px",
                      height: "80px",
                      marginBottom: "10px",
                    }}
                  />
                  <h4 style={{ color: "#222", fontWeight: "bold" }}>
                    {review.name}
                  </h4>
                  <div style={{ marginBottom: "10px" }}>
                    {renderStars(review.rating)}
                  </div>
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    "{review.comment}"
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p style={{ textAlign: "center" }}>No reviews available.</p>
      )}
    </Container>




{/* content */}

{/* blog start-------------------------------------------------------------------------------- */}

<div
  style={{
    fontFamily: "'ITC Modern No 216', serif",
    padding: "40px",
    marginTop: "10px",
    backgroundImage: "url('https://wdtlilacdemo.wpengine.com/wp-content/uploads/2022/09/lef-image-1-298x300.webp')",
    backgroundPosition: "right 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "150px auto",
  }}
>
  <div className="container">
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1 className="kiona-tales">Kiona Tales</h1>
      <div className="empty-div"></div>
    </div>

    {/* Responsive Grid */}
    <div className="row g-4">
      {visibleBlogs.map((post, index) => (
        <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
          <div className="card h-100 shadow-sm">
            <img
              src={post.image}
              className="card-img-top"
              alt={`Blog ${index + 1} Image`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "bold", fontFamily: "'ITC Modern No 216', serif" }}>
                {post.title}
              </h5>
              <p className="card-text text-muted">{post.date}</p>
              <p className="card-text" style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
              }}>
                {post.description}
              </p>
              <a
                className="btn btn-link p-0"
                style={{
                  fontFamily: "'Harmonia Sans', sans-serif",
                  color: "#007bff",
                  textDecoration: "none",
                }}
                onClick={() => navigate("/blog2", { state: post._id })}
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Responsive Button */}
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        className="btn btn-dark"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          width: "100%",  // Full-width on mobile
          maxWidth: "200px", // Restrict width on larger screens
        }}
        onClick={() => navigate("/blog1")}
      >
        View All
      </button>
    </div>
  </div>
</div>




{/* blog end---------------------------------------------------------------------------------- */}

<div
  style={{
    // background: "linear-gradient(to bottom right, #dfffbf, #ffeaba)",
    minHeight: "20rem",
    padding:"50px"
  }}
>
  <div className="container-lg py-5">
    <div className="row g-4 justify-content-center">
      {/* Card 1 */}
      <div className="col-12 col-sm-6 col-md-6 col-lg-4">
        <div className="border rounded p-4 text-center shadow bg-light h-100 d-flex flex-column justify-content-between">
          <i className="fa-solid fa-credit-card" style={{ fontSize: "4rem", color: "#007bff" }}></i>
          <div>
            <h4 className="fw-bold">Secure Transactions</h4>
            <p>Your payment information is processed securely and with the utmost care.</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-12 col-sm-6 col-md-6 col-lg-4">
        <div className="border rounded p-4 text-center shadow bg-light h-100 d-flex flex-column justify-content-between">
          <i className="fa-solid fa-truck-fast" style={{ fontSize: "4rem", color: "#28a745" }}></i>
          <div>
            <h4 className="fw-bold">Zero-Hassle Shipping</h4>
            <p>Brisk shipping and no-worries returns. Fast and reliable shipping!</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-12 col-sm-6 col-md-6 col-lg-4">
        <div className="border rounded p-4 text-center shadow bg-light h-100 d-flex flex-column justify-content-between">
          <i className="fa-solid fa-phone" style={{ fontSize: "4rem", color: "#ffc107" }}></i>
          <div>
            <h4 className="fw-bold">We Love To Talk</h4>
            <p>Call, email, drop a note. You'll find us there on the other side.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>








{/* content end */}




<Footer/>


    </div>
  )
}

export default Home1