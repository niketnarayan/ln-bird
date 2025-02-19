import React, { useState } from "react";
import "./Header.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* Carousel with Navbar inside */}
      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-carousel-image"
              src="https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg"
              alt="First slide"
            />
            <div className="overlay-navbar">
              <Navbar expand="lg" className="custom-navbar">
                <Container>
                  <Navbar.Brand href="#home" className="text-white">
                    MyWebsite
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link href="#home" className="text-white">
                        Home
                      </Nav.Link>
                      <Nav.Link href="#about" className="text-white">
                        About
                      </Nav.Link>
                      <Nav.Link href="#services" className="text-white">
                        Services
                      </Nav.Link>
                      <Nav.Link href="#contact" className="text-white">
                        Contact
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <div className="carousel-header">
              <h1>Room Scheduling System</h1>
              <h3>With Crestron Room Panels</h3>
              <p>
                Workspace Management For A Seamless Experience <br />
                For Employees & Visitors
              </p>
              <div className="header-buttons">
                <button className="btn-demo">Ask Demo</button>
                <button className="btn-pricing">Get Pricing</button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-carousel-image"
              src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?cs=srgb&dl=pexels-olly-840996.jpg&fm=jpg"
              alt="Second slide"
            />
                    <div className="overlay-navbar">
              <Navbar expand="lg" className="custom-navbar">
                <Container>
                  <Navbar.Brand href="#home" className="text-white">
                    MyWebsite
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link href="#home" className="text-white">
                        Home
                      </Nav.Link>
                      <Nav.Link href="#about" className="text-white">
                        About
                      </Nav.Link>
                      <Nav.Link href="#services" className="text-white">
                        Services
                      </Nav.Link>
                      <Nav.Link href="#contact" className="text-white">
                        Contact
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-carousel-image"
              src="https://thumbs.dreamstime.com/b/business-woman-office-work-laptop-desk-staff-planning-creative-writing-startup-writer-seo-article-research-reading-338993641.jpg"
              alt="Third slide"
            />
                    <div className="overlay-navbar">
              <Navbar expand="lg" className="custom-navbar">
                <Container>
                  <Navbar.Brand href="#home" className="text-white">
                    MyWebsite
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link href="#home" className="text-white">
                        Home
                      </Nav.Link>
                      <Nav.Link href="#about" className="text-white">
                        About
                      </Nav.Link>
                      <Nav.Link href="#services" className="text-white">
                        Services
                      </Nav.Link>
                      <Nav.Link href="#contact" className="text-white">
                        Contact
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px", // Adjust the height of the section
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    position: "relative",
    marginTop: "100px",
    marginBottom: "100px",
  }}
>
  {/* Left Text Content */}
  <div style={{ flex: "1", padding: "20px", color: "#fff", zIndex: 2 }}>
    <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
      Meeting Space Management
    </h3>
    <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
      Enhanced Visitor Experience
    </h2>
    <ul style={{ listStyleType: "none", padding: 0 }}>
      <li>ePaper - Sustainable Workspace Signage</li>
      <li>Personal Space Management</li>
      <li>Interactive Animations</li>
    </ul>
  </div>

  {/* Right Image Content */}
  <div
    style={{
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    }}
  >
    <motion.div
      style={{
        width: "400px", // Adjust width of the inner image container
        height: "500px", // Adjust height
        borderRadius: "20px", // Rounded corners
        overflow: "hidden",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Optional shadow
        position: "absolute", // To overlap
        zIndex: 3, // Bring above background
        border: "4px solid #00ffff", // Optional border
      }}
      initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.5)",
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
        duration: 0.8,
      }}
    >
      <img
        src="https://images.pexels.com/photos/3182836/pexels-photo-3182836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Meeting"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures proper scaling without distortion
        }}
      />
    </motion.div>
  </div>
</div>





<div
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px", // Adjust the height of the section
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    position: "relative",
    marginTop: "100px",
    marginBottom: "100px",
  }}
>
  {/* Left Text Content */}
  <div style={{ flex: "1", padding: "20px", color: "#fff", zIndex: 2 }}>
    <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
      Meeting Space Management
    </h3>
    <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
      Enhanced Visitor Experience
    </h2>
    <ul style={{ listStyleType: "none", padding: 0 }}>
      <li>ePaper - Sustainable Workspace Signage</li>
      <li>Personal Space Management</li>
      <li>Interactive Animations</li>
    </ul>
  </div>

  {/* Right Image Content */}
  <div
    style={{
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    }}
  >
    <motion.div
      style={{
        width: "400px", // Adjust width of the inner image container
        height: "500px", // Adjust height
        borderRadius: "20px", // Rounded corners
        overflow: "hidden",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Optional shadow
        position: "absolute", // To overlap
        zIndex: 3, // Bring above background
        border: "4px solid #00ffff", // Optional border
        transformOrigin: "center center", // Important for 3D rotation
      }}
      initial={{ scale: 0.9, rotateY: -10, rotateX: -10, opacity: 0 }}
      animate={{ scale: 1, rotateY: 0, rotateX: 0, opacity: 1 }}
      whileHover={{
        scale: 1.1,
        rotateY: 15,
        rotateX: 10,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.6)",
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1,
      }}
    >
      <img
        src="https://images.pexels.com/photos/3182836/pexels-photo-3182836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Meeting"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures proper scaling without distortion
        }}
      />
    </motion.div>
  </div>
</div>





<div
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px", // Adjust the height of the section
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    position: "relative",
    marginTop: "100px",
    marginBottom: "100px",
  }}
>
  {/* Left Text Content */}
  <div style={{ flex: "1", padding: "20px", color: "#fff", zIndex: 2 }}>
    <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
      Meeting Space Management
    </h3>
    <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
      Enhanced Visitor Experience
    </h2>
    <ul style={{ listStyleType: "none", padding: 0 }}>
      <li>ePaper - Sustainable Workspace Signage</li>
      <li>Personal Space Management</li>
      <li>Interactive Animations</li>
    </ul>
  </div>

  {/* Right Image Content */}
  <div
    style={{
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    }}
  >
    <motion.div
      style={{
        width: "400px", // Adjust width of the inner image container
        height: "500px", // Adjust height
        borderRadius: "20px", // Rounded corners
        overflow: "hidden",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Optional shadow
        position: "absolute", // To overlap
        zIndex: 3, // Bring above background
        border: "4px solid #00ffff", // Optional border
        transformOrigin: "center center", // For parallax tilt
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 10,
        rotateY: -10,
        boxShadow: "0px 30px 50px rgba(0, 0, 0, 0.5)",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Ripple Effect */}
        <motion.div
          style={{
            position: "absolute",
            width: "300px", // Ripple size
            height: "300px",
            background: "rgba(0, 255, 255, 0.2)", // Ripple color
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
          animate={{ scale: [0, 1.5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        ></motion.div>

        <img
          src="https://images.pexels.com/photos/3182836/pexels-photo-3182836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Meeting"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      </div>
    </motion.div>
  </div>
</div>;


    </>
  );
}

export default Header;
