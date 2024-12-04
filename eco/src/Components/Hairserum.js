import React from 'react'
import Header from './Header'
import Footer from './footer'

function Hairserum() {
  return (
    <div>

        <div>
            <Header/>
        </div>

<div className="container mt-5">
<div className="row" style={{marginTop:"12rem"}}>
{/* Product Image Section */}
<div className="col-md-6 text-center">
<img
src="https://www.mcaffeine.com/cdn/shop/files/card_1_9dabaa46-daa8-4ff4-b2ba-9aae5c561d52.jpg?v=1717154284" // Replace with actual image URL
alt="Product"
className="img-fluid" style={{marginBottom:"10rem",maxWidth:"100%",height:"380px"}}
/>
</div>

{/* Product Details Section */}
<div className="col-md-6">
<h3>Hair Serum  </h3>
<p>Hair Serum For 100ml    </p>
<div className="mb-3">
<span className="text-danger fw-bold fs-4">₹583</span>{" "}
<span className="text-muted text-decoration-line-through">₹1599</span>{" "}
<span className="badge bg-success">63% off</span>
</div>

{/* Offers Section */}
<div className="mb-3">
<h6>Available Offers:</h6>
<ul>
<li>5% Unlimited Cashback on Flipkart Axis Bank Card</li>
<li>10% off on HDFC Bank Credit Card EMI</li>
<li>10 days return policy</li>
</ul>
</div>


{/* Action Buttons */}
<div className="d-flex gap-2" >
<button className="btn btn-warning">Add to Cart</button>
<button className="btn btn-danger">Buy Now</button>
</div>
{/* ------------------------------------------------------------------------------------- */}

<div className="accordion mt-5" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button text-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="false"
        aria-controls="collapseOne"
      >
        Product Specification
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse "
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
  <h4 className="fw-bold mb-3">Hair Serum    </h4>
  <p>
  Transform your hair with our Anti-Frizz Hair Serum, designed to eliminate frizz and leave your hair silky smooth, shiny, and perfectly controlled. Whether you’re dealing with humidity, dryness, or unruly strands, our lightweight serum creates a protective barrier that tames frizz, smooths flyaways, and enhances the natural shine of your hair. With just a few drops, you’ll experience the ultimate frizz-free finish, ensuring your hair stays sleek and manageable all day long.
  </p>

  <h5 className="mt-4">Key Benefits:</h5>
  <ul className="list-group list-group-flush mt-3">
    <li className="list-group-item">
      <strong>Frizz Control:   </strong>  Smoothens and tames frizzy hair, leaving it looking sleek and polished.
    </li>
    <li className="list-group-item">
      <strong>Adds Shine & Softness:    </strong>  Instantly boosts hair’s natural shine and softness without weighing it down.
    </li>
    <li className="list-group-item">
      <strong>Humidity Protection:   </strong> Forms a protective layer to prevent hair from puffing up or becoming unmanageable in humid conditions.
    </li>
    <li className="list-group-item">
      <strong>Lightweight Formula:  </strong> Non-greasy and non-oily, making it ideal for all hair types, even fine or thin hair.
    </li>
    <li className="list-group-item">
      <strong>Heat Protection:   </strong> Shields hair from heat styling tools, preventing further damage while enhancing smoothness.
    </li>
    <li className="list-group-item">
      <strong>Nourishes & Conditions:   </strong> Packed with vitamins and oils to nourish and hydrate your hair, keeping it soft, smooth, and frizz-free.
    </li>
  </ul>
</div>

    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed text-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Product Feacture
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
<div
  id="collapseThree"
  className="accordion-collapse collapse"
  data-bs-parent="#accordionExample"
>
  <div className="accordion-body">
    <div className="features-container">
        <div style={{display:"flex", gap:"9rem"}}>
      <div className="feature-item">
        <i className="fa-solid fa-globe feature-icon"></i>
        <span>On Time Delivery</span>
      </div>
      <div className="feature-item">
        <i className="fa-brands fa-product-hunt feature-icon"></i>
        <span>Easily Return</span>
      </div>
      </div>
      <br/>
      <div style={{display:"flex", gap:"6rem"}}>
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

{/* ----------------------------------------------------------------------------------- */}
</div>
</div>
</div>


<Footer />


    </div>
  )
}

export default Hairserum