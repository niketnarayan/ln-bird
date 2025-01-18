import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Bread() {
  return (
    <>
    <div>
<Navbar/>
</div>

{/* ------------------------------------------------------------------------------------------------------------ */}

<div className="container-fluid">
        <div className="row py-4" style={{ margin: "0 5rem" }}>
          {/* Sidebar Filters */}
          <div className="col-md-3 filter-sidebar">
            <h5>Product Categories</h5>
            <div className="list-group mb-3">
              <a href="#" className="list-group-item list-group-item-action">
                Foodgain,Oil & masala
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Home Care
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Beverages
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Cuts &amp; Sprouts
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Exotic Fruits &amp; Veggies
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Frozen
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Home & Kitchen
              </a>
            </div>
            <h5>Filter by Price</h5>
            <input
              type="range"
              className="form-range mb-3"
              min={0}
              max={20}
              id="priceRange"
            />
            <p>Price: $0 - $20</p>
            <h5>Product Status</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="inStock"
              />
              <label className="form-check-label" htmlFor="inStock">
                In Stock
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="onSale" />
              <label className="form-check-label" htmlFor="onSale">
                On Sale
              </label>
            </div>
            <h5>Brands</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="brandOreo"
              />
              <label className="form-check-label" htmlFor="brandOreo">
                Oreo (1)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="brandQuaker"
              />
              <label className="form-check-label" htmlFor="brandQuaker">
                Quaker (1)
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="brandWelchs"
              />
              <label className="form-check-label" htmlFor="brandWelchs">
                Welch's (1)
              </label>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-md-9">
            {/* Top Banner */}
            <div className="mb-4">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                className="img-fluid rounded"
                alt="Organic Meals Banner"
              />
              <h2 className="mt-2">
                Organic Meals Prepared - Delivered to your Home
              </h2>
              <p>Fully prepared &amp; delivered nationwide.</p>
            </div>
            {/* Product Grid */}
            <div className="row" >
              {/* Product Card 1 */}
              <div className="col-md-3 mb-3" >
                <div
                  className="product-card position-relative"
                  style={{
                    width: "100%",
                    border: "none", // Remove background color
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    padding: "15px",
                    borderRadius: "10px",
                    textAlign: "center", // Center content in the card
                    height:"25rem",
                  }}
                >
                  <span
                    className="badge-discount position-absolute top-0 start-0 bg-info text-white p-1"
                    style={{ zIndex: 1 }}
                  >
                    29% OFF
                  </span>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg"
                    className="img-fluid mb-3"
                    alt="Product Image"
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <h5 className="mb-2">Fresh Organic Broccoli Crowns</h5>
                  <p>1 kg | In Stock</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span>
                    <strong>₹4.85</strong>   <s className="text-muted">₹6.75</s> 
                    </span>
                  </div>
                  <button
                    className="btn btn-outline btn-sm ms-2"
                    style={{
                       width: "100%", // Full width
                      marginTop: "5px",
                      borderRadius: "10px",
                      backgroundColor:"#3D215D",
                      color:"white",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="col-md-3 mb-3">
                <div
                  className="product-card position-relative"
                  style={{
                    width: "100%",
                    border: "none",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    padding: "15px",
                    borderRadius: "10px",
                    textAlign: "center",
                    height:"25rem",
                  }}
                >
                  <span
                    className="badge-discount position-absolute top-0 start-0 bg-info text-white p-1"
                    style={{ zIndex: 1 }}
                  >
                    29% OFF
                  </span>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg"
                    className="img-fluid mb-3"
                    alt="Product Image"
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <h5 className="mb-2">Fresh Organic Broccoli Crowns</h5>
                  <p>1 kg | In Stock</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span>
                    <strong>₹4.85</strong> <s className="text-muted">₹6.75</s> 
                    </span>
                  </div>
                  <button
                    className="btn btn-outline btn-sm ms-2"
                    style={{
                      width: "100%", // Full width
                      marginTop: "5px",
                      borderRadius: "10px",
                      backgroundColor:"#3D215D",
                      color:"white",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* Additional Product Cards */}
              <div className="col-md-3 mb-3">
                <div
                  className="product-card position-relative"
                  style={{
                    width: "100%",
                    border: "none",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    padding: "15px",
                    borderRadius: "10px",
                    textAlign: "center",
                    height:"25rem",
                  }}
                >
                  <span
                    className="badge-discount position-absolute top-0 start-0 bg-info text-white p-1"
                    style={{ zIndex: 1 }}
                  >
                    29% OFF
                  </span>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg"
                    className="img-fluid mb-3"
                    alt="Product Image"
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <h5 className="mb-2">Fresh Organic Broccoli Crowns</h5>
                  <p>1 kg | In Stock</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span>
                      <s className="text-muted">$6.75</s> <strong>$4.85</strong>
                    </span>
                  </div>
                  <button
                    className="btn btn-outline btn-sm ms-2"
                    style={{
                      width: "100%", // Full width
                      marginTop: "5px",
                      borderRadius: "10px",
                      backgroundColor:"#3D215D",
                      color:"white",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* Repeat for other products */}
              <div className="col-md-3 mb-3">
                <div
                  className="product-card position-relative"
                  style={{
                    width: "100%",
                    border: "none",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    padding: "15px",
                    borderRadius: "10px",
                    textAlign: "center",
                    height:"25rem",
                  }}
                >
                  <span
                    className="badge-discount position-absolute top-0 start-0 bg-info text-white p-1"
                    style={{ zIndex: 1 }}
                  >
                    29% OFF
                  </span>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg"
                    className="img-fluid mb-3"
                    alt="Product Image"
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <h5 className="mb-2">Fresh Organic Broccoli Crowns</h5>
                  <p>1 kg | In Stock</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span>
                    <strong>₹4.85</strong>  <s className="text-muted">₹6.75</s> 
                    </span>
                  </div>
                  <button
                    className="btn btn-outline btn-sm ms-2"
                    style={{
                      width: "100%", // Full width
                      marginTop: "5px",
                      borderRadius: "10px",
                      backgroundColor:"#3D215D",
                      color:"white",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* ------------------------- */}
            </div>
          </div>
        </div>
      </div>


{/* ------------------------------------------------------------------------------------------------------------- */}

<Footer/>

    </>
  )
}

export default Bread