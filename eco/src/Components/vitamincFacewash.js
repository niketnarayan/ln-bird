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
  <Header/>
  
<div style={{ display: "flex", gap: "10px", padding: "20px",marginTop:"100px",padding:"90px" }}>
  {Products.map((product) => (
    <div
      key={product.id}
      style={{
        display: "flex",
        gap: "20px",
        borderBottom: "1px solid #ddd",
        paddingBottom: "20px",
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
        <p style={{ fontSize: "18px", color: "#555" }}>${product.product_price}</p>
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
          <p>SKU: {product.sku}</p>
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






</div>
)
}

export default VitamincFacewash