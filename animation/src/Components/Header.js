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
    height: "400px",
    display: "flex",
    justifyContent: "space-between", // Ensure equal spacing
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
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
    width: "35%", // Fixed width for content div
    maxWidth: "500px", // Ensures it doesn't expand too much
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 2,
    backdropFilter: "blur(8px)",
    background: "rgba(0, 0, 0, 0.7)",
    borderRadius: "15px",
    color: "#fff",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0px 15px 40px rgba(0, 0, 0, 0.7)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.5)";
  }}
>
  <div
    style={{
      fontSize: "18px",
      lineHeight: "1.8",
      textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)",
      marginBottom: "15px",
      animation: "fadeIn 1s ease",
    }}
  >
    <h6
      style={{
        fontSize: "20px",
        fontWeight: "500",
        color: "#00f2ea",
        marginBottom: "10px",
        animation: "slideInLeft 0.8s ease",
      }}
    >
      ePaper – Sustainable Workspace Signage
    </h6>
    <h5
      style={{
        fontSize: "22px",
        fontWeight: "600",
        color: "#f4b400",
        marginBottom: "10px",
        animation: "slideInLeft 1s ease",
      }}
    >
      Personal Space Management
    </h5>
    <h4
      style={{
        fontSize: "24px",
        fontWeight: "700",
        color: "#34a853",
        animation: "slideInLeft 1.2s ease",
      }}
    >
      Interactive Animations
    </h4>
  </div>

  <h1
    style={{
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "15px",
      textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
      color: "#fff",
      animation: "zoomIn 1.5s ease",
    }}
  >
    Meeting Space Management
  </h1>

  <p
    style={{
      fontSize: "18px",
      fontWeight: "lighter",
      marginBottom: "15px",
      textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
      animation: "fadeIn 1.5s ease",
    }}
  >
    Enhanced Visitor Experience
  </p>

  <div
    style={{
      fontSize: "16px",
      lineHeight: "1.6",
      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
      marginTop: "10px",
      animation: "slideInRight 1s ease",
    }}
  >
    <h6
      style={{
        fontSize: "18px",
        fontWeight: "500",
        color: "#00f2ea",
        marginBottom: "8px",
      }}
    >
      ePaper – Sustainable Workspace Signage
    </h6>
    <h5
      style={{
        fontSize: "20px",
        fontWeight: "600",
        color: "#f4b400",
        marginBottom: "8px",
      }}
    >
      Personal Space Management
    </h5>
    <h4
      style={{
        fontSize: "22px",
        fontWeight: "700",
        color: "#34a853",
      }}
    >
      Interactive Animations
    </h4>
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