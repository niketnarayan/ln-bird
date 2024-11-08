import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Tab, Tabs, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Login =() =>{
    handleShow()
  }


  const [key, setKey] = useState('otp');


 
  return (
    <>
   <div style={{ position: "sticky", top: "0", zIndex: "1000" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#00363A' }}>
        <div className="container-fluid">
          {/* Logo with left margin */}
          <a className="navbar-brand text-white d-flex align-items-center" href="#" style={{ marginLeft: '50px', marginRight: '50px' }}>
            <img src="https://www.lotswholesale.com/vendor/image/Logo/lotswholesale-logo.svg" alt="Logo" style={{width:"auto",height:"45px",marginTop:"0px"}} />
            <div className="ms-2 text-white">
            </div>
          </a>
          

          {/* Centered Search Bar */}
          <div className="input-group mx-auto" style={{ maxWidth: '400px' }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search your products here"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              <i className="bi bi-search"></i> {/* Bootstrap Search Icon */}
            </button>
          </div>
          <div style={{marginLeft:"199px"}}>
            <Link to="/Contactus">
            <Button style={{backgroundColor:"white",color:"black",border:"1px solid white"}}>Contact Us</Button>
            </Link>
          </div>

          {/* Login Button */}
          <a className="btn btn-light ms-auto"   onClick={Login}>
            <i className="bi bi-box-arrow-in-right"></i> LOGIN

          </a>
          {/* modal code---------------------------------- -------------------------------------------------------- */}


          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div style={{display:"flex",gap:"25px"}}>
          <div>
            <img src='https://www.lotswholesale.com/vendor/image/Logo/LogoLandscapeNoborder.png' style={{width:"8rem"}}></img>
          </div>
          <div>
            <span style={{fontSize:"22px",fontWeight:"bold",lineHeight:"2px"}}>Login for More convenient shopping</span>
            <p style={{marginTop:"10px",fontSize:"13px", fontWeight:"bold"}}>And receive special privileges only for LOTS Wholesale Solutions Members</p>
          </div>
         </div>

         <div>
          <label style={{fontWeight:"bold"}}>Membership Id or Mobile Number</label><br/>
          <input type='text' placeholder='Enter your Membership Id or Mobile Number' style={{width:"28rem",height:"40px", border:"2px solid lightblue",borderRadius:"10px"}}></input>
         </div>
         {/* password and otp start ------------------------------------------------------------------------------ */}

         <div className="p-3" style={{ maxWidth: '450px', margin: '30px auto', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <Tabs

        id="login-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        style={{ borderBottom: 'none',padding:"0" }}
      >
        <Tab 
          eventKey="password"
          title={
            <span
              style={{
                color: key === 'password' ? '#ffffff' : 'grey',
                fontWeight: key === 'password' ? 'bold' : 'normal',
                padding: '10px',
                backgroundColor: key === 'password' ? '#D71920' : '#cccccc', // Red if active, grey if inactive
                borderRadius: '5px 5px 0 0'
              }}
            >
              Password login
            </span>
          }
        >
          {key === 'password' && (
            <div style={{ backgroundColor: '#D71920', width: '100%', height: '3px', marginTop: '-8px' }}></div>
          )}
          <div style={{ padding: '10px' }}>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
            </Form>
          </div>
        </Tab>
        
        <Tab
          eventKey="otp"
          title={
            <span
              style={{
                color: key === 'otp' ? '#ffffff' : 'grey',
                fontWeight: key === 'otp' ? 'bold' : 'normal',
                padding: '10px',
                backgroundColor: key === 'otp' ? '#D71920' : '#cccccc', // Red if active, grey if inactive
                borderRadius: '5px 5px 0 0'
              }}
            >
              OTP code login
            </span>
          }
        >
          {key === 'otp' && (
            <div style={{ backgroundColor: '#D71920', width: '100%', height: '3px', marginTop: '-8px' }}></div>
          )}
          <div style={{ padding: '10px' }}>
            <Form>
              <Form.Group controlId="formOtpCode">
                <Form.Label>OTP Code</Form.Label>
                <Form.Control type="text" placeholder="OTP Code" />
              </Form.Group>
            </Form>
          </div>
        </Tab>
      </Tabs>
    </div>
         {/* password and otp end---------------------------------------------------------------------------- */}
         <div  style={{display:"flex", gap:"14rem"}}>
         <label style={{fontWeight:"bold"}}>
  <input type="checkbox" name="exampleCheckbox" value="value1" style={{margin:"5px"}}/>
  Rembember Login
</label>
<div>
  <label style={{fontWeight:"bold"}}>Get OTP</label>
</div>
</div>

<button style={{width:"29rem", marginTop:"20px", backgroundColor:"#D71920", color:"white", border:"#D71920", height:"35px", borderRadius:"5px"}}>
  Login
</button>



        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#D71920", height: "90px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
  <div>
    <a href='' style={{ textDecoration: "none" }}>
      <span style={{ color: "white", textAlign: "center",fontWeight:"bold" }}>Activate Your Member</span>
    </a>
  </div>
  <div>
    <a href='' style={{ textDecoration: "none" }}>
      <span style={{ color: "white", textAlign: "center",fontWeight:"bold" }}>Generate Password</span>
    </a>
  </div>
</Modal.Footer>
      </Modal>


          {/* modal code end ---------------- -------------------------------------------------------------- */}
        </div>
      </nav>

      {/* Categories Menu */}
      <div className="bg-light p-2">
<div className="container d-flex align-items-center">
{/* Categories Dropdown using react-bootstrap */}
<DropdownButton
id="dropdown-basic-button"
title={
<span
style={{
fontWeight: 'bold', // Apply bold
fontSize: '18px', // Apply larger font size
color: isDropdownOpen ? 'red' : 'black', // Change text color based on open state
}}
>
Categories
</span>
}
className={`me-3 ${isDropdownOpen ? 'text-danger' : ''}`}
variant="light"
onClick={toggleDropdown}
>
<Dropdown.Item href="#" style={{ fontSize: '18px', display:"flex", gap:"20px" }}>
<i class="fa-solid fa-apple-whole" style={{marginTop:"5px"}}></i>
Fruits & Vegitables
</Dropdown.Item>
<Dropdown.Item href="#" style={{ fontSize: '18px' , display:"flex", gap:"20px"}}>
<i class="fa-solid fa-drumstick-bite" style={{marginTop:"5px"}}></i>
Chicken & Meat
</Dropdown.Item>
<Dropdown.Item href="#" style={{ fontSize: '18px' , display:"flex", gap:"20px"}}>
<i class="fa-solid fa-egg" style={{marginTop:"5px"}}></i>
Breakfast & Diary
</Dropdown.Item>
<Dropdown.Item href="#" style={{ fontSize: '18px' , display:"flex", gap:"20px"}}>
<i class="fa-solid fa-mug-hot" style={{marginTop:"5px"}}></i>
Beverage
</Dropdown.Item>
<Dropdown.Item href="#" style={{ fontSize: '18px' , display:"flex", gap:"20px"}}>
<i class="fa-solid fa-bread-slice" style={{marginTop:"5px"}}></i>
Bread & Bakery
</Dropdown.Item>
<Dropdown.Item href="#" style={{ fontSize: '18px' , display:"flex", gap:"20px"}}>
<i class="fa-solid fa-icicles" style={{marginTop:"5px"}}></i>
Frozen Foods
</Dropdown.Item>
<Dropdown.Item href="#" style={{ fontSize: '18px' , display:"flex", gap:"20px"}}>
<i class="fa-solid fa-cookie"style={{marginTop:"5px"}}></i>
Biscuits & Snacks
</Dropdown.Item>
<Dropdown.Item href="#" style={{ fontSize: '18px' , display:"flex", gap:"20px"}}>
<i class="fa-solid fa-wheat-awn"style={{marginTop:"5px"}}></i>
Grocery & Staples
</Dropdown.Item>
</DropdownButton>

{/* Mailer Link */}
<a
href="#"
className=""
style={{
fontWeight: '500',
fontSize: '16px',
display: 'flex',
alignItems: 'center',
textDecoration: 'none',
}}
>
<i className="fa-solid fa-tag" style={{ color: 'red' }}></i>
{/* Discount icon */}
<span style={{ marginLeft: '5px', color: 'black' }}>LOTS Mailer</span>
</a>
</div>
</div>
      </div>

      {/* Additional CSS for hover effects */}
      <style jsx>{`
        .dropdown-menu a:hover {
          background-color: #f8f9fa;
          color: red;
          transition: all 0.3s ease-in-out;
        }

        .navbar a:hover {
          color: #fff;
          text-decoration: none;
        }

        .dropdown-toggle:hover {
          color: red !important;
        }

        .dropdown-toggle.text-danger {
          color: red !important;
        }

        
      `}</style>
    </>
  );
}

export default Navbar;
