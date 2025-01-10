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
      // setcart(resp.data.product)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
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
      name: "Hair Care",
      imgSrc: "https://thumbs.dreamstime.com/b/composition-containers-global-cosmetics-brands-poznan-poland-dec-plastic-body-care-products-including-widely-available-106604090.jpg",
      description: "Unleash the power of Earth's essential bounty for naturally beautiful hair.",
    },
    {
      name: "Face Care",
      imgSrc: "https://thumbs.dreamstime.com/b/composition-containers-global-cosmetics-brands-poznan-poland-dec-plastic-body-care-products-including-widely-available-106604090.jpg",
      description: "Embrace radiance naturally with the science of Earth's bounty.",
    },
    {
      name: "Body Care",
      imgSrc: "https://thumbs.dreamstime.com/b/composition-containers-global-cosmetics-brands-poznan-poland-dec-plastic-body-care-products-including-widely-available-106604090.jpg",
      description: "Elevate your daily bath with Earth's nourishing touch for a rejuvenated you.",
    },
  ];


    const products = [
        { id: 1, name: "Vitamin C Face Wash (Brightens & Evens Skin Tone),100gm", price: "599/-", image: "https://www.richfeelnaturals.com/cdn/shop/files/vitamin-c-face-wash1_a2da8366-3d65-4193-b1f9-94a5b965206a.jpg?v=1718106105",  quantity: 1, },
        { id: 2, name: "Anti-Acne Face Wash – Clear, Blemish-Free Skin 100ml ", price: "299/-", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/toner/1/j/0/100-vitamin-c-face-toner-brightening-even-toned-glowing-skin-20-original-imagykjh7vhazh5y.jpeg?q=90&crop=false",  quantity: 1, },
        { id: 3, name: "Gold Scrub Face Wash – Radiance and Renewal in Every Wash 100ml ", price: "349/-", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42UXP9vdgdvl5INwaQzAnjlX6MNQZQBSj-w&s",  quantity: 1, },
        { id: 4, name: "Anti Hair fall Shampoo (Strengthens and Fortifies) 200ml ", price: "499/-", image: "https://www.ayouthveda.com/cdn/shop/files/Antihairfallshampooecommerce-03_1800x1800.jpg?v=1686936228" ,  quantity: 1,},
        
      ];

      const products1 = [
        { id: 1, name: "Rosemary hair oil(Stimulates Hair Growth,Prevents Hair Fall) 100ml ", price: "599/-", image: "https://m.media-amazon.com/images/I/31UXwtknKHL.jpg",  quantity: 1, },
        { id: 2, name: "Hair Serum For(Nourishes & Conditions,Frizz Control) 100ml  ", price: "299/-", image: "https://www.mcaffeine.com/cdn/shop/files/card_1_9dabaa46-daa8-4ff4-b2ba-9aae5c561d52.jpg?v=1717154284",  quantity: 1, },
        { id: 3, name: "Gluta Soap (	Anti-inflammatory & Healing)  85gm  ", price: "349/-", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42UXP9vdgdvl5INwaQzAnjlX6MNQZQBSj-w&s",  quantity: 1, },
        { id: 4, name: "Anti Hair fall Shampoo (Strengthens and Fortifies) 200ml ", price: "499/-", image: "https://www.ayouthveda.com/cdn/shop/files/Antihairfallshampooecommerce-03_1800x1800.jpg?v=1686936228",  quantity: 1, },
        
      ];
    
      const products2 = [
        { id: 1, name: "Combo(Soap + Anti Acne Face wash + Vitamin C face wash)  ", price: "2000/-", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/face-wash/n/e/f/600-charcoal-vitamin-c-and-anti-acne-face-wash-combo-pack-original-imagvsrsyznf2cxf.jpeg?q=90&crop=false",  quantity: 1, },
        { id: 2, name: "Commbo For(Soap + Anti Acne face wash + Gold Scrub face wash) ", price: "2100/-", image: "https://www.ayouthveda.com/cdn/shop/files/Artboard2-100-min_3a4b56ed-9203-4dac-bc77-2297c96e01dd_1800x1800.jpg?v=1714455460",  quantity: 1, },
        { id: 3, name: "Combo (	Gold Scrub face wash + Vitamin C Face wash + Anti Acne face wash)  ", price: "1700/-", image: "https://m.media-amazon.com/images/I/815ayrekxUL._AC_UF1000,1000_QL80_.jpg",  quantity: 1, },
        { id: 4, name: "Combo(Hair Serum + Hair oil + Anti hair fall Shampoo) ", price: "2200/-", image: "https://products.drbatras.com/cdn/shop/products/pro-hair-fall-control-regime-shampoo-conditioner-hair-oil-hair-fall-serum-619381.jpg?v=1701180812",  quantity: 1, },
        
      ];
    
      const products3 = [
        { id: 1, name: "Combo(Shampoo + hair oil + Soap)  ", price: "2000/-", image: "https://m.media-amazon.com/images/I/51K0Vy3VbjL.jpg",  quantity: 1, },
        { id: 2, name: "Commbo For(Shampoo + Hair oil + Vitamin C Face wash) ", price: "2100/-", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/combo-kit/w/z/l/lati-hair-care-and-face-care-kit-hair-oil-shampoo-hair-original-imagretefgfhuzyf.jpeg?q=90&crop=false",  quantity: 1, },
        { id: 3, name: "Combo (	Shampoo + Hair oil + Gold Scrub)  ", price: "1700/-", image: "https://mridulmadhok.in/cdn/shop/products/WhatsAppImage2021-12-31at4.07.04AM.jpg?v=1640996010",  quantity: 1, },
        { id: 4, name: "Combo(Hair Serum + Hair oil + Anti hair fall Shampoo) ", price: "2200/-", image: "https://products.drbatras.com/cdn/shop/products/pro-hair-fall-control-regime-shampoo-conditioner-hair-oil-hair-fall-serum-619381.jpg?v=1701180812",  quantity: 1, },
        
      ];

      

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
    



    //   const handleprouctadd = (product) => {
    //     console.log('Adding product to cart:', product);
    //     setcart([...cart, product]);
    //   };
    // console.log(cart);
    // console.log(cart.length);


    const reviews = [
      {
        name: "John Doe",
        review: "This product has changed my life! Highly recommended.",
        image: "https://via.placeholder.com/100",
        rating: 5,
      },
      {
        name: "Jane Smith",
        review: "Amazing quality and great results. Will buy again!",
        image: "https://via.placeholder.com/100",
        rating: 4,
      },
      {
        name: "Mike Johnson",
        review: "Excellent customer service and fast delivery.",
        image: "https://via.placeholder.com/100",
        rating: 4,
      },
      {
        name: "Sarah Lee",
        review: "The best investment I’ve made for my skin care routine.",
        image: "https://via.placeholder.com/100",
        rating: 5,
      },
    ];
  
    // Function to render stars based on rating
    const renderStars = (rating) => {
      const totalStars = 5;
      const stars = [];
      for (let i = 1; i <= totalStars; i++) {
        stars.push(
          <i
            key={i}
            className={`bi bi-star${i <= rating ? "-fill" : ""}`}
            style={{
              color: i <= rating ? "#ffc107" : "#ddd",
              marginRight: "3px",
            }}
          ></i>
        );
      }
      return stars;
    };

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

  return (
    <div>
        <Header/>
      

{/* banner start----------------------------------------------------------------------------------------------- */}

<div className="container-fluid p-0">
  <Carousel data-bs-theme="dark" style={{ marginTop: "6.9rem" }}>
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
<div style={{ padding: "40px",marginBottom:"3rem",marginTop:"3rem" }}>
      <h1
        style={{
          fontSize: "3.5rem",
          fontFamily: "'ITC Modern No 216', serif",
          fontWeight: "bold",
          color: "#222",
          textAlign: "center",
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
          textAlign: "center",
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
    </div>



{/* content end--------------------------------------------------------------------------- */}

{/* product cart section------------------------------------------------------------------------------------- */}


 <div className="grocery">
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
</div> 






{/* our stander start------------------------------------------------------------------------------- */}

<div className="row" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: "6rem", marginLeft: "3rem", marginRight: "3rem" }}>
  <h2 style={{textAlign:"center"}}>Everything your skin needs,<br/>
  Nothing it doesn’t</h2>
        <div className="col-md-3" style={{ flex: 1, textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="icon-circle">
            <i className="fa-solid fa-seedling" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>Spiritually Infused</h4>
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
            <i className="fa-brands fa-canadian-maple-leaf" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
          <h4 style={{ marginTop: '10px', color: '#333' }}>100% Plant Based</h4>
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

{/*our stander end-----------------------------------------------------------------------------------  */}

{/* combo start----------------------------------------------------------------------------------- */}

<div
  style={{
    padding: "50px 0",
    marginTop: "4rem",
    background: "linear-gradient(135deg,rgba(19, 183, 216, 0.55),rgba(23, 232, 255, 0.58))",
  }}
>
  <div className="container" style={{}}>
    <div className="row g-4 main-product-div">
      {Combo.map((product, index) => (
        <div
          className="col-12 d-flex align-items-center product-item-div"
          key={index}
          style={{
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            display: "flex",
            alignItems: "center",
            marginTop:"0px",
            
            // gap: "20px",
            // padding: "20px",
          }}
        >
        
          <div className="product-image-div" style={{ flex: "1", width:"50%" }}>
            <img
              src={product.imgSrc}
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
              {product.name}
            </h4>
            <p style={{ margin: "0 0 10px 20px" }}>{product.description}</p>
            <a
              href="#"
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

<Container fluid style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
  <h2
    style={{
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "32px",
      color: "#333",
      fontWeight: "bold",
    }}
  >
    Customer Reviews
  </h2>

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
              backgroundColor: "#fff",
              padding: "20px",
              margin: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={review.image}
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
              "{review.review}"
            </p>
          </Col>
        </Row>
      </Carousel.Item>
    ))}
  </Carousel>
</Container>



{/* content */}

{/* blog start-------------------------------------------------------------------------------- */}

<div
  style={{
    background: "linear-gradient(135deg,rgba(19, 183, 216, 0.55),rgba(23, 232, 255, 0.58))",
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    marginTop: "1rem",
  }}
>
  <div style={{ textAlign: "center", marginBottom: "40px" }}>
    <h1 className="kiona-tales">Kiona Tales</h1>

    <div className="empty-div"></div>
  </div>
  <div className="row g-4">
    {visibleBlogs.map((post, index) => (
      <div className="col-md-4" key={index}>
        <div
          className="card h-100 shadow-sm"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <img
            src={post.image}
            className="card-img-top"
            alt={`Blog ${index + 1} Image`}
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              {post.title}
            </h5>
            <p className="card-text text-muted">{post.date}</p>
            <p
              className="card-text"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
              }}
            >
              {post.description}
            </p>
            <a
              // href={`/blog/${post.id}`}
              className="btn btn-link p-0"
              style={{ color: "#007bff", textDecoration: "none" }}
              onClick={() => navigate('/blog2',{state:post._id})}
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <button
      style={{
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#444")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#000")}
      onClick={() => navigate('/blog1')} // Redirect to all blogs
    >
      View All
    </button>
  </div>
</div>


{/* blog end---------------------------------------------------------------------------------- */}

<div
  style={{
    // background: "linear-gradient(to bottom right, #dfffbf, #ffeaba)",
    minHeight: "20rem",
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
            <p>Your payment information is processed securely.</p>
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