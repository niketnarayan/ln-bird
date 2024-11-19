import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productslider.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Productslider() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentIndex1, setCurrentIndex1] = useState(0);


  // Sample Product Data Array
  const products = [
    { title: "KELLOGGS CHOCOS 385 G", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/104456709_1.webp" },
    { title: "NISSIN CUP NOODLES GEKI HOT & SPICY KOREAN VEG 70 G", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1705469291669.webp" },
    { title: "BAMBINO PREMIUM ALL SEASONS FUSILLI PASTA 400 G", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688109188935.webp" },
    { title: "YIPPEE MAGIC MASALA NOODLES 60 G PK96", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1653452890738.webp" },
    { title: "QUAKER OATS MEAL 1 KG", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691567_1.webp" },
    { title: "MAGGI VEG ATTA SPINACH NOODLES 284 G", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1689834504733.webp" },
    { title: "DEL MONTE PENNE RIGATE PASTA 500 G", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1717478191935.jpeg" },
    { title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp" },
    { title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp" },
    { title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp" },
  ];

  const products1 = [
    { title: "KELLOGGS CHOCOS 385 G", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/104456709_1.webp" },
    { title: "NISSIN CUP NOODLES GEKI HOT & SPICY KOREAN VEG 70 G", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1705469291669.webp" },
    { title: "BAMBINO PREMIUM ALL SEASONS FUSILLI PASTA 400 G", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688109188935.webp" },
    { title: "YIPPEE MAGIC MASALA NOODLES 60 G PK96", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1653452890738.webp" },
    { title: "QUAKER OATS MEAL 1 KG", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691567_1.webp" },
    { title: "MAGGI VEG ATTA SPINACH NOODLES 284 G", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1689834504733.webp" },
    { title: "DEL MONTE PENNE RIGATE PASTA 500 G", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1717478191935.jpeg" },
    { title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp" },
    { title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp" },
    { title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp" },
  ];



  // Group products into sets of four
  const productChunks = [];
  for (let i = 0; i < products.length; i += 5) {
    productChunks.push(products.slice(i, i + 5));
  }

  const productChunks1 = [];
  for (let i = 0; i < products1.length; i += 5) {
    productChunks1.push(products1.slice(i, i + 5));
  }

  // Function to navigate to the next set of products
  const nextProducts = () => {
    if (currentIndex < productChunks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };


  const nextProducts1 = () => {
    if (currentIndex1 < productChunks1.length - 1) {
      setCurrentIndex1(currentIndex1 + 1);
    }
  };



  // Function to navigate to the previous set of products
  const prevProducts = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
 

  const prevProducts1 = () => {
    if (currentIndex1 > 0) {
      setCurrentIndex1(currentIndex1 - 1);
    }
  };


  return (
    <>
     <div className="container position-relative" style={{marginTop:"3rem"}}>
      {/* Left Arrow */}

      <div className='row'>
  <div
    className='col'
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
      // padding: '10px 20px',
    }}
  >
    {/* Cereals Title and View All Button */}
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center',marginLeft:"40px" }}>
      <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#858585' }}>Dry Fruits  </span>
      <button style={{ border: 'none', background: 'none', fontSize: '14px', color: '858585' }}>View All</button>
    </div>

    {/* Arrow Buttons */}
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', justifyContent: 'center' }}>
  {/* Left Arrow Button */}
  <button
    className='btn'
    style={{
      height: '25px',
      width: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      border: 'none',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      transition: 'transform 0.3s, box-shadow 0.3s, opacity 0.2s',
      color: '#fff',
      cursor: 'pointer',
      opacity: currentIndex === 0 ? 0.5 : 1,
    }}
    onClick={prevProducts}
    disabled={currentIndex === 0}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    }}
  >
    <i
      className='bi bi-chevron-left'
      style={{
        fontSize: '15px',
        animation: 'bounce 1s infinite alternate',
        color: '#fff',
      }}
    ></i>
  </button>

  {/* Right Arrow Button */}
  <button
    className='btn'
    style={{
      height: '25px',
      width: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
      border: 'none',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      transition: 'transform 0.3s, box-shadow 0.3s, opacity 0.2s',
      color: '#fff',
      cursor: 'pointer',
      opacity: currentIndex === productChunks.length - 1 ? 0.5 : 1,
    }}
    onClick={nextProducts}
    disabled={currentIndex === productChunks.length - 1}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    }}
  >
    <i
      className='bi bi-chevron-right'
      style={{
        fontSize: '15px',
        animation: 'bounce 1s infinite alternate',
        color: '#fff',
      }}
    ></i>
  </button>
</div>

{/* Bouncing Icon Animation */}
<style>
  {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
</style>



  </div>
</div>


      {/* Products Grid */}
      <div className="row">
        {productChunks[currentIndex].map((product, idx) => (
          <div className="col-md-2 mb-3" key={idx} style={{marginLeft:"30px"}}>
            <div className="card" style={{ width: "200px", height:"100%" }}>
              <img src={product.image} className="card-img-top " alt={product.title} style={{ height: "120px", width:"150px", 
    padding:"20px",alignItems:"center" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px",height:"37px" }}>{product.title}</h5>
                
                {/* Slab Pricing Section */}
                <div style={{ display: "flex", gap: "5px", alignItems: "center", marginTop: "5px" }}>
                  <img src='https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png' alt='...' style={{ width: "20px" }} />
                  <span style={{ color: "red", fontWeight: "bold",fontSize:"13px" }}>Slab Price</span>

                  <div style={{backgroundColor:"red", width:"4.5rem",height:"1px"}}></div>
                </div>
                
                
                <div className="" style={{ display: "flex", marginTop: "5px",gap:"10px" }}>
                  <div className='' style={{  }}>
                   <p className='d-flex' style={{fontSize:"14px", height:"fit-content",backgroundColor:"lightgray"}}> 1-2 pc</p>
                  </div>
                  <div style={{fontSize:"14px"}}>
                    ₹ {product.price}
                  </div>
                  <span style={{  color: "green",fontSize:"14px" }}>100% OFF</span>
                </div>

                {/* Quantity and Add to Cart Section */}
                <div className="" style={{ marginTop: "10px" }}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "red",
      height: "40px",
      borderRadius: "5px",
      // width: "10rem",
    }}
  >
    <button
      className="btn"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        border: "none",
        background: "transparent",
        backgroundColor:"#3D215D",
      }}
    >
      <i
        className="bi bi-cart-fill"
        style={{
          fontSize: "22px",
          color: "white",
          marginRight: "5px",
        }}
      ></i>
      <span
        style={{
          fontSize: "12px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Add to Cart
      </span>
    </button>
  </div>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>

{/* second slider-------------------------------------------------------------------------------------- */}


<div className="container position-relative">
      {/* Left Arrow */}

      <div className='row'>
  <div
    className='col'
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
      // padding: '10px 20px',
    }}
  >
    {/* Cereals Title and View All Button */}
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center',marginLeft:"40px" }}>
      <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#858585' }}>Maggie & Pasta  </span>
      <button style={{ border: 'none', background: 'none', fontSize: '14px', color: '858585' }}>View All</button>
    </div>

    {/* Arrow Buttons */}
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', justifyContent: 'center' }}>
  {/* Left Arrow Button */}
  <button
    className='btn'
    style={{
      height: '25px',
      width: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      border: 'none',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      transition: 'transform 0.3s, box-shadow 0.3s, opacity 0.2s',
      color: '#fff',
      cursor: 'pointer',
      opacity: currentIndex1 === 0 ? 0.5 : 1,
    }}
    onClick={prevProducts1}
    disabled={currentIndex1 === 0}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    }}
  >
    <i
      className='bi bi-chevron-left'
      style={{
        fontSize: '15px',
        animation: 'bounce 1s infinite alternate',
        color: '#fff',
      }}
    ></i>
  </button>

  {/* Right Arrow Button */}
  <button
    className='btn'
    style={{
      height: '25px',
      width: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
      border: 'none',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      transition: 'transform 0.3s, box-shadow 0.3s, opacity 0.2s',
      color: '#fff',
      cursor: 'pointer',
      opacity: currentIndex1 === productChunks1.length - 1 ? 0.5 : 1,
    }}
    onClick={nextProducts1}
    disabled={currentIndex === productChunks1.length - 1}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    }}
  >
    <i
      className='bi bi-chevron-right'
      style={{
        fontSize: '15px',
        animation: 'bounce 1s infinite alternate',
        color: '#fff',
      }}
    ></i>
  </button>
</div>

{/* Bouncing Icon Animation */}
<style>
  {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
</style>


  </div>
</div>


      {/* Products Grid */}
      <div className="row">
        {productChunks1[currentIndex1].map((product1, idx) => (
          <div className="col-md-2 mb-3" key={idx} style={{marginLeft:"30px"}}>
            <div className="card" style={{ width: "200px", height:"100%" }}>
              <img src={product1.image} className="card-img-top " alt={product1.title} style={{ height: "120px", width:"150px", 
    padding:"20px",alignItems:"center" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px",height:"37px" }}>{product1.title}</h5>
                
                {/* Slab Pricing Section */}
                <div style={{ display: "flex", gap: "5px", alignItems: "center", marginTop: "5px" }}>
                  <img src='https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png' alt='...' style={{ width: "20px" }} />
                  <span style={{ color: "red", fontWeight: "bold",fontSize:"13px" }}>Slab Price</span>

                  <div style={{backgroundColor:"red", width:"4.5rem",height:"1px"}}></div>
                </div>
                
                
                <div className="" style={{ display: "flex", marginTop: "5px",gap:"10px" }}>
                  <div className='' style={{  }}>
                   <p className='d-flex' style={{fontSize:"14px", height:"fit-content",backgroundColor:"lightgray"}}> 1-2 pc</p>
                  </div>
                  <div style={{fontSize:"14px"}}>
                    ₹ {product1.price}
                  </div>
                  <span style={{  color: "green",fontSize:"14px" }}>100% OFF</span>
                </div>

                {/* Quantity and Add to Cart Section */}
                <div className="" style={{ marginTop: "10px" }}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "red",
      height: "40px",
      borderRadius: "5px",
      // width: "10rem",
    }}
  >
    <button
      className="btn"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        border: "none",
        background: "transparent",
        backgroundColor:"#3D215D",
      }}
    >
      <i
        className="bi bi-cart-fill"
        style={{
          fontSize: "22px",
          color: "white",
          marginRight: "5px",
        }}
      ></i>
      <span
        style={{
          fontSize: "12px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Add to Cart
      </span>
    </button>
  </div>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>


{/* second slider end-------------------------------------------------------------------------------------- */}
</>
  );
}

export default Productslider;
