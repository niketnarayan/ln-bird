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
      <div className="bg-light p-2">
        <div className="container-lg d-flex justify-content-between align-items-center">
          <DropdownButton
            id="dropdown-basic-button"
            title="Categories"
            variant="light"
            onClick={toggleDropdown}
          >
            <Dropdown.Item as={Link} to="/fruits">Foodgain & Oil</Dropdown.Item>
            <Dropdown.Item as={Link} to="/chicken">Home Care</Dropdown.Item>
            <Dropdown.Item as={Link} to="/dairy">Dry Fruits</Dropdown.Item>
            <Dropdown.Item as={Link} to="/beverage">Beverage</Dropdown.Item>
            <Dropdown.Item as={Link} to="/bread">Branded Food</Dropdown.Item>
            <Dropdown.Item as={Link} to="/frozen">Frozen</Dropdown.Item>
            <Dropdown.Item as={Link} to="/snacks">Biscuits & Snacks</Dropdown.Item>
            <Dropdown.Item as={Link} to="/grocery">Personal Care</Dropdown.Item>
          </DropdownButton>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
            <i className="fa-solid fa-tag" style={{ color: 'red' }}></i> LOTS Mailer
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
