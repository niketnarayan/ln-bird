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

// Array of images to swap on hover
const images = [
  "https://images.pexels.com/photos/3182836/pexels-photo-3182836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];


   



  return (
    <div>

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
              width: "20%", // Each section takes up 20% width
              height: "100%",
              backgroundImage: `url(${
                hoveredIndex === index
                  ? images[(index + 1) % images.length] // Change image on hover
                  : images[index] // Default image
              })`,
              backgroundSize: "cover",
              backgroundPosition: `${index * 20}% center`, // Adjust position for each section
              position: "absolute",
              left: `${index * 20}%`,
            }}
            initial={{ translateY: "0%" }}
            whileHover={{
              translateY: index % 2 === 0 ? "-10%" : "10%", // Alternating hover animation
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.5,
            }}
            onHoverStart={() => setHoveredIndex(index)} // Change image on hover
            onHoverEnd={() => setHoveredIndex(null)} // Reset image on hover out
          />
        ))}
      </div>
    </div>














 






    

























   




    </>


    </div>
  )
}

export default Header