import React from 'react'
import Header from './Header'
import Footer from './footer'

function Antihairfallshampoo() {
  return (
    <div>

      <div>
        <Header />
      </div>

<div className="container mt-5">
<div className="row" style={{marginTop:"12rem"}}>
{/* Product Image Section */}
<div className="col-md-6 text-center">
<img
src="https://www.ayouthveda.com/cdn/shop/files/Antihairfallshampooecommerce-03_1800x1800.jpg?v=1686936228" // Replace with actual image URL
alt="Product"
className="img-fluid" style={{marginBottom:"10rem",maxWidth:"100%",height:"380px"}}
/>
</div>

{/* Product Details Section */}
<div className="col-md-6">
<h3>Anti Hair fall Shampoo </h3>
<p>Anti Hair fall Shampoo 200ml  </p>
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
  <h4 className="fw-bold mb-3">Anti Hair fall Shampoo  </h4>
  <p>
  Our Anti-Hair Fall Shampoo is scientifically formulated to help reduce hair thinning and breakage, restoring your hair’s strength and vitality. Infused with a powerful blend of natural ingredients, this shampoo gently cleanses while nourishing your scalp and hair follicles. Whether you’re experiencing seasonal shedding or long-term thinning, this shampoo targets the root cause of hair fall, promoting healthier and thicker hair with regular use.
  </p>

  <h5 className="mt-4">Key Benefits:</h5>
  <ul className="list-group list-group-flush mt-3">
    <li className="list-group-item">
      <strong>Reduces Hair Fall </strong> The nourishing formula helps to strengthen hair from root to tip, minimizing breakage and thinning.
    </li>
    <li className="list-group-item">
      <strong>Promotes Hair Growth:  </strong> : Enriched with essential vitamins and natural botanicals that stimulate healthy scalp circulation, encouraging hair growth.
    </li>
    <li className="list-group-item">
      <strong>Deep Cleansing: </strong>Removes excess oil, dirt, and buildup without stripping hair of its natural moisture.
    </li>
    <li className="list-group-item">
      <strong>Strengthens and Fortifies: </strong>: The blend of proteins and nutrients works to repair and protect hair, improving resilience.
    </li>
    <li className="list-group-item">
      <strong>Suitable for All Hair Types:  </strong> : Whether your hair is curly, straight, thick, or fine, this shampoo is gentle yet effective for everyone.
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

export default Antihairfallshampoo