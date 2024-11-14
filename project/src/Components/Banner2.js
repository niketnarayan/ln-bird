import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaSearch, FaBoxes, FaGift, FaMoneyBillWave, FaTruck, FaSyncAlt } from 'react-icons/fa';
import './Banner2.css';
import kiranawala from "../Components/Assests/mr. Kirana logo.png";

function Banner2() {
  return (
    <>
    {/* shopping benifts----------------------------------------------------------------------------------------- */}
    

    <div className='container lots-container'>
  <div className='membership-section'>
    <div className='membership-image'>
      <img src='https://www.lotswholesale.com/vendor/image/Icons/card-02.png' alt='LOTS Membership Card' />
    </div>
    <div className="membership-info">
      <span style={{fontSize:"25px", fontWeight:"bold"}}>Already a LOTS Member?</span>
      <div>
        <p>Activate your Account with your Registered LOTS Membership now</p>
      </div>
      <button className="generate-password-btn">GENERATE PASSWORD</button>
      <p className="new-member">
        New to LOTS? <a href="/become-a-member">Become a Member</a>
      </p>
    </div>
  </div>

  <div className="shopping-benefits">
    <h2 style={{color:"white"}}>Shopping Benefits</h2>
    <div className="benefits-list">
      <div className="benefit-item">
        <div className="icon-circle">
          <FaSearch size={24} />
        </div>
        <p>Easy Product Search</p>
      </div>
      <div className="benefit-item">
        <div className="icon-circle">
          <FaBoxes size={24} />
        </div>
        <p>Slab Pricing Display</p>
      </div>
      <div className="benefit-item">
        <div className="icon-circle">
          <FaGift size={24} />
        </div>
        <p>Exciting Deals & Offers</p>
      </div>
      <div className="benefit-item">
        <div className="icon-circle">
          <FaMoneyBillWave size={24} />
        </div>
        <p>Cash on Delivery</p>
      </div>
      <div className="benefit-item">
        <div className="icon-circle">
          <FaTruck size={24} />
        </div>
        <p>Delivery within 48 Hours</p>
      </div>
      <div className="benefit-item">
        <div className="icon-circle">
          <FaSyncAlt size={24} />
        </div>
        <p>Real-Time Order Tracking</p>
      </div>
    </div>
  </div>
</div>




    {/* shopping benifts end--------------------------------------------------------------------------------------- */}


    {/* why choose start----------------------------------------------------------------------------------- */}


    <div className="" style={{ backgroundColor: "#fff8f0" }}>
  <div className="text-center">
    <h2>
      Why Choose <span className="text-warning">KiranaWala</span>
    </h2>
    <hr
      className="mx-auto"
      style={{ width: 200, borderTop: "2px solid #ff6600" }}
    />
  </div>
  <div className="row text-center mt-4">
    {/* Big Savings */}
    <div className="col-md-4">
      <div className="icon">
        <i className="bi bi-piggy-bank-fill fs-1 text-warning" />
      </div>
      <h5 className="mt-3">Big Savings</h5>
      <p className="text-muted">On your Bill</p>
    </div>
    {/* TATA Trust & Quality */}
    <div className="col-md-4">
      <div className="icon">
        <img
          src={kiranawala}
          alt="StarQuik Logo"
          className="mb-2"
          style={{ width: 100 }}
        />
      </div>
      <h5 className="mt-3">TATA Trust &amp; Quality</h5>
      <p className="text-muted">A lifetime promise</p>
    </div>
    {/* Same Day Delivery */}
    <div className="col-md-4">
      <div className="icon">
        <i className="bi bi-truck fs-1 text-warning" />
      </div>
      <h5 className="mt-3">Same Day Delivery</h5>
      <p className="text-muted">At your doorstep</p>
    </div>
  </div>
</div>



    {/* why choose end------------------------------------------------------------------------------------- */}
    
    
    
    
    </>
  )
}

export default Banner2