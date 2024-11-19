import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Tab, Tabs, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import kiranawala from "../Components/Assests/mr. Kirana logo.png";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('otp');

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ position: "sticky", top: "0", zIndex: "1000" }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#3D215D' }}>
          <div className="container-lg">
            {/* Logo */}
            <a className="navbar-brand text-white d-flex align-items-center" href="#">
              <img src={kiranawala} alt="Logo" style={{ width: "auto", height: "50px" }} />
            </a>

            {/* Toggler for Mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ borderColor: 'white',backgroundColor:"white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Search Bar */}
              <div
                className="input-group mx-auto"
                style={{ maxWidth: '400px', flexGrow: 1, marginLeft: '20px', marginRight: '20px' }}
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search your products here"
                  aria-label="Search"
                />
                <button className="btn btn-light" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>

              {/* Right-side Buttons */}
              <div className="d-flex align-items-center gap-3">
                <Link to="/Contactus">
                  <Button style={{ backgroundColor: "white", color: "black", border: "1px solid white" }}>
                    Contact Us
                  </Button>
                </Link>

                <button
                  className="btn btn-light d-flex align-items-center"
                  onClick={handleShow}
                >
                  <i className="bi bi-box-arrow-in-right" style={{ marginRight: "5px" }}></i> LOGIN
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", gap: "25px" }}>
              <img src={kiranawala} style={{ width: "8rem", height: "5rem" }} alt="Logo" />
              <div>
                <h6 style={{ fontWeight: "bold" }}>Login for More Convenient Shopping</h6>
                <p>Receive special privileges only for members</p>
              </div>
            </div>
            <Form.Group>
              <Form.Label>Membership Id or Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your Membership Id or Mobile Number" />
            </Form.Group>

            {/* Tabs for Login */}
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
              <Tab eventKey="password" title="Password login">
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
              </Tab>
              <Tab eventKey="otp" title="OTP code login">
                <Form.Group>
                  <Form.Label>OTP Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter OTP code" />
                </Form.Group>
              </Tab>
            </Tabs>

            <div className="d-flex justify-content-between">
              <Form.Check type="checkbox" label="Remember Login" />
              <Button variant="link">Get OTP</Button>
            </div>

            <Button
              style={{
                width: "100%",
                backgroundColor: "#D71920",
                color: "white",
                marginTop: "15px"
              }}
            >
              Login
            </Button>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#D71920" }}>
            <Button variant="link" style={{ color: "white" }}>Activate Your Member</Button>
            <Button variant="link" style={{ color: "white" }}>Generate Password</Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Categories Dropdown */}
      <div className="bg-light p-2" style={{position:"fixed",zIndex:"1000",right:"0",left:"0"}}>
        <div className="container-lg d-flex justify-content-between align-items-center">
          <DropdownButton
            id="dropdown-basic-button"
            title="Categories"
            variant="light"
            onClick={toggleDropdown}
          >
            <Dropdown.Item as={Link} to="/fruits">
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1629264486507.jpeg' style={{width:"25px",height:"30px",border:"2px solid white"}}></img>
            
            Foodgain & Oil</Dropdown.Item>
           <div style={{backgroundColor:"black",boxShadow: "0 0 0 0.1px black"}}></div>
            <Dropdown.Item as={Link} to="/chicken">
            <img src='https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1658219469374.jpeg'style={{width:"25px",height:"30px",border:"2px solid white"}} ></img>
            Home Care</Dropdown.Item>
            <div style={{backgroundColor:"black",boxShadow: "0 0 0 0.1px black"}}></div>
            <Dropdown.Item as={Link} to="/dairy">
             <img src='https://thumbs.dreamstime.com/b/mixed-dry-fruits-25481129.jpg?w=768'style={{width:"25px",height:"30px",border:"2px solid white"}}></img>
            Dry Fruits</Dropdown.Item>
            <div style={{backgroundColor:"black",boxShadow: "0 0 0 0.1px black"}}></div>
            <Dropdown.Item as={Link} to="/beverage">
            <img src='https://thumbs.dreamstime.com/b/cans-beverages-19492376.jpg?w=768' style={{width:"25px",height:"30px",border:"2px solid white"}}></img>
            Beverage</Dropdown.Item>
            <div style={{backgroundColor:"black",boxShadow: "0 0 0 0.1px black"}}></div>
            <Dropdown.Item as={Link} to="/bread">
            <img src='https://media.istockphoto.com/id/458990173/photo/food-drive-collection.jpg?s=612x612&w=0&k=20&c=lyxmqez8_GFBYg1lHshyHCou2KpWPNsXiHJqOuP2DI8=' style={{width:"25px",height:"30px",border:"2px solid white"}}></img>
            Branded Food</Dropdown.Item>
            <div style={{backgroundColor:"black",boxShadow: "0 0 0 0.1px black"}}></div>
            <Dropdown.Item as={Link} to="/frozen">
            <img src='https://www.eatright.org/-/media/images/eatright-articles/eatright-article-feature-images/frozenfoodsconveninentandnutritious_600x450.jpg?as=0&w=967&rev=f23a06f8fafc47bc8c4bcd77e0fd18c9&hash=3C7783EBD220341CB893DE8477649F3A'style={{width:"25px",height:"30px",border:"2px solid white"}}></img>
            Frozen</Dropdown.Item>
            <div style={{backgroundColor:"black",boxShadow: "0 0 0 0.1px black"}}></div>
            <Dropdown.Item as={Link} to="/snacks">
            <img src='https://www.gortsa.com/storage/category/28/3ZjIecCwHcn1K1hXb5B4KKIHUAiV1qqYM73LTA2s.jpeg'style={{width:"25px",height:"30px",border:"2px solid white"}}></img>
            Biscuits & Snacks</Dropdown.Item>
            <div style={{backgroundColor:"black",boxShadow: "0 0 0 0.1px black"}}></div>
            <Dropdown.Item as={Link} to="/grocery">
            <img src='https://www.shutterstock.com/image-photo/jakarta-indonesia-december-11-2023-260nw-2412796699.jpg'style={{width:"25px",height:"30px",border:"2px solid white"}}></img>
            Personal Care</Dropdown.Item>
          </DropdownButton>
          <a href="#" style={{ textDecoration: 'none', color: 'black', marginRight:"55rem" }}>
            <i className="fa-solid fa-tag" style={{ color: 'red' }}></i> LOTS Mailer
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
