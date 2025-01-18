import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Shopslider.css';

function Shopslider() {
  return (
    <>
      <div className='container' style={{marginTop:"3rem"}}>
        <div className='row'>
          <div className='col'>
            <span style={{fontSize: "30px", fontWeight: "bold"}}>SHOP BY CATEGORIES</span>
          </div>
        </div>
      </div>
      {/* slider------------------------------------------------------------------------------------------------- */}
      <div className='container mt-4'>
      <div className='row d-flex flex-wrap gap-3 justify-content-center'>
        {/* First Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/451.jpg" 
            alt="Foodgrain, Oil & Masala" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Foodgrain, Oil & Masala
            </h5>
          </div>
        </div>

        {/* Second Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/717.jpg" 
            alt="Home & Kitchen" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Home & Kitchen
            </h5>
          </div>
        </div>

        {/* Third Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/600.jpg" 
            alt="Personal Care" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Personal Care
            </h5>
          </div>
        </div>

        {/* Fourth Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/539.jpg" 
            alt="Home Care" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Home Care
            </h5>
          </div>
        </div>

        {/* Fifth Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/368.jpg" 
            alt="Branded Food" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Branded Food
            </h5>
          </div>
        </div>

        {/* Sixth Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://3.imimg.com/data3/PW/JU/MY-10721674/dry-fruits-nuts.jpg" 
            alt="Non Veg" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
            Dry Fruits & Nuts
            </h5>
          </div>
        </div>

        {/* Seventh Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/344.jpg" 
            alt="Beverages" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Beverages
            </h5>
          </div>
        </div>

        {/* Eighth Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/845.jpg" 
            alt="Frozen" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Frozen
            </h5>
          </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------ */}
        <div className='row d-flex flex-wrap gap-3 justify-content-center' style={{marginTop:"2rem"}}>
        {/* First Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/451.jpg" 
            alt="Foodgrain, Oil & Masala" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Foodgrain, Oil & Masala
            </h5>
          </div>
        </div>

        {/* Second Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/717.jpg" 
            alt="Home & Kitchen" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Home & Kitchen
            </h5>
          </div>
        </div>

        {/* Third Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/600.jpg" 
            alt="Personal Care" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Personal Care
            </h5>
          </div>
        </div>

        {/* Fourth Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/539.jpg" 
            alt="Home Care" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Home Care
            </h5>
          </div>
        </div>

        {/* Fifth Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/368.jpg" 
            alt="Branded Food" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Branded Food
            </h5>
          </div>
        </div>

        {/* Sixth Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://3.imimg.com/data3/PW/JU/MY-10721674/dry-fruits-nuts.jpg" 
            alt="Non Veg" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
            Dry Fruits & Nuts
            </h5>
          </div>
        </div>

        {/* Seventh Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/344.jpg" 
            alt="Beverages" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Beverages
            </h5>
          </div>
        </div>

        {/* Eighth Category */}
        <div className="card shadow-sm border-1 rounded" style={{ width: "8rem", height: "10rem", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
          <img 
            className="card-img-top" 
            src="https://media.starquik.com/mobile_images/category/new/845.jpg" 
            alt="Frozen" 
            style={{ height: "6rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
            <h5 className="card-title text-center" style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#343a40" }}>
              Frozen
            </h5>
          </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------- */}
    </div>

      {/* slider-end---------------------------------------------------------------------------------------------- */}
    </>
  );
}

export default Shopslider;
