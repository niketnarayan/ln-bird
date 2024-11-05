import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productslider.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Productslider() {
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample Product Data Array
  const products = [
    { title: "NEXTON SWEET CORN 1 KG IP", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675663854062.webp" },
    { title: "Product 2", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675663854062.webp" },
    { title: "Product 3", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675663854062.webp" },
    { title: "Product 4", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675663854062.webp" },
    { title: "Product 5", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675663854062.webp" },
    { title: "Product 6", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675663854062.webp" },
    { title: "Product 7", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675663854062.webp" },
    { title: "Product 8", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675663854062.webp" },
  ];

  // Group products into sets of four
  const productChunks = [];
  for (let i = 0; i < products.length; i += 4) {
    productChunks.push(products.slice(i, i + 4));
  }

  // Function to navigate to the next set of products
  const nextProducts = () => {
    if (currentIndex < productChunks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to navigate to the previous set of products
  const prevProducts = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="container position-relative">
      {/* Left Arrow */}
      <button
        className="btn btn-outline-secondary position-absolute"
        style={{ top: "50%", left: "-20px", transform: "translateY(-50%)" }}
        onClick={prevProducts}
        disabled={currentIndex === 0}
      >
        <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
      </button>

      {/* Products Grid */}
      <div className="row">
        {productChunks[currentIndex].map((product, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card" style={{ width: "100%" }}>
              <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "200px", objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px" }}>{product.title}</h5>
                
                {/* Price and Discount Section */}
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <div className='price' style={{ fontWeight: "bold", fontSize: "18px" }}>
                    ₹ {product.price}
                  </div>
                  <div style={{ fontSize: "13px", textDecoration: "line-through", color: "gray" }}>
                    ₹ {product.originalPrice}
                  </div>
                </div>
                <div style={{ fontSize: "14px", color: "green" }}>{product.discount}</div>
                
                {/* Slab Pricing Section */}
                <div style={{ display: "flex", gap: "5px", alignItems: "center", marginTop: "5px" }}>
                  <img src='https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png' alt='...' style={{ width: "25px" }} />
                  <span style={{ color: "red", fontWeight: "bold" }}>Slab Price</span>

                  <div style={{backgroundColor:"red", width:"6rem",height:"1px"}}></div>
                </div>
                
                
                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <div style={{ backgroundColor: "lightgray", fontSize: "13px", padding: "3px 5px" }}>
                    1-2 pc
                  </div>
                  <div>
                    ₹ {product.price}
                  </div>
                  <span style={{ fontSize: "14px", color: "green", marginLeft: "30px" }}>100% OFF</span>
                </div>

                {/* Quantity and Add to Cart Section */}
                <div className="d-flex align-items-center gap-2" style={{ marginTop: "10px" }}>
                  <div className="input-group" style={{ width: '120px' }}>
                    <button className="btn btn-outline-secondary" type="button" onClick={decreaseQuantity}>-</button>
                    <input type="text" className="form-control" value={quantity} readOnly style={{ width: "38px" }} />
                    <button className="btn btn-outline-secondary" type="button" onClick={increaseQuantity}>+</button>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", backgroundColor: "red", height: "40px", borderRadius: "5px" }}>
                    <button className="btn">
                      <i className="bi bi-cart-fill" style={{ fontSize: "22px", color: "white" }}></i>
                    </button>
                    <div>
                      <span style={{ fontSize: "12px", fontWeight: "bold", color: "white" }}>Add to Cart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="btn btn-outline-secondary position-absolute"
        style={{ top: "50%", right: "-20px", transform: "translateY(-50%)" }}
        onClick={nextProducts}
        disabled={currentIndex === productChunks.length - 1}
      >
        <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
      </button>
    </div>
  );
}

export default Productslider;
