import React from 'react'
import Header from './Header'
import Footer from './footer'

function VitamincFacewash() {
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
src="https://www.richfeelnaturals.com/cdn/shop/files/vitamin-c-face-wash1_a2da8366-3d65-4193-b1f9-94a5b965206a.jpg?v=1718106105" // Replace with actual image URL
alt="Product"
className="img-fluid" style={{marginBottom:"10rem"}}
/>
</div>

{/* Product Details Section */}
<div className="col-md-6">
<h3>Vitamin C Face Wash</h3>
<p>(Brightens & Evens Skin Tone),100gm</p>
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
  <h4 className="fw-bold mb-3">Vitamin C Face Wash</h4>
  <p>
    Refresh and revitalize your skin with our Vitamin C Face Wash, a powerful yet gentle cleanser 
    designed to give your skin a healthy, glowing complexion. Enriched with the goodness of Vitamin C, 
    this daily face wash helps brighten and even out skin tone while protecting your skin from harmful 
    environmental stressors.
  </p>

  <h5 className="mt-4">Key Benefits:</h5>
  <ul className="list-group list-group-flush mt-3">
    <li className="list-group-item">
      <strong>Brightens & Evens Skin Tone:</strong> The antioxidant properties of Vitamin C help 
      reduce dullness, promoting a radiant and youthful glow. Regular use can also help lighten 
      dark spots and pigmentation for a more even complexion.
    </li>
    <li className="list-group-item">
      <strong>Fights Free Radical Damage:</strong> Vitamin C’s powerful antioxidant properties neutralize 
      harmful free radicals, preventing premature signs of aging and skin damage caused by pollution and UV exposure.
    </li>
    <li className="list-group-item">
      <strong>Deep Cleansing:</strong> Effectively removes dirt, excess oil, and impurities without 
      stripping your skin's natural moisture. Perfect for everyday use to cleanse, refresh, and rejuvenate your skin.
    </li>
    <li className="list-group-item">
      <strong>Hydrates & Nourishes:</strong> Packed with Vitamin C, this face wash hydrates and nurtures 
      your skin, leaving it feeling smooth, soft, and deeply refreshed after every wash.
    </li>
    <li className="list-group-item">
      <strong>Suitable for All Skin Types:</strong> Whether you have dry, oily, combination, or sensitive skin, 
      this Vitamin C face wash is gentle enough for daily use and helps balance your skin’s natural pH.
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
     <div className="accordion-body">
  <div className="features-container">
    <div className="feature-item">
      <i className="fa-solid fa-globe feature-icon"></i>
      <span>On Time Delivery</span>
    </div>
    <div className="feature-item">
      <i className="fa-brands fa-product-hunt feature-icon"></i>
      <span>Easily Return</span>
    </div>
    <div className="feature-item">
      <i className="fa-regular fa-clock feature-icon"></i>
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

{/* ----------------------------------------------------------------------------------- */}
</div>
</div>
</div>



<Footer />
</div>
)
}

export default VitamincFacewash