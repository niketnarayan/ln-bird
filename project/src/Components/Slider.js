import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Slider.css'; // Create a CSS file for custom styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaSearch, FaBoxes, FaGift, FaMoneyBillWave, FaTruck, FaSyncAlt } from 'react-icons/fa';

function Slider() {
  return (
    <>
    {/* Carousel start------------------------------------------------------------------------------------------ */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{marginTop:"10rem"}}>
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          {/* First Carousel Item */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img
                    className="d-block w-100 slider-img"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1729447703_Festive_Womens_Wear.jpg?im=Resize=(768,448)"
                    alt="First slide"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    className="d-block w-100 slider-img"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1729362170_iPhone_13.jpg?im=Resize=(768,448)"
                    alt="Second slide"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    className="d-block w-100 slider-img"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1729619744_Kaju_Barfi.jpg?im=Resize=(768,448)"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Carousel Item */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img
                    className="d-block w-100 slider-img"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1729447864_furnishing.jpg?im=Resize=(768,448)"
                    alt="Fourth slide"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    className="d-block w-100 slider-img"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1729362170_iPhone_13.jpg?im=Resize=(768,448)"
                    alt="Fifth slide"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    className="d-block w-100 slider-img"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1729247149_Kitchen_Dining_Upgrade.jpg?im=Resize=(768,448)"
                    alt="Sixth slide"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Third Carousel Item */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img
                    className="d-block w-100 slider-img"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1729589353_sweets.jpg?im=Resize=(768,448)"
                    alt="Seventh slide"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    className="d-block w-100 slider-img"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1729228829_Household__Cleaning.jpg?im=Resize=(768,448)"
                    alt="Eighth slide"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    className="d-block w-100 slider-img"
                    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1729511377_DiwaliGifting_.jpg?im=Resize=(768,448)"
                    alt="Ninth slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Previous and Next Controls */}
        <button className="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-control" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel end-------------------------------------------------------------------------------------------------- */}

      {/* content start----------------------------------------------------------------------------------------- */}

         {/* <div className='container' style={{marginTop:"30px"}}>
            <div className='row'>
                <div className='col-md-12'>
                    <span style={{fontSize:"40px",fontWeight:"bold", marginLeft:"35px"}}>LNBird Wholesale - B2B Online Shopping Marketplace</span>

                </div>

            </div>

         </div> */}

      {/* content end-------------------------------------------------------------------------------------------- */}

      {/* banner start------------------------------------------------------------------------------------------- */}

      {/* <div className='container lots-container'>
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
    <h2>Shopping Benefits</h2>
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
</div> */}


      


      {/* banner end---------------------------------------------------------------------------------------------- */}
    </>
  );
}

export default Slider;
