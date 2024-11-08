import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Grocery() {
  return (
    <>
   <div>
    <Navbar/>
   </div>
   {/* ---------------------------------------------------------------------------------------------------------- */}

   <div className="container-fluid">
        <div className="row py-4">
          {/* Sidebar Filters */}
          <div className="col-md-3 filter-sidebar">
            <h5>Product Categories</h5>
            <div className="list-group mb-3">
              <a href="#" className="list-group-item list-group-item-action">
                Herbs &amp; Seasonings
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Packaged Produce
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Party Trays
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Cuts &amp; Sprouts
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Exotic Fruits &amp; Veggies
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Fresh Fruits
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Fresh Vegetables
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
            <div className="row">
              {/* Product Card 1 */}
              <div
                className="col-md-3 mb-3"
                style={{ border: "1px solid black" }}
              >
                <div className="product-card position-relative p-2">
                  <span className="badge-discount position-absolute top-0 start-0 bg-info text-white p-1">
                    29% OFF
                  </span>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg"
                    className="img-fluid mb-3"
                    alt="Product Image"
                  />
                  <h5 className="mb-2">Fresh Organic Broccoli Crowns</h5>
                  <p>1 kg | In Stock</p>
                  {/* Adjusted the layout */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span>
                      <s className="text-muted">$6.75</s> <strong>$4.85</strong>
                    </span>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-sm ms-2"
                    style={{
                      width: "100%", // Increase width to full container width
                      display: "block", // Ensures it takes up the full width
                      textAlign: "center", // Centers text inside the button
                      marginTop: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div
                className="col-md-3 mb-3"
                style={{ border: "1px solid black" }}
              >
                <div className="product-card position-relative p-2">
                  <span className="badge-discount position-absolute top-0 start-0 bg-info text-white p-1">
                    29% OFF
                  </span>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg"
                    className="img-fluid mb-3"
                    alt="Product Image"
                  />
                  <h5 className="mb-2">Fresh Organic Broccoli Crowns</h5>
                  <p>1 kg | In Stock</p>
                  {/* Adjusted the layout */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span>
                      <s className="text-muted">$6.75</s> <strong>$4.85</strong>
                    </span>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-sm ms-2"
                    style={{
                      width: "100%", // Increase width to full container width
                      display: "block", // Ensures it takes up the full width
                      textAlign: "center", // Centers text inside the button
                      marginTop: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* Product Card 3 */}
              <div
                className="col-md-3 mb-3"
                style={{ border: "1px solid black" }}
              >
                <div className="product-card position-relative p-2">
                  <span className="badge-discount position-absolute top-0 start-0 bg-info text-white p-1">
                    29% OFF
                  </span>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg"
                    className="img-fluid mb-3"
                    alt="Product Image"
                  />
                  <h5 className="mb-2">Fresh Organic Broccoli Crowns</h5>
                  <p>1 kg | In Stock</p>
                  {/* Adjusted the layout */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span>
                      <s className="text-muted">$6.75</s> <strong>$4.85</strong>
                    </span>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-sm ms-2"
                    style={{
                      width: "100%", // Increase width to full container width
                      display: "block", // Ensures it takes up the full width
                      textAlign: "center", // Centers text inside the button
                      marginTop: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* Product Card 4 */}
              <div
                className="col-md-3 mb-3"
                style={{ border: "1px solid black" }}
              >
                <div className="product-card position-relative p-2">
                  <span className="badge-discount position-absolute top-0 start-0 bg-info text-white p-1">
                    29% OFF
                  </span>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg"
                    className="img-fluid mb-3"
                    alt="Product Image"
                  />
                  <h5 className="mb-2">Fresh Organic Broccoli Crowns</h5>
                  <p>1 kg | In Stock</p>
                  {/* Adjusted the layout */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span>
                      <s className="text-muted">$6.75</s> <strong>$4.85</strong>
                    </span>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-sm ms-2"
                    style={{
                      width: "100%", // Increase width to full container width
                      display: "block", // Ensures it takes up the full width
                      textAlign: "center", // Centers text inside the button
                      marginTop: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   {/* ---------------------------------------------------------------------------------------------------------- */}

   <Footer/>
    </>
  )
}

export default Grocery