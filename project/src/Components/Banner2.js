import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaSearch, FaBoxes, FaGift, FaMoneyBillWave, FaTruck, FaSyncAlt } from 'react-icons/fa';
import './Banner2.css';

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


    <div className="" style={{ backgroundColor: "#fff4e5" }}>
  <div className="text-center">
    <h2>
      Why Choose <span className="text-warning">StarQuik</span>
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
          src="data:image/png;base64,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"
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