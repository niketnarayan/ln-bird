import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import "./VitamincFacewash.css";
import { useCart } from "./cartcontext";
import { useLocation } from "react-router-dom";
import api from "../Components/api";
import { useNavigate  } from "react-router-dom";
import Swal from 'sweetalert2';


function VitamincFacewash() {
  const location = useLocation();
  const id = location.state || {};

  const [Products, setProducts] = useState([]);
  const [category, setcategory] = useState("");
  const [activeTab, setActiveTab] = useState("description"); // 🟢 State for Tab Switching

  const getproduct = async () => {
    try {
      const resp = await api.get(`getproductbyid/${id}`);
      setcategory(resp.data.product[0].product_category);
      setProducts(resp.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const [relatedproducts, setrelatedproducts] = useState([]);
  const getproductbycategory = async () => {
    try {
      const resp = await api.get(`getproductbycategory/${category}`);
      setrelatedproducts(resp.data.product.filter((item) => item._id !== Products[0]._id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproduct();
  }, [id]);

  useEffect(() => {
    getproductbycategory();
  }, [category]);

  const { cart, setcart } = useCart();

  // Add to Cart function
  const handleprouctadd = (product) => {
    const isProductInCart = cart.some((item) => item.name === product.name);
    if (!isProductInCart) {
      setcart([...cart, product]);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  };


     const navigate=useNavigate()
  
      const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to specific product details page
      };


      const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + " ...";
        }
        return text;
      };


      const [review, setreview] = useState({comment:"",name:"",email:""})
      const addreview = async () => {
        try {
          const resp = await api.post('review', review);
          if (resp.status === 200) {
                      Swal.fire({
                        title: 'Success!',
                        text: 'review saved successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                      });
                    }
        } catch (error) {
          console.log(error);
          
          
        }
        
      }




  

  return (
    <div>
      <Header />

      <div style={{ display: "flex", gap: "10px", padding: "20px",marginTop:"100px",padding:"90px", backgroundColor:"rgb(252, 248, 238)" }}>
  {Products.map((product) => (
    <div
      key={product.id}
      style={{
        display: "flex",
        gap: "20px",
        // borderBottom: "1px solid #ddd",
        // paddingBottom: "20px",
        marginBottom: "20px",
      }}
    >
      {/* Product Image */}
      <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
      <img
          src={product?.product_image}
          style={{ height: "100%", width:"100%", boxShadow:"10px 10px 20px rgba(0,0,0,0.2)" }}
          alt={product?.product_name || "Product Image"}
          // className="img-fluid"
        />
      </div>

      {/* Product Details */}
      <div style={{ flex: "2", paddingLeft: "20px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
          {product.product_name}
        </h2>
        <p style={{ fontSize: "18px", color: "#555" }}>₹{product.product_price}</p>
        <div style={{ display: "flex", margin: "10px 0" }}>
          <span style={{ color: "#f4c150", marginRight: "10px" }}>★★★★☆</span>
          <span>(4.5)</span>
        </div>
        <p style={{ color: "#777", marginBottom: "20px" }}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.
        </p>
        <div>
          <button
           onClick={() => handleprouctadd(product)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f4c150",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            ADD TO CART
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ADD TO WISHLIST
          </button>
        </div>
        <div style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
          <p>SKU: {product.product_sku}</p>
          <p>Categories: {product.categories}</p>
          <p>Tag: {product.tag}</p>
          <p>
            Share:{" "}
            <span style={{ color: "#0077b5", margin: "0 5px" }}>LinkedIn</span>
            <span style={{ color: "#1da1f2", margin: "0 5px" }}>Twitter</span>
            <span style={{ color: "#3b5998", margin: "0 5px" }}>Facebook</span>
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

<div style={{ 
  borderTop: "1px solid #ddd", 
  margin: "0 50px" // Adds 50px margin to left and right
}}></div>


     {/* ⭐⭐ Tab Section (Description, Additional Info, Reviews) ⭐⭐ */}
<div style={{  maxWidth: "900px", margin: "0 auto" }}>
  {/* Tabs */}
  <div style={{ display: "flex", justifyContent: "center", borderBottom: "2px solid #ddd" }}>
    {["description", "info", "reviews"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        style={{
          background: activeTab === tab ? "#f4c150" : "#fff",
          color: activeTab === tab ? "#fff" : "#333",
          padding: "12px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          border: "1px solid #f4c150",
          borderBottom: activeTab === tab ? "none" : "1px solid #ddd",
          cursor: "pointer",
          flex: 1,
          transition: "0.3s ease",
          textTransform: "uppercase",
        }}
      >
        {tab === "description" ? "Description" : tab === "info" ? "Additional Info" : "Reviews"}
      </button>
    ))}
  </div>

  {/* ⭐ Tab Content */}
  <div style={{ background:"transparent", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
  {activeTab === "description" && <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444" }}>{Products[0]?.description || "No description available."}</p>}
  {activeTab === "info" && <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444" }}>{Products[0]?.additional_info || "No additional information available."}</p>}
  {activeTab === "reviews" && (
    <div>
      <h3 style={{ fontSize: "22px", marginBottom: "15px", color: "#333" }}>Customer Reviews</h3>
      {Products[0]?.reviews?.length > 0 ? (
        Products[0].reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: "15px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "left" }}>
            <strong style={{ fontSize: "16px", color: "#333" }}>{review.user}:</strong>
            <p style={{ margin: "5px 0", fontSize: "16px", color: "#555" }}>{review.comment}</p>
            <span style={{ color: "#f4c150", fontSize: "16px" }}>★ {review.rating}</span>
          </div>
        ))
      ) : (
        <p style={{ fontSize: "16px", color: "#777" }}>No reviews yet.</p>
      )}

      {/* ⭐ Add Review Section */}
      <h3 style={{ fontSize: "22px", marginTop: "20px", color: "#333" }}>Add a Review</h3>
      
      {/* ⭐ Rating Dropdown */}
      <select 
        style={{ width: "100%", padding: "10px", fontSize: "16px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "10px" }} 
        onChange={(e) => setreview({...review, rating: e.target.value})}
      >
        <option value="">Select Rating</option>
        <option value="5">★★★★★ (5 Stars)</option>
        <option value="4">★★★★☆ (4 Stars)</option>
        <option value="3">★★★☆☆ (3 Stars)</option>
        <option value="2">★★☆☆☆ (2 Stars)</option>
        <option value="1">★☆☆☆☆ (1 Star)</option>
      </select>
      
      <textarea 
        placeholder="Your review" 
        style={{ width: "100%", height: "80px", padding: "10px", fontSize: "16px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "10px" }} 
        onChange={(e) => setreview({...review, comment: e.target.value})}
      />
      
      <br />
      <input 
        type="text" 
        placeholder="Name" 
        style={{ padding: "12px", marginRight: "10px", width: "48%", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px" }} 
        onChange={(e) => setreview({...review, name: e.target.value})}
      />
      
      <input 
        type="email" 
        placeholder="Email" 
        style={{ padding: "12px", width: "48%", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px" }} 
        onChange={(e) => setreview({...review, email: e.target.value})}
      />
      
      <br />
      <button 
        style={{ marginTop: "15px", padding: "12px 20px", backgroundColor: "#f4c150", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold", borderRadius: "8px", transition: "0.3s ease" }} 
        onClick={addreview}
      >
        Submit Review
      </button>
    </div>
  )}
</div>

</div>


{/* Related product----------------------------------------------------------------------------------------- */}


<div style={{ margin: "0 auto", padding: "20px 50px" }}>
<h2 className='relatedproduct' style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", marginTop:"100px", fontSize:"35px" }}>
    Check out these related items
</h2>

  <div
    className="row"
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      gap: "20px",
      overflow: "hidden", // Prevents unwanted scrolling
      paddingBottom: "20px",
    }}
  >
    {relatedproducts.map((product) => (
      <div
        key={product.id}
        className="col-12 col-sm-6 col-md-4 col-lg-3"
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
    ))}
  </div>
</div>









      <Footer />
    </div>
  );
}

export default VitamincFacewash;
