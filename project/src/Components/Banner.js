import React, { useState } from 'react';
import './Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productslider.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Banner() {

  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentIndex2, setCurrentIndex2] = useState(0);

  const [currentIndex3, setCurrentIndex3] = useState(0);

  const [currentIndex4, setCurrentIndex4] = useState(0);

  const [currentIndex5, setCurrentIndex5] = useState(0);

 


  

  // Sample Product Data Array
  const products = [
    { title: "Vedaka Premium Unpolished Mixed Dal", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://m.media-amazon.com/images/I/91CI0QEuy8L._AC_UL320_.jpg" },
    { title: "PANSARI RAGI ATTA - FINGER MILLET FLOUR 500 G", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://m.media-amazon.com/images/I/81dNXkl9ArL._AC_UL320_.jpg" },
    { title: "AASHIRVAAD MP CHAKKI ATTA 5 KG", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688532751540.webp" },
    { title: "RAJDHANI MAIDA 1 KG", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624432867064.webp" },
    { title: "RAJDHANI SOOJI 1 KG", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691829_1.webp" },
    { title: "PAN SOOJI 500 G", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1651820864946.webp" },
    { title: "RAJDHANI CHAKKI ATTA (VFPL) 50 KG", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624879578088.webp" },
    { title: "FORTUNE ATTA PP 10 KG", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686263_1.webp" },
  ];



  const productss = [
    { title: "Vedaka Premium Unpolished Mixed Dal", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://m.media-amazon.com/images/I/91CI0QEuy8L._AC_UL320_.jpg" },
    { title: "PANSARI RAGI ATTA - FINGER MILLET FLOUR 500 G", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://m.media-amazon.com/images/I/81dNXkl9ArL._AC_UL320_.jpg" },
    { title: "AASHIRVAAD MP CHAKKI ATTA 5 KG", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688532751540.webp" },
    { title: "RAJDHANI MAIDA 1 KG", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624432867064.webp" },
    { title: "RAJDHANI SOOJI 1 KG", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691829_1.webp" },
    { title: "PAN SOOJI 500 G", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1651820864946.webp" },
    { title: "RAJDHANI CHAKKI ATTA (VFPL) 50 KG", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624879578088.webp" },
    { title: "FORTUNE ATTA PP 10 KG", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686263_1.webp" },
  ];


 

  const products1 = [
    { title: "FENA DETERGENT CAKE 70 G", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/104453053_2.webp" },
    { title: "VANISH STAIN REMOVER LIQUID 400 ML", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1646894636660.webp" },
    { title: "SURF EXCEL QUICK WASH DETERGENT WASHING POWDER 1 KG", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103678369_1.webp" },
    { title: "FENA DETERGENT WASHING POWDER 500 G", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103668689_1.webp" },
    { title: "MORELIGHT EXTRA POWER DETERGENT POWDER 4 KG", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1626348351818.webp" },
    { title: "GODREJ EZEE LIQUID DETERGENT 500 G", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103678600_1.webp" },
    { title: "REVIVE LIQUID 400 G", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1708495554262.webp" },
    { title: "HENKO MATIC FRONT LOAD 2LT", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1680667959964.webp" },
  ];


  const products11 = [
    { title: "FENA DETERGENT CAKE 70 G", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/104453053_2.webp" },
    { title: "VANISH STAIN REMOVER LIQUID 400 ML", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1646894636660.webp" },
    { title: "SURF EXCEL QUICK WASH DETERGENT WASHING POWDER 1 KG", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103678369_1.webp" },
    { title: "FENA DETERGENT WASHING POWDER 500 G", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103668689_1.webp" },
    { title: "MORELIGHT EXTRA POWER DETERGENT POWDER 4 KG", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1626348351818.webp" },
    { title: "GODREJ EZEE LIQUID DETERGENT 500 G", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103678600_1.webp" },
    { title: "REVIVE LIQUID 400 G", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1708495554262.webp" },
    { title: "HENKO MATIC FRONT LOAD 2LT", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1680667959964.webp" },
  ];
 

  const products2 = [
    { title: "DORITOS NACHO CHEESE 44 G", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1612952308545.webp" },
    { title: "HALDIRAM FATAFAT BHEL 150 G", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673188739.webp" },
    { title: "PITARA BIKANERI BHUJIA 900 G", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1712311257132.jpeg" },
    { title: "HALDIRAM PANCHRATTAN 200 G", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673024056.webp" },
    { title: "ACT II IPC GOLDEN SIZZLE 40 G", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103692193_1.webp" },
    { title: "HALDIRAM KAJU MIXTURE 400 G", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673107961.webp" },
    { title: "GOLDIEE MEAT/MUTTON MASALA SPECIAL 100 G", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103667167_1.webp" },
    { title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp" },
  ];


  const products22 = [
    { title: "DORITOS NACHO CHEESE 44 G", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1612952308545.webp" },
    { title: "HALDIRAM FATAFAT BHEL 150 G", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673188739.webp" },
    { title: "PITARA BIKANERI BHUJIA 900 G", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1712311257132.jpeg" },
    { title: "HALDIRAM PANCHRATTAN 200 G", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673024056.webp" },
    { title: "ACT II IPC GOLDEN SIZZLE 40 G", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103692193_1.webp" },
    { title: "HALDIRAM KAJU MIXTURE 400 G", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673107961.webp" },
    { title: "GOLDIEE MEAT/MUTTON MASALA SPECIAL 100 G", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103667167_1.webp" },
    { title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp" },
  ];

  const products3 = [
    { title: "LG HING 50 G", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103671704_1.webp" },
    { title: "CATCH PERI PERI SPRINKLER 90 G", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1687248407662.webp" },
    { title: "CATCH CHATPATA CHAT MASALA 100 G", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688108663864.webp" },
    { title: "CATCH JALJEERA MASALA 100 G", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688108648256.webp" },
    { title: "GOLDIEE TURMERIC POWDER POUCH 200 G", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1612427788992.webp" },
    { title: "CHUK-DE SAUNF 7G PK10", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624618954925.webp" },
    { title: "HERSHEYS KISSES MILK CHOCOLATE 108 G", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1638514177101.webp" },
    { title: "HALDIRAM TAKA TAK MASALA 105 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673446065.webp" },
  ];


  const products33 = [
    { title: "LG HING 50 G", price: 88.99, originalPrice: 100.88, discount: "15.83% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103671704_1.webp" },
    { title: "CATCH PERI PERI SPRINKLER 90 G", price: 90.00, originalPrice: 110.00, discount: "10% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1687248407662.webp" },
    { title: "CATCH CHATPATA CHAT MASALA 100 G", price: 78.00, originalPrice: 100.00, discount: "22% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688108663864.webp" },
    { title: "CATCH JALJEERA MASALA 100 G", price: 95.00, originalPrice: 120.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688108648256.webp" },
    { title: "GOLDIEE TURMERIC POWDER POUCH 200 G", price: 85.00, originalPrice: 110.00, discount: "12% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1612427788992.webp" },
    { title: "CHUK-DE SAUNF 7G PK10", price: 88.00, originalPrice: 100.00, discount: "15% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624618954925.webp" },
    { title: "HERSHEYS KISSES MILK CHOCOLATE 108 G", price: 92.00, originalPrice: 105.00, discount: "13% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1638514177101.webp" },
    { title: "HALDIRAM TAKA TAK MASALA 105 G", price: 78.50, originalPrice: 99.00, discount: "20% OFF", image: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673446065.webp" },
  ];

  // Group products into sets of four
  const productChunks = [];
  for (let i = 0; i < products.length; i += 4) {
    productChunks.push(products.slice(i, i + 4));
  }

  const productChunkss = [];
  for (let i = 0; i < productss.length; i += 4) {
    productChunkss.push(productss.slice(i, i + 4));
  }
  

  const productChunks1 = [];
  for (let i = 0; i < products1.length; i += 4) {
    productChunks1.push(products1.slice(i, i + 4));
  }

  const productChunks11 = [];
  for (let i = 0; i < products11.length; i += 4) {
    productChunks11.push(products11.slice(i, i + 4));
  }



  const productChunks2 = [];
  for (let i = 0; i < products2.length; i += 4) {
    productChunks2.push(products2.slice(i, i + 4));
  }

  const productChunks22 = [];
  for (let i = 0; i < products22.length; i += 4) {
    productChunks22.push(products22.slice(i, i + 4));
  }

  const productChunks3 = [];
  for (let i = 0; i < products3.length; i += 4) {
    productChunks3.push(products3.slice(i, i + 4));
  }

  const productChunks33 = [];
  for (let i = 0; i < products33.length; i += 4) {
    productChunks33.push(products33.slice(i, i + 4));
  }
  // Function to navigate to the next set of products
  const nextProducts = () => {
    if (currentIndex < productChunks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const nextProducts1 = () => {
    if (currentIndex2 < productChunkss.length - 1) {
      setCurrentIndex2(currentIndex2 + 1);
    }
  };

  const nextProducts2 = () => {
    if (currentIndex3 < productChunks11.length - 1) {
      setCurrentIndex3(currentIndex3 + 1);
    }
  };

  const nextProducts3 = () => {
    if (currentIndex4 < productChunks22.length - 1) {
      setCurrentIndex4(currentIndex4 + 1);
    }
  };

  const nextProducts4 = () => {
    if (currentIndex5 < productChunks33.length - 1) {
      setCurrentIndex5(currentIndex5 + 1);
    }
  };


  



  // Function to navigate to the previous set of products
  const prevProducts = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const prevProducts1 = () => {
    if (currentIndex2 > 0) {
      setCurrentIndex2(currentIndex2 - 1);
    }
  };

  const prevProducts2 = () => {
    if (currentIndex3 > 0) {
      setCurrentIndex3(currentIndex3 - 1);
    }
  };

  const prevProducts3 = () => {
    if (currentIndex4 > 0) {
      setCurrentIndex4(currentIndex4 - 1);
    }
  };

  const prevProducts4 = () => {
    if (currentIndex5 > 0) {
      setCurrentIndex5(currentIndex5 - 1);
    }
  };


 








  return (
    <>
 
{/* slider banner---------------------------------------------------------------- */}

{/* slider banner end-------------------------------------------------------------- */}
        
    
    {/*  offer section image start----------------------------------------------------------------------------  */}

       <div className='container' style={{padding:"2rem", marginTop:"3rem"}}>
        <div className='row'>
          <div className='col-md-6'>
             <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951794578.jpeg' alt='.....'className='img-fluid'></img>
          </div>
          <div className='col-md-6'>
             <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951795181.jpeg' alt='....'className='img-fluid'></img>
          </div>
        </div>

        <div className='row'> 
          <div className='col-md-6'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951795840.jpeg' alt='....'className='img-fluid'></img>

          </div>
          <div className='col-md-6'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951796363.jpeg' alt='...'className='img-fluid'></img>
          </div>

        </div>


       </div>


    {/* offer section image end--------------------------------------------------------------------------------- */}
    
    {/* price range banner start---------------------------------------------------------------------------- */}
   
      {/* 1 slider----------------------------------------------------------------------------------------------- */}

      <div className="container position-relative">
      {/* Left Arrow */}
    <button
      className="btn btn-outline-secondary"
      style={{
        border: "none",
        zIndex: 1,
        height: "50px",
        width: "50px",
        position: "relative",
      }}
      onClick={prevProducts}
      disabled={currentIndex === 0}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
    </button>

    {/* right arrow */}

    <button
    className="btn btn-outline-secondary"
    style={{
      border: "none",
      height: "50px",
      width: "50px",
      float: "right",
      border: "none",
                                 
    }}
    onClick={nextProducts}
    disabled={currentIndex === productChunks.length - 1}
  >
    <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
  </button>


      {/* Products Grid */}
      <div className="row">
        {productChunks[currentIndex].map((product, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card" style={{ width: "100%", height:"100%" }}>
              <img src={product.image} className="card-img-top " alt={product.title} style={{ height: "150px", width:"200px", 
    padding:"20px",alignItems:"center" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px",height:"30px" }}>{product.title}</h5>
                
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
                <div className="" style={{ marginTop: "10px" }}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "red",
      height: "40px",
      borderRadius: "5px",
      width: "14rem",
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

      {/*1 slider second--------------------------------------------------------------------------------------  */}
         
      <div className="container position-relative">
      {/* Left Arrow */}
    <button
      className="btn btn-outline-secondary"
      style={{
        border: "none",
        zIndex: 1,
        height: "50px",
        width: "50px",
        position: "relative",
      }}
      onClick={prevProducts1}
      disabled={currentIndex2 === 0}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
    </button>

    {/* right arrow */}

    <button
    className="btn btn-outline-secondary"
    style={{
      border: "none",
      height: "50px",
      width: "50px",
      float: "right",
      border: "none",
                                 
    }}
    onClick={nextProducts1}
    disabled={currentIndex2 === productChunkss.length - 1}
  >
    <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
  </button>


      {/* Products Grid */}
      <div className="row">
        {productChunkss[currentIndex2].map((products, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card" style={{ width: "100%", height:"100%" }}>
              <img src={products.image} className="card-img-top " alt={products.title} style={{ height: "150px", width:"200px", 
    padding:"20px",alignItems:"center" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px",height:"30px" }}>{products.title}</h5>
                
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
                    ₹ {products.price}
                  </div>
                  <span style={{ fontSize: "14px", color: "green", marginLeft: "30px" }}>100% OFF</span>
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
      width: "14rem",
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
    

      {/* 1 slider second-------------------------------------------------------------------------------------- */}

    {/* price range banner end---------------------------------------------------------------------------------- */}
    
    {/* --------------------------------------------------------------------------------------------------------- */}
     <div className='container' style={{marginTop:"10px"}}>
      <div className='row'>
        <div className='col'>
           <img src='https://media.starquik.com/bannerslider/s/t/starquik_fl_web_halfprice004_1400x400.jpg' alt='...' className='img-fluid'></img>
        </div>
        </div> 
        </div>

        {/* 4 slider------------------------------------------------------------------------------------- */}


        <div className="container position-relative" style={{marginTop:"3rem"}}>
      {/* Left Arrow */}
{/* Left Arrow */}
<button
      className="btn btn-outline-secondary"
      style={{
        border: "none",
        zIndex: 1,
        height: "50px",
        width: "50px",
        position: "relative",
      }}
      onClick={prevProducts}
      disabled={currentIndex === 0}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
    </button>

    {/* right arrow */}

    <button
    className="btn btn-outline-secondary"
    style={{
      border: "none",
      height: "50px",
      width: "50px",
      float: "right",
      border: "none",
                                 
    }}
    onClick={nextProducts}
    disabled={currentIndex === productChunks.length - 1}
  >
    <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
  </button>

      {/* Products Grid */}
      <div className="row">
        {productChunks1[currentIndex].map((product1, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card" style={{ width: "100%", height:"100%" }}>
              <img src={product1.image} className="card-img-top " alt={product1.title} style={{ height: "150px", width:"260px", 
    padding:"20px"  }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px",height:"30px" }}>{product1.title}</h5>
                
             
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
                    ₹ {product1.price}
                  </div>
                  <span style={{ fontSize: "14px", color: "green", marginLeft: "30px" }}>100% OFF</span>
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
      width: "14rem",
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


        {/*  slider 2 second--------------------------------------------------------------------------------- */}

        <div className="container position-relative" style={{marginTop:"3rem"}}>
      {/* Left Arrow */}
{/* Left Arrow */}
<button
      className="btn btn-outline-secondary"
      style={{
        border: "none",
        zIndex: 1,
        height: "50px",
        width: "50px",
        position: "relative",
      }}
      onClick={prevProducts2}
      disabled={currentIndex3 === 0}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
    </button>

    {/* right arrow */}

    <button
    className="btn btn-outline-secondary"
    style={{
      border: "none",
      height: "50px",
      width: "50px",
      float: "right",
      border: "none",
                                 
    }}
    onClick={nextProducts2}
    disabled={currentIndex3 === productChunks11.length - 1}
  >
    <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
  </button>

      {/* Products Grid */}
      <div className="row">
        {Array.isArray(productChunks11[currentIndex3])?
        productChunks11[currentIndex3].map((product11, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card" style={{ width: "100%", height:"100%" }}>
              <img src={product11.image} className="card-img-top " alt={product11.title} style={{ height: "150px", width:"260px", 
    padding:"20px"  }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px",height:"30px" }}>{product11.title}</h5>
                
             
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
                    ₹ {product11.price}
                  </div>
                  <span style={{ fontSize: "14px", color: "green", marginLeft: "30px" }}>100% OFF</span>
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
      width: "14rem",
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
        )):[]}
      </div>

      
    
    </div>
      
        {/* slider2 second end -------------------------------------------------------------------------------*/}
          
        <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1713416531830.jpeg' alt='...'className='img-fluid'></img>
          </div>

          {/* 3 slider------------------------------------------------------------------------------------------ */}


          <div className="container position-relative" style={{marginTop:"3rem"}}>
      {/* Left Arrow */}
     {/* Left Arrow */}
    <button
      className="btn btn-outline-secondary"
      style={{
        border: "none",
        zIndex: 1,
        height: "50px",
        width: "50px",
        position: "relative",
      }}
      onClick={prevProducts}
      disabled={currentIndex === 0}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
    </button>

    {/* right arrow */}

    <button
    className="btn btn-outline-secondary"
    style={{
      border: "none",
      height: "50px",
      width: "50px",
      float: "right",
      border: "none",
                                 
    }}
    onClick={nextProducts}
    disabled={currentIndex === productChunks.length - 1}
  >
    <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
  </button>

      {/* Products Grid */}
      <div className="row">
        {productChunks2[currentIndex].map((product2, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card" style={{ width: "100%", height:"100%" }}>
              <img src={product2.image} className="card-img-top " alt={product2.title} style={{ height: "150px", width:"260px", 
    padding:"20px"  }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px",height:"30px" }}>{product2.title}</h5>
                
                
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
                    ₹ {product2.price}
                  </div>
                  <span style={{ fontSize: "14px", color: "green", marginLeft: "30px" }}>100% OFF</span>
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
      width: "14rem",
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


          {/* ------------------------------------------------------------------------------------------------------ */}

          {/* 3 slider second----------------------------------------------------------------------------------- */}

          <div className="container position-relative" style={{marginTop:"3rem"}}>
      
     {/* Left Arrow */}
    <button
      className="btn btn-outline-secondary"
      style={{
        border: "none",
        zIndex: 1,
        height: "50px",
        width: "50px",
        position: "relative",
      }}
      onClick={prevProducts3}
      disabled={currentIndex4 === 0}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
    </button>

    {/* right arrow */}

    <button
    className="btn btn-outline-secondary"
    style={{
      border: "none",
      height: "50px",
      width: "50px",
      float: "right",
      border: "none",
                                 
    }}
    onClick={nextProducts3}
    disabled={currentIndex4 === productChunks22.length - 1}
  >
    <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
  </button>

      {/* Products Grid */}
      <div className="row">
        {productChunks22[currentIndex4].map((product22, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card" style={{ width: "100%", height:"100%" }}>
              <img src={product22.image} className="card-img-top " alt={product22.title} style={{ height: "150px", width:"260px", 
    padding:"20px"  }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px",height:"30px" }}>{product22.title}</h5>
                
                
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
                    ₹ {product22.price}
                  </div>
                  <span style={{ fontSize: "14px", color: "green", marginLeft: "30px" }}>100% OFF</span>
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
      width: "14rem",
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

          {/* 3 slider second end------------------------------------------------------------------------------- */}

        </div>
        </div>

        <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1730090840815.jpeg' alt='...'className='img-fluid'></img>
          </div>

        </div>
        </div>

        {/* 4 slider------------------------------------------------------------------------------------------------- */}


        <div className="container position-relative" style={{marginTop:"3rem"}}>
     {/* Left Arrow */}
    <button
      className="btn btn-outline-secondary"
      style={{
        border: "none",
        zIndex: 1,
        height: "50px",
        width: "50px",
        position: "relative",
      }}
      onClick={prevProducts}
      disabled={currentIndex === 0}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
    </button>

    {/* right arrow */}

    <button
    className="btn btn-outline-secondary"
    style={{
      border: "none",
      height: "50px",
      width: "50px",
      float: "right",
      border: "none",
                                 
    }}
    onClick={nextProducts}
    disabled={currentIndex === productChunks.length - 1}
  >
    <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
  </button>
      {/* Products Grid */}
      <div className="row">
        {productChunks3[currentIndex].map((product3, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card" style={{ width: "100%", height:"100%" }}>
              <img src={product3.image} className="card-img-top " alt={product3.title} style={{ height: "150px", width:"260px", 
    padding:"20px"  }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px",height:"30px" }}>{product3.title}</h5>
                
                
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
                    ₹ {product3.price}
                  </div>
                  <span style={{ fontSize: "14px", color: "green", marginLeft: "30px" }}>100% OFF</span>
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
      width: "14rem",
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



        {/* ----------------------------------------------------------------------------------------------------- */}

        {/* 4 slider second ------------------------------------------------------------------------------------- */}

        <div className="container position-relative" style={{marginTop:"3rem"}}>
     {/* Left Arrow */}
    <button
      className="btn btn-outline-secondary"
      style={{
        border: "none",
        zIndex: 1,
        height: "50px",
        width: "50px",
        position: "relative",
      }}
      onClick={prevProducts4}
      disabled={currentIndex5 === 0}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
    </button>

    {/* right arrow */}

    <button
    className="btn btn-outline-secondary"
    style={{
      border: "none",
      height: "50px",
      width: "50px",
      float: "right",
      border: "none",
                                 
    }}
    onClick={nextProducts4}
    disabled={currentIndex5 === productChunks33.length - 1}
  >
    <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
  </button>
      {/* Products Grid */}
      <div className="row">
        {productChunks33[currentIndex5].map((product33, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card" style={{ width: "100%", height:"100%" }}>
              <img src={product33.image} className="card-img-top " alt={product33.title} style={{ height: "150px", width:"260px", 
    padding:"20px"  }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px",height:"30px" }}>{product33.title}</h5>
                
                
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
                    ₹ {product33.price}
                  </div>
                  <span style={{ fontSize: "14px", color: "green", marginLeft: "30px" }}>100% OFF</span>
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
      width: "14rem",
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

        


        {/* 4 slider second second--------------------------------------------------------------------------------*/}


        <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1729488319339.png' alt='...'className='img-fluid'></img>
          </div>
        </div>
        </div>

        <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1724841840561.jpeg' alt='...'className='img-fluid'></img>
          </div>
        </div>
        </div>
   
    
    {/* ---------------------------------------------------------------------------------------------------------- */}
    
    
    </>
  )
}

export default Banner