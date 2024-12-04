import React from 'react'
import "./Antiacnefacewash.css";
import Header from './Header';
import Footer from './footer';

function Antiacnefacewash() {
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
src="https://rukminim2.flixcart.com/image/850/1000/xif0q/toner/1/j/0/100-vitamin-c-face-toner-brightening-even-toned-glowing-skin-20-original-imagykjh7vhazh5y.jpeg?q=90&crop=false" // Replace with actual image URL
alt="Product"
className="img-fluid" style={{marginBottom:"10rem",maxWidth:"100%",height:"380px"}}
/>
</div>

{/* Product Details Section */}
<div className="col-md-6">
<h3>Anti-Acne Face Wash </h3>
<p>Clear, Blemish-Free Skin 100ml </p>
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
  <h4 className="fw-bold mb-3">Anti-Acne Face Wash </h4>
  <h5>Say Goodbye to Breakouts with Our Anti-Acne Face Wash</h5>
  <p>
  Fight acne and blemishes head-on with our Anti-Acne Face Wash, specifically formulated to target acne-causing bacteria, reduce inflammation, and cleanse your skin deeply. Whether you’re dealing with occasional breakouts or persistent acne, this powerful yet gentle cleanser is your first step toward clearer, healthier-looking skin.
  </p>

  <h5 className="mt-4">Key Benefits:</h5>
  <ul className="list-group list-group-flush mt-3">
    <li className="list-group-item">
      <strong>Fights Acne & Breakouts: </strong> Formulated with proven ingredients like salicylic acid, this face wash penetrates deep into pores, unclogging them and reducing acne-causing bacteria. It helps treat and prevent acne while promoting a smoother, blemish-free complexion.
    </li>
    <li className="list-group-item">
      <strong>	Reduces Inflammation: </strong> The calming formula helps reduce redness and inflammation, making it ideal for sensitive or irritated skin. Say goodbye to swollen, inflamed pimples and hello to a more even and calm complexion.
    </li>
    <li className="list-group-item">
      <strong>Deep Cleansing</strong> Removes excess oil, dirt, and impurities without over-drying your skin. The face wash controls oil production, keeping your skin fresh and clear without causing dryness or irritation.
    </li>
    <li className="list-group-item">
      <strong>Prevents Future Breakouts: </strong> Regular use helps to prevent new acne from forming by keeping pores clean and balancing skin oil levels, ensuring that your skin stays clear and smooth over time.
    </li>
    <li className="list-group-item">
      <strong>Suitable for All Skin Types: </strong> Whether you have oily, combination, or sensitive skin, our Anti-Acne Face Wash is gentle enough for everyday use. It helps balance your skin without causing additional irritation or dryness.
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

export default Antiacnefacewash