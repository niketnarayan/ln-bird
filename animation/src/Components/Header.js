import React, { useState , useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import gsap from "gsap";
import { Power3 } from "gsap";

function Header() {

    const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex) => {
setIndex(selectedIndex);
};




const [hoveredIndex, setHoveredIndex] = useState(null);

const images = [
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww",
  "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg",
  "https://freedesignfile.com/upload/2016/10/Office-HD-picture-in-white-03.jpg",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
  "https://st3.depositphotos.com/8911320/33966/i/450/depositphotos_339665118-stock-photo-render-modern-office-interior.jpg",
];












  return (
    <div>

<>
      {/* Carousel with Navbar inside */}
      <div className="carousel-container">
  {/* First Slide Content */}
  <div className="static-slide">
    <img
      className="d-block w-100 custom-carousel-image"
      src="https://plus.unsplash.com/premium_photo-1661955917112-32d44c5c0f78?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
      alt="First Slide"
    />
    <div className="overlay-navbar">
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            <img
              src="https://shuddham.org/Meet/wp-content/uploads/2025/02/KuiqMeeting-logo.png"
              style={{ width: "80px", height: "40px", color: "white" }}
              alt="Logo"
            />
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
  </div>
  </div>





      {/* <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "500px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
          border: "2px solid #00ffff",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            style={{
              width: "20%", 
              height: "100%",
              backgroundImage: `url(${
                hoveredIndex === index
                  ? images[(index + 1) % images.length] 
                  : images[index] 
              })`,
              backgroundSize: "cover",
              backgroundPosition: `${index * 20}% center`, 
              position: "absolute",
              left: `${index * 20}%`,
            }}
            initial={{ translateY: "0%" }}
            whileHover={{
              translateY: index % 2 === 0 ? "-10%" : "10%", 
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.5,
            }}
            onHoverStart={() => setHoveredIndex(index)} 
            onHoverEnd={() => setHoveredIndex(null)} 
          />
        ))}
      </div>
    </div> */}




<div
  style={{
    width: "100%",
    height: "350px",
    display: "flex",
    justifyContent: "space-between", // Ensure equal spacing
    alignItems: "center",
    marginTop: "200px",
    marginBottom: "200px",
    position: "relative",
    backgroundImage:
      "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
    padding: "20px",
    color: "#fff",
  }}
>
  {/* Text Section */}
  <div
      style={{
        width: "50%",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      {/* Top Section */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "400" }}>
          Enhance visitor experience
        </p>
        <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "400" }}>
          ePaper
        </p>
        <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "400" }}>
          Personal Space Management
        </p>
        <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "400" }}>
          ePaper – Sustainable Workspace Signage
        </p>
      </div>

      {/* Heading */}
      <h2
        style={{
          margin: "20px 0",
          fontSize: "22px",
          fontWeight: "600",
          color: "#222",
        }}
      >
        Meeting Space Management
      </h2>

      {/* Bottom Section */}
      <div style={{ marginTop: "20px" }}>
        <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "400" }}>
          ePaper – Sustainable Workspace Signage
        </p>
        <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "400" }}>
          Personal Space Management
        </p>
        <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "400" }}>
          ePaper
        </p>
        <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "400" }}>
          Enhance visitor experience
        </p>
      </div>
    </div>




  {/* Images Section */}
  <div
    style={{
      width: "50%", // Fixed width for image frame div
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "450px",
      position: "relative",
      borderRadius: "20px",
      border: "4px solid rgba(0, 242, 234, 1)",
      zIndex: 10,
      overflow: "hidden",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      background: "#fff",
    }}
  >
    {images.map((image, index) => (
      <motion.div
        key={index}
        style={{
          width: "20%", // Adjust size to fit within the container
          height: "100%",
          backgroundImage: `url(${hoveredIndex === index ? images[(index + 1) % images.length] : image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          left: `${index * 20}%`,
          zIndex: 2,
        }}
        initial={{ translateY: "0%" }}
        whileHover={{
          translateY: index % 2 === 0 ? "-10%" : "10%", // Hover animation
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.5,
        }}
        onHoverStart={() => setHoveredIndex(index)}
        onHoverEnd={() => setHoveredIndex(null)}
      />
    ))}
  </div>
</div>
















 






    

























   




    </>


    </div>
  )
}

export default Header