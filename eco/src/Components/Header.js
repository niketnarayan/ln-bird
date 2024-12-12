import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './cartcontext'
function Header() {

  const {cart,setcart}=useCart()
  const[length,setlength]=useState(0)
  useEffect(()=>
  {
    const clength=cart.length
    setlength(clength)
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const navigate=useNavigate()




const incrementQuantity = (index) => {
  setcart((prevCart) =>
    prevCart.map((item, i) =>
      i === index
        ? { ...item, quantity: item.product + 1 } // Increment quantity for the specific item
        : item // Leave other items unchanged
    )
  );
};

const decrementQuantity = (index) => {
  setcart((prevCart) =>
    prevCart
      .map((item, i) =>
        i === index && item.quantity >= 1
          ? { ...item, quantity: item.quantity - 1 } // Decrease quantity
          : item
      )
      .filter((item, i) => !(i === index && item.quantity === 0)) // Remove item if quantity reaches 0
  );
};


const calculateTotalPrice = () => {
  return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
};

const [show1, setShow1] = useState(false);

const handleClose1 = () => setShow1(false);
const handleShow1 = () => {
  setShow1(true);
};






  return (
    <div style={{position:"fixed",left:"0",right:"0",zIndex:"1000",top:"0"}}>

<nav className="navbar navbar-expand-lg" style={{background:"linear-gradient(to right, #fc2779, #ff79b0)"}} >
  <div className="container">
    {/* Brand Logo */}
    <a style={{cursor:"pointer"}} className="navbar-brand text-white d-flex align-items-center" onClick={()=>navigate('/')}>
      <span className="logo-icon me-2">ⓒ</span>LNBird
    </a>
    {/* Toggler for mobile view */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/* Navbar links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
  <Link className="nav-link text-white" to="/">
    Home
  </Link>
</li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Product
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Combo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Blog
          </a>
        </li>
        <li className="nav-item">
  <Link className="nav-link text-white" to="/contact">
    Contact Us
  </Link>
</li>
      </ul>
      <div className="button-header">
      <button className="buttons-header" onClick={handleShow1 }>
      <i className="fa-solid fa-cart-shopping"></i> Cart{length}
      </button>
      <button className="buttons-header" onClick={handleShow }>
      <i className="fa-solid fa-arrow-right-to-bracket"></i>Login
      </button>
      </div>
    </div>
  </div>
  </nav>
  <div className="category">
  <div
    className="bg-light p-2"
    style={{
      position: "fixed",
      zIndex: "1000",
      right: "0",
      left: "0",
      
    }}
  >
    <div
      className="container-lg d-flex justify-content-between align-items-center"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Categories Dropdown */}
    

      {/* Search Bar */}
      <div
  className="input-group"
  style={{
    maxWidth: "400px",
    flexGrow: 1,
    display: "flex", // Enables flexbox for child alignment
    justifyContent: "center", // Centers children horizontally
    alignItems: "center", // Centers children vertically
    margin: "auto", // Centers the div itself within the parent
  }}
>
        <input
          className="form-control"
          type="search"
          placeholder="Search your products here"
          aria-label="Search"
        />
        <button className="btn" style={{width:"3rem"}}>
          <i className="fa-solid fa-magnifying-glass"  ></i>
        </button>
      </div>





    </div>
  </div>
</div>


{/* modal code for login----------- */}

<Modal
  show={show}
  onHide={handleClose}
  centered
  dialogClassName="custom-modal"
>
  <Modal.Header style={{backgroundColor:"linear-gradient(to right, #fc2779, #ff79b0)"}} closeButton >
  <Modal.Title
  style={{
    fontSize: '24px',
    fontWeight: '600',
    color: '#fff', // Ensure text is visible on the gradient
    background: 'linear-gradient(to right, #fc2779, #ff79b0)',
    WebkitBackgroundClip: 'text', // Optional: Makes the text itself take the gradient color
    WebkitTextFillColor: 'transparent', // Optional: Fills the text with the gradient
    padding: '10px', // Add padding for better appearance
    borderRadius: '8px', // Round the corners
  }}
>
  Welcome to LNBird
</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div
      style={{
        display: 'flex',
        fontFamily: 'Arial, sans-serif',
        gap: '20px',
        flexWrap: 'wrap', // Makes it responsive
      }}
    >
      {/* Left Section */}
      <div
        style={{
          flex: 1,
          background: 'linear-gradient(135deg, #0078D7, #56CCF2)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h2 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Welcome!</h2>
        <p style={{ fontSize: '16px', marginBottom: '20px', textAlign: 'center' }}>
          Sign up with your mobile number to explore our features.
        </p>
        <img
          src="https://c8.alamy.com/comp/2BHAEDT/login-icon-isolated-on-special-blue-round-button-abstract-illustration-2BHAEDT.jpg"
          alt="Sign Up Illustration"
          style={{
            width: '150px',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.3)',
          }}
        />
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#F9F9F9',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ maxWidth: '300px', width: '100%' }}>
          <label
            htmlFor="mobileNumber"
            style={{
              fontSize: '14px',
              marginBottom: '8px',
              display: 'block',
              color: '#555',
            }}
          >
            Enter Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            placeholder="Enter Your Mobile No."
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '15px',
              fontSize: '14px',
              outline: 'none',
            }}
          />
          <p style={{ fontSize: '12px', marginBottom: '20px', color: '#777' }}>
            By continuing, you agree to LNBird's{' '}
            <a href="#" style={{ color: '#0078D7', textDecoration: 'none' }}>
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="#" style={{ color: '#0078D7', textDecoration: 'none' }}>
              Privacy Policy
            </a>.
          </p>
          <button
            style={{
              width: '100%',
              backgroundColor: '#FF5722',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              marginBottom: '10px',
              boxShadow: '0 4px 8px rgba(255, 87, 34, 0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.boxShadow = '0 6px 12px rgba(255, 87, 34, 0.4)')}
            onMouseLeave={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(255, 87, 34, 0.2)')}
          >
            CONTINUE
          </button>
          <button
            style={{
              width: '100%',
              backgroundColor: 'white',
              color: '#0078D7',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.border = '1px solid #0078D7')}
            onMouseLeave={(e) => (e.target.style.border = '1px solid #ddd')}
          >
            Existing User? Log in
          </button>
        </div>
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>



{/* modal login end----------------------- */}


{/* modal----------------------------------------------------------------- */}

<Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
          <Modal.Title>
  <div className="modal-title">
    <div>
      <img 
        className="img-fluid" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvPOK3a2x7ceTbTGkjYPJKWjwcWjVB0xqgg&s"
        alt="Product" 
      />
    </div>
    <span>Product Details</span>
  </div>
</Modal.Title>

          </Modal.Header>
          <Modal.Body>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                 <img src={item.image} alt={item.product} />
          <div className="cart-item-info">
            <div className="cart-item-title">{item.product_name}</div>
           
            <div className="cart-item-price">
          ₹{((parseFloat(item.product_price) || 0) * 1).toFixed(2)}
        </div>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => decrementQuantity(index)}>-</button>
            <span className="quantity">{item.quantity}</span>
            <button onClick={() => incrementQuantity(index)}>+</button>
          </div>
              </div>
              
            ))}
                   <div className="cart-total">
  <h3>
    Total Price: <span>₹{calculateTotalPrice().toFixed(2)}</span>
  </h3>
</div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            {/* <Button  variant="primary" onClick={handleShow3}>
              CheckOut
            </Button> */}
          </Modal.Footer>
        </Modal>

{/* modal---------------------------------------------------------------------- */}





    </div>
  )
}

export default Header