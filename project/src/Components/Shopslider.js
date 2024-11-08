import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Shopslider.css';

function Shopslider() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <span style={{fontSize: "30px", fontWeight: "bold"}}>SHOP BY CATEGORIES</span>
          </div>
        </div>
      </div>
      {/* slider------------------------------------------------------------------------------------------------- */}
      <div className="container mt-5">
        <div id="categoryCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <div className="row justify-content-center">
                {/* Card 1 */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1629264791686.jpeg"
                      className="card-img-top"
                      alt="Snacks & Namkeen"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px",fontWeight:"bold"}}> Namkeen</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1658218389245.jpeg"
                      className="card-img-top"
                      alt="Tea, Coffee & Cold Drinks"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px",fontWeight:"bold"}}>Tea & Coffee </span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1658219469374.jpeg"
                      className="card-img-top"
                      alt="Meat, Fish & Egg"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px",fontWeight:"bold"}}>Meat, Fish & Egg</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1694589516028.jpeg"
                      className="card-img-top"
                      alt="Bakery & Cakes"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px",fontWeight:"bold"}}>Bakery & Cakes</span>
                    </div>
                  </div>
                </div>

                
                {/* Card 5 */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1694589516028.jpeg"
                      className="card-img-top"
                      alt="Bakery & Cakes"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px", fontWeight:"bold"}}>Bakery & Cakes</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item">
              <div className="row justify-content-center">
                {/* Card 6 */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1629264099034.jpeg"
                      className="card-img-top"
                      alt="Frozen Foods"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px",fontWeight:"bold"}}>Frozen Foods</span>
                    </div>
                  </div>
                </div>

                {/* Card 7 */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1629264099034.jpeg"
                      className="card-img-top"
                      alt="Grocery"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px",fontWeight:"bold"}}>Grocery</span>
                    </div>
                  </div>
                </div>

                {/* Card 8 */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1658218389245.jpeg"
                      className="card-img-top"
                      alt="Beverages"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px",fontWeight:"bold"}}>Beverages</span>
                    </div>
                  </div>
                </div>

                {/* Card 9 */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1658218389245.jpeg"
                      className="card-img-top"
                      alt="Beverages"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px",fontWeight:"bold"}}>Beverages</span>
                    </div>
                  </div>
                </div>

                  {/* Card 10 */}
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="card text-center mx-2 card-custom">
                    <img
                      src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1629264099034.jpeg"
                      className="card-img-top"
                      alt="Frozen Foods"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{fontSize:"13px",fontWeight:"bold"}}>Frozen Foods</span>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev custom-prev"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next custom-next"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* slider-end---------------------------------------------------------------------------------------------- */}
    </>
  );
}

export default Shopslider;
