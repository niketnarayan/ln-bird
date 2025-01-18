import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Productslider.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Tab, Tabs, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import kiranawala from "../Components/Assests/mr. Kirana logo.png";
function Productslider() {



    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [key, setKey] = useState("otp");
  
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  const [currentIndex6, setCurrentIndex6] = useState(0);

  const [currentIndex7, setCurrentIndex7] = useState(0);


  




  // Sample Product Data Array
  const pproducts = [
    {
      title: "KELLOGGS CHOCOS 385 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/104456709_1.webp",
    },
    {
      title: "NISSIN CUP NOODLES GEKI HOT & SPICY KOREAN VEG 70 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1705469291669.webp",
    },
    {
      title: "BAMBINO PREMIUM ALL SEASONS FUSILLI PASTA 400 G",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688109188935.webp",
    },
    {
      title: "YIPPEE MAGIC MASALA NOODLES 60 G PK96",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1653452890738.webp",
    },
    {
      title: "QUAKER OATS MEAL 1 KG",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691567_1.webp",
    },
    {
      title: "MAGGI VEG ATTA SPINACH NOODLES 284 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1689834504733.webp",
    },
    {
      title: "DEL MONTE PENNE RIGATE PASTA 500 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1717478191935.jpeg",
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
    },
  ];

  const pproducts1 = [
    {
      title: "KELLOGGS CHOCOS 385 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/104456709_1.webp",
    },
    {
      title: "NISSIN CUP NOODLES GEKI HOT & SPICY KOREAN VEG 70 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1705469291669.webp",
    },
    {
      title: "BAMBINO PREMIUM ALL SEASONS FUSILLI PASTA 400 G",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688109188935.webp",
    },
    {
      title: "YIPPEE MAGIC MASALA NOODLES 60 G PK96",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1653452890738.webp",
    },
    {
      title: "QUAKER OATS MEAL 1 KG",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691567_1.webp",
    },
    {
      title: "MAGGI VEG ATTA SPINACH NOODLES 284 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1689834504733.webp",
    },
    {
      title: "DEL MONTE PENNE RIGATE PASTA 500 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1717478191935.jpeg",
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
    },
  ];

  // Group products into sets of four
  const productChunks6 = [];
  for (let i = 0; i < pproducts.length; i += 5) {
    productChunks6.push(pproducts.slice(i, i + 5));
  }

  const productChunks7 = [];
  for (let i = 0; i < pproducts1.length; i += 5) {
    productChunks7.push(pproducts1.slice(i, i + 5));
  }

  // Function to navigate to the next set of products
  const nextProductss = () => {
    if (currentIndex6 < productChunks6.length - 1) {
      setCurrentIndex6(currentIndex6 + 1);
    }
  };

  const nextProductss1 = () => {
    if (currentIndex7 < productChunks7.length - 1) {
      setCurrentIndex7(currentIndex7 + 1);
    }
  };

  // Function to navigate to the previous set of products
  const prevProductss = () => {
    if (currentIndex6 > 0) {
      setCurrentIndex6(currentIndex6 - 1);
    }
  };

  const prevProductss1 = () => {
    if (currentIndex7 > 0) {
      setCurrentIndex7(currentIndex7 - 1);
    }
  };



  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {setShow1(true); console.log(cart);}
  ;



  const [cart, setcart] = useState([]);
  const [cartlength, setcartlength] = useState(0);
  const handleprouctadd = (product) => {
    setcart([...cart, product]);
    const quantity=cart.length+1
    setcartlength(quantity)
  };
 

  return (
    <>
      <div
      style={{
        position: "fixed",
        top: "0",
        zIndex: "1000",
        left: "0",
        right: "0",
      }}
    >
      <div>
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#3D215D" }}
        >
          <div className="container-lg">
            {/* Logo */}
            <a
              className="navbar-brand text-white d-flex align-items-center"
              href="#"
            >
              <img
                src={kiranawala}
                alt="Logo"
                style={{ width: "auto", height: "50px" }}
              />
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
              style={{ borderColor: "white", backgroundColor: "white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Search Bar */}
              <div
                className="input-group mx-auto"
                style={{
                  maxWidth: "400px",
                  flexGrow: 1,
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
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
                
              <Button
onClick={() => handleShow1(true)}
className='btn hover-light-white'
style={{ backgroundColor: "white", color: "black", border: "1px solid white" }}
>
<i className="fa-solid fa-cart-shopping"></i> Cart {cartlength}
</Button>

{/* ---------------------cart modal--------------------------------------------------------------- */}

{/* Cart Modal */}
{/* <Modal show={show1} onHide={handleClose1}>
<Modal.Header closeButton>
<Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose1}>
Close
</Button>
<Button variant="primary" onClick={handleClose1}>
Save Changes
</Button>
</Modal.Footer>
</Modal> */}

{/* cart modal end-------------------------------------------------------------------------------------- */}
                

                <button
                  className="btn btn-light d-flex align-items-center"
                  onClick={handleShow}
                >
                  <i
                    className="bi bi-box-arrow-in-right"
                    style={{ marginRight: "5px" }}
                  ></i>{" "}
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex" }}>
              <img
                src={kiranawala}
                alt="LOTS Wholesale Solutions"
                style={{ width: "100px", height: "100px" }}
              />
              <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <h5 style={{ fontWeight: "bold" }}>
                  Login for More Convenient Shopping
                </h5>
                <p>
                  And receive special privileges only for Kirana Wholesale
                  Solutions Members
                </p>
              </div>
            </div>
            <Form.Group>
              <Form.Label style={{ fontWeight: "bold" }}>
                Membership Id or Mobile Number
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Membership Id or Mobile Number"
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              />
            </Form.Group>
            <Tabs
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
              justify
              style={{
                borderBottom: "2px solid #D71920",
              }}
            >
              <Tab
                eventKey="password"
                title={
                  <span
                    style={{ color: key === "password" ? "#D71920" : "black" }}
                  >
                    Password login
                  </span>
                }
              >
                <Form.Group>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    style={{
                      marginBottom: "15px",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  />
                </Form.Group>
              </Tab>
              <Tab
                eventKey="otp"
                title={
                  <span style={{ color: key === "otp" ? "#D71920" : "black" }}>
                    OTP code login
                  </span>
                }
              >
                <Form.Group>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    OTP Code
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter OTP code"
                    style={{
                      marginBottom: "15px",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  />
                </Form.Group>
              </Tab>
            </Tabs>
            <div className="d-flex justify-content-between align-items-center">
              <Form.Check
                type="checkbox"
                label="Remember login"
                style={{ fontWeight: "bold" }}
              />
              <a href="#" style={{ textDecoration: "none", color: "#D71920" }}>
                Forgot password?
              </a>
            </div>
            <Button
              style={{
                width: "100%",
                backgroundColor: "#3D215D",
                color: "white",
                marginTop: "15px",
                padding: "10px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: "#3D215D",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="">
              <Button
                variant="link"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Activate Your Membership
              </Button>
              <div>
                <Button
                  variant="link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginLeft: "25px",
                  }}
                >
                  Generate Password
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Categories Dropdown */}
      <div
        className="bg-light p-2"
        style={{ position: "fixed", zIndex: "1000", right: "0", left: "0" }}
      >
        <div className="container-lg d-flex justify-content-between align-items-center">
          <DropdownButton
            id="dropdown-basic-button"
            title="Categories"
            variant="light"
            onClick={toggleDropdown}
          >
            <Dropdown.Item as={Link} to="/fruits">
              <img
                src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1629264486507.jpeg"
                style={{
                  width: "25px",
                  height: "30px",
                  border: "2px solid white",
                }}
              ></img>
              Foodgain & Oil
            </Dropdown.Item>
            <div
              style={{
                backgroundColor: "black",
                boxShadow: "0 0 0 0.1px black",
              }}
            ></div>
            <Dropdown.Item as={Link} to="/chicken">
              <img
                src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1658219469374.jpeg"
                style={{
                  width: "25px",
                  height: "30px",
                  border: "2px solid white",
                }}
              ></img>
              Home Care
            </Dropdown.Item>
            <div
              style={{
                backgroundColor: "black",
                boxShadow: "0 0 0 0.1px black",
              }}
            ></div>
            <Dropdown.Item as={Link} to="/dairy">
              <img
                src="https://thumbs.dreamstime.com/b/mixed-dry-fruits-25481129.jpg?w=768"
                style={{
                  width: "25px",
                  height: "30px",
                  border: "2px solid white",
                }}
              ></img>
              Dry Fruits
            </Dropdown.Item>
            <div
              style={{
                backgroundColor: "black",
                boxShadow: "0 0 0 0.1px black",
              }}
            ></div>
            <Dropdown.Item as={Link} to="/beverage">
              <img
                src="https://thumbs.dreamstime.com/b/cans-beverages-19492376.jpg?w=768"
                style={{
                  width: "25px",
                  height: "30px",
                  border: "2px solid white",
                }}
              ></img>
              Beverage
            </Dropdown.Item>
            <div
              style={{
                backgroundColor: "black",
                boxShadow: "0 0 0 0.1px black",
              }}
            ></div>
            <Dropdown.Item as={Link} to="/bread">
              <img
                src="https://media.istockphoto.com/id/458990173/photo/food-drive-collection.jpg?s=612x612&w=0&k=20&c=lyxmqez8_GFBYg1lHshyHCou2KpWPNsXiHJqOuP2DI8="
                style={{
                  width: "25px",
                  height: "30px",
                  border: "2px solid white",
                }}
              ></img>
              Branded Food
            </Dropdown.Item>
            <div
              style={{
                backgroundColor: "black",
                boxShadow: "0 0 0 0.1px black",
              }}
            ></div>
            <Dropdown.Item as={Link} to="/frozen">
              <img
                src="https://www.eatright.org/-/media/images/eatright-articles/eatright-article-feature-images/frozenfoodsconveninentandnutritious_600x450.jpg?as=0&w=967&rev=f23a06f8fafc47bc8c4bcd77e0fd18c9&hash=3C7783EBD220341CB893DE8477649F3A"
                style={{
                  width: "25px",
                  height: "30px",
                  border: "2px solid white",
                }}
              ></img>
              Frozen
            </Dropdown.Item>
            <div
              style={{
                backgroundColor: "black",
                boxShadow: "0 0 0 0.1px black",
              }}
            ></div>
            <Dropdown.Item as={Link} to="/snacks">
              <img
                src="https://www.gortsa.com/storage/category/28/3ZjIecCwHcn1K1hXb5B4KKIHUAiV1qqYM73LTA2s.jpeg"
                style={{
                  width: "25px",
                  height: "30px",
                  border: "2px solid white",
                }}
              ></img>
              Biscuits & Snacks
            </Dropdown.Item>
            <div
              style={{
                backgroundColor: "black",
                boxShadow: "0 0 0 0.1px black",
              }}
            ></div>
            <Dropdown.Item as={Link} to="/grocery">
              <img
                src="https://www.shutterstock.com/image-photo/jakarta-indonesia-december-11-2023-260nw-2412796699.jpg"
                style={{
                  width: "25px",
                  height: "30px",
                  border: "2px solid white",
                }}
              ></img>
              Personal Care
            </Dropdown.Item>
          </DropdownButton>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "55rem",
            }}
          >
            <i className="fa-solid fa-tag" style={{ color: "#3D215D" }}></i>{" "}
            Wholesale
          </a>
        </div>
      </div>
    </div>
      <div
        className="container position-relative"
        style={{ marginTop: "3rem" }}
      >
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Dry Fruits{" "}
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            <Button
  onClick={() => handleShow1(true)}
  className='btn hover-light-white'
  style={{ backgroundColor: "white", color: "black", border: "1px solid white" }}
  >
  <i className="fa-solid fa-cart-shopping"></i> Cart {cartlength}
  </Button>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex6 === 0 ? 0.5 : 1,
                }}
                onClick={prevProductss}
                disabled={currentIndex6 === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex6 === productChunks6.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProductss}
                disabled={currentIndex6 === productChunks6.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
@keyframes bounce {
0% {
transform: translateY(0);
}
100% {
transform: translateY(-5px);
}
}
`}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunks6[currentIndex6].map((product, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={product.image}
                  className="card-img-top "
                  alt={product.title}
                  style={{
                    height: "120px",
                    width: "150px",
                    padding: "20px",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {product.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {product.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        onClick={()=>handleprouctadd(product)}
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* second slider-------------------------------------------------------------------------------------- */}

      <div className="container position-relative">
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Maggie & Pasta{" "}
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex7 === 0 ? 0.5 : 1,
                }}
                onClick={prevProductss1}
                disabled={currentIndex7 === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity:
                    currentIndex7 === productChunks7.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProductss1}
                disabled={currentIndex7 === productChunks7.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
@keyframes bounce {
0% {
transform: translateY(0);
}
100% {
transform: translateY(-5px);
}
}
`}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunks7[currentIndex7].map((product1, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={product1.image}
                  className="card-img-top "
                  alt={product1.title}
                  style={{
                    height: "120px",
                    width: "150px",
                    padding: "20px",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {product1.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {product1.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <Modal show={show1} onHide={handleClose1}>
<Modal.Header closeButton>
<Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
{
    cart.map((item)=>
    (
        <>
        <h1>{item.title}</h1>
        </>
    ))
}





</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose1}>
Close
</Button>
<Button variant="primary" onClick={handleClose1}>
Save Changes
</Button>
</Modal.Footer>
</Modal>
      </div>

      {/* second slider end-------------------------------------------------------------------------------------- */}
    </>
  );
}

export default Productslider;
