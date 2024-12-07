import React from "react";
import { useCart } from './cartcontext'
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Footer from "./footer";
function Home1() {

const {cart,setcart}=useCart()

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
        const isProductInCart = cart.some((item) => item.name === product.name);
      
        if (!isProductInCart) {
          // Add the product to the cart if it's not already present
          setcart([...cart, product]);
        } else {
          alert(`${product.name} is already in the cart.`);
        }
      };
    



    //   const handleprouctadd = (product) => {
    //     console.log('Adding product to cart:', product);
    //     setcart([...cart, product]);
    //   };
    // console.log(cart);
    // console.log(cart.length);


  return (
    <div>
        <Header/>
        <div className="container d-flex" style={{ marginTop: "10rem" }}>
        {/* Sidebar */}
        <div
  style={{
    width: "250px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRight: "1px solid #ddd",
    height: "60vh", // Correctly sets the height to the full viewport
    display: "flex",
    flexDirection: "column", // Ensures the list items stack vertically
  }}
>
  <h5 style={{ fontWeight: "bold", color: "#006400",textAlign:"center" }}>PRODUCTS</h5>
  <ul style={{listStyleType:"none",lineHeight:"40px",cursor:"pointer",textDecoration:"none"}}>
    <li ><Link to={'/vitamincfacewash'} style={{textDecoration:"none",color:"black"}}>Vitamin C Face Wash</Link></li>
    <li> <Link to={'/antiacnefacewash'} style={{textDecoration:"none",color:"black"}}>Anti-Acne Face Wash </Link></li>
    <li> <Link to={'/goldscrubfacewash'}style={{textDecoration:"none",color:"black"}}>Gold Scrub Face Wash </Link></li>
    <li> <Link to={'/antihairfallshampoo'} style={{textDecoration:"none",color:"black"}} >Anti Hair fall Shampoo</Link></li>
    <li><Link to={'/Rosemaryhairoil'} style={{textDecoration:"none",color:"black"}}>Rosemary hair oil </Link></li>
    <li><Link to={'/hairserum'} style={{textDecoration:"none",color:"black"}}>Hair Serum  </Link></li>
    <li><Link to={'/glutasoap'} style={{textDecoration:"none",color:"black"}}>Gluta Soap </Link></li>
    
  </ul>
     
      
      
   
</div>



        {/* Main Carousel Section */}
        <div style={{ flex: 1, padding: "20px" }}>
          {/* Carousel */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "10px",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src="https://img.freepik.com/free-psd/aloe-vera-natural-cosmetics-banner-template-design_23-2148951958.jpg?t=st=1732791814~exp=1732795414~hmac=8ae9d831e9a2e4f306b59f7d22839838137cf57efb5d27c6567d64bdd798a707&w=826"
                    alt="Product 1"
                    style={{
                      Height: "100px",
                      maxWidth: "100%",
                     
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                
                </div>
              </div>
              {/* Slide 2 */}
              <div className="carousel-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "10px",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src="https://img.freepik.com/free-psd/aloe-vera-natural-cosmetics-banner-template-design_23-2148951958.jpg?t=st=1732791814~exp=1732795414~hmac=8ae9d831e9a2e4f306b59f7d22839838137cf57efb5d27c6567d64bdd798a707&w=826"
                    alt="Product 2"
                    style={{
                      Height: "100px",
                      maxWidth: "100%",
                      
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  />
            
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden"style={{color:"black"}} >Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
{/* banner main end--------------------------------------------------------------------------------------------- */}

{/* product cart section------------------------------------------------------------------------------------- */}

<div className="grocery-container">
      <h2 className="grocery-heading">Our Products</h2>
      <div className="grocery-row">
        {products.map((product) => (
          <div key={product.id} className="grocery-card">
            <img
              src={product.image}
              alt={product.name}
              className="grocery-card-image"
            />
            <span className="grocery-card-name">{product.name}</span>
            <p className="grocery-card-price" >MRP:₹{product.price}</p>
            <button onClick={()=>handleprouctadd(product)} className="grocery-card-button" style={{cursor:"pointer"}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>





{/* product cart section end---------------------------------------------------------------------------------- */}

{/* banner image------------------------------------------------------------------------------------------------ */}

<div className="container">
  <div className="row">
    <div className="col">
      <img src="https://www.reneecosmetics.in/cdn/shop/files/1000693230.jpg?v=1732552425&width=1500" alt="banner-image" className="img-fluid" style={{marginTop:"3rem",marginBottom:"3rem"}}></img>

    </div>
  </div>
</div>
{/* banner image end---------------------------------------------------------------------------------------------- */}

{/* 2product cart------------------------------------------------------------------------------------------------ */}

<div className="grocery-container">
      <div className="grocery-row">
        {products1.map((product) => (
          <div key={product.id} className="grocery-card">
            <img
              src={product.image}
              alt={product.name}
              className="grocery-card-image"
            />
            <span className="grocery-card-name">{product.name}</span>
            <p className="grocery-card-price" >MRP:₹{product.price}</p>
            <button onClick={() => handleprouctadd(product)} className="grocery-card-button" style={{cursor:"pointer"}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>


{/* 2 product cart end-------------------------------------------------------------------------------------------- */}

{/* product banner2 start----------------------------------------------------------------------------------------- */}

<div className="container">
  <div className="row">
    <div className="col">
      <img src="https://images-static.nykaa.com/uploads/fb6935ac-7488-42d2-9d82-ce95f5332dec.jpg?tr=cm-pad_resize,w-1200" alt="banner-image" className="img-fluid" style={{marginTop:"3rem",marginBottom:"3rem"}}></img>

    </div>
  </div>
</div>

{/* product banner2 end------------------------------------------------------------------------------------------ */}

{/* product 3 cart----------------------------------------------------------------------------------------------- */}

<div className="grocery-container">
      <h2 className="grocery-heading">Combo Products</h2>
      <div className="grocery-row">
        {products2.map((product) => (
          <div key={product.id} className="grocery-card">
            <img
              src={product.image}
              alt={product.name}
              className="grocery-card-image"
            />
            <span className="grocery-card-name">{product.name}</span>
            <p className="grocery-card-price" >MRP:₹{product.price}</p>
            <button onClick={()=>handleprouctadd(product)} className="grocery-card-button" style={{cursor:"pointer"}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
{/* product 3 cart end--------------------------------------------------------------------------------------------- */}

{/* product banner 3-------------------------------------------------------------------------------------------- */}
<div className="container">
  <div className="row">
    <div className="col">
      <img src="https://images-static.nykaa.com/uploads/1d08680f-7dc3-4c4b-a3a6-c129cd89a952.jpg?tr=cm-pad_resize,w-1200" alt="banner-image" className="img-fluid" style={{marginTop:"3rem",marginBottom:"3rem"}}></img>

    </div>
  </div>
</div>

{/* product banner 3 end---------------------------------------------------------------------------------------- */}

{/* product cart 4 start---------------------------------------------------------------------------------------- */}

<div className="grocery-container">
      <div className="grocery-row">
        {products3.map((product) => (
          <div key={product.id} className="grocery-card">
            <img
              src={product.image}
              alt={product.name}
              className="grocery-card-image"
            />
            <span className="grocery-card-name">{product.name}</span>
            <p className="grocery-card-price" >MRP:₹{product.price}</p>
            <button onClick={()=>handleprouctadd(product)} className="grocery-card-button" style={{cursor:"pointer"}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>

{/* product cart 4 end------------------------------------------------------------------------------------------- */}


<Footer/>


    </div>
  )
}

export default Home1