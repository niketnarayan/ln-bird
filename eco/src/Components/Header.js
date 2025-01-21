import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './cartcontext'
import logo from '../Components/Assets/Logo (2).png'
import api from '../Components/api';
import Swal from 'sweetalert2';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
function Header() {

 

  const {cart,setcart}=useCart()
  const [formData, setFormData] = useState({
    apartmentNumber: "",
    apartmentName: "",
    area: "",
    landmark: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    addressType: "Home",
    pincode: "",
    setDefault: false,
    cartItems: [],
    totalPrice:0,
    payment_status:""
  });
  

  
  const[length,setlength]=useState(0)
  useEffect(()=>
  {
    const clength=cart.length
    setlength(clength)
    setFormData({...formData,cartItems:cart})
  })

  
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const navigate=useNavigate()


// const [quantity, setQuantity] = useState(1);    




const incrementQuantity = (index) => {
  setcart((prevCart) =>
    prevCart.map((item, i) =>
      i === index
        ? { ...item, product_quantity1: parseFloat(item.product_quantity1) + 1 }
        : item
    )
  );
};



// Decrement quantity and remove if quantity <= 1
const decrementQuantity = (index) => {
  setcart((prevCart) =>
    prevCart
      .map((item, i) =>
        i === index && item.product_quantity1 > 1
          ? { ...item, product_quantity1: item.product_quantity1 - 1 }
          : item
      )
      .filter((item, i) => !(i === index && item.product_quantity1 <= 1))
  );
};

// Calculate total price
const calculateTotalPrice = () => {
  return cart.reduce(
    (total, item) => total + parseFloat(item.product_price) * item.product_quantity1,
    0
  );
};

useEffect(() => {
  const total = calculateTotalPrice();
  setFormData(prevData => ({
    ...prevData,
    totalPrice: total, 
  }));
}, [formData.cartItems]);


const [show1, setShow1] = useState(false);

const handleClose1 = () => setShow1(false);
const handleShow1 = () => {
  setShow1(true);
};



const [show4, setShow4] = useState(false);

const handleClose4 = () => setShow4(false);
const handleShow4 = () => {
  setShow4(true);
  handleClose1()
}






const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  });
};

const handleAddressType = (type) => {
  setFormData({ ...formData, addressType: type });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form Data Submitted:", formData);
};




const handleSubmit1 = async (e) => {

  try {
    const response = await api.post('createOrder', formData);
    console.log('Response:', formData);

    // Success Alert with "OK" button
    Swal.fire({
      title: 'Success!',
      text: 'Order created successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      // Clear form fields and reload the window
      setFormData({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        apartmentNumber: '',
        apartmentName: '',
        area: '',
        landmark: '',
        addressType: 'Home',
        setDefault: false,
        cartItems: [],
        totalPrice: 0,
        payment_status:""
      });

      // Reload the window (optional)
      window.location.reload();
    });
  } catch (error) {
    console.error('Error creating order:', error);

    // Error Alert
    Swal.fire({
      title: 'Error!',
      text: 'Failed to create order. Please try again.',
      icon: 'error',
      confirmButtonText: 'Retry',
    });
  }
};


const handlePayment = async () => {
  try {
    // Step 1: Create Order on Backend
    const { data: order } = await api.post('payment', {
      amount: formData.totalPrice, // Amount in INR
    });

    console.log('Order Created:', order);  // Debugging: Check if the order was created

    // Step 2: Razorpay Checkout Options
    const options = {
      key: 'rzp_test_kh59VKLP3zCcop', // Replace with your Key ID
      amount: order.amount,
      currency: order.currency,
      name: 'Your Company Name',
      description: 'Test Transaction',
      order_id: order.id,
      handler: function (response) {
        console.log('Payment Success Response:', response);  // Debugging: Check Razorpay response

        // Check if response contains the expected payment info
        if (response && response.razorpay_payment_id) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          
          // Step 3: Generate PDF Invoice after Successful Payment
          generateInvoice(response);

          // Directly update the payment status in frontend
          setFormData({ ...formData, payment_status: 'success' });

          // Call your submit function to save data
          handleSubmit1();
        } else {
          alert('Payment Response Invalid');
        }
      },
      prefill: {
        name: formData.firstName,
        email: 'narayanniket2@gmail.com',
        contact: formData.mobileNumber,
      },
      theme: {
        color: '#3399cc',
      },
    };

    // Step 4: Initialize Razorpay Checkout
    const rzp = new window.Razorpay(options);
    rzp.open();
    
  } catch (error) {
    console.error('Error during payment:', error);

    // Handle any error (e.g., network issues)
    alert('Payment Failed');
    
    // Set status to failed if payment fails
    setFormData({ ...formData, payment_status: 'failed' });
    handleSubmit1();
  }
};

const companyDetails = [
  {
    name: 'My Company',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Horned_logo.jpeg', // Relative URL to the public folder
    address: '456 Business Rd, City, State, 789101',
    contact: 'support@mycompany.com',
  },
];
  



const generateInvoice = (paymentResponse, orderData, companyDetails) => {
  const doc = new jsPDF();

  // --- Add Company Logo ---
  if (companyDetails.logo) {
    const imgWidth = 50; // Adjust width as needed
    const imgHeight = 20; // Adjust height as needed
    doc.addImage(companyDetails.logo, 'JPEG', 20, 10, imgWidth, imgHeight);
  }

  // --- Add Company Details ---
  doc.setFontSize(12);
  doc.text(`${companyDetails.name}`, 20, 40);
  doc.text(`${companyDetails.address}`, 20, 50);
  doc.text(`Contact: ${companyDetails.contact}`, 20, 60);

  // --- Invoice Header ---
  doc.setFontSize(16);
  doc.text('Invoice', 150, 20);

  doc.setFontSize(12);
  doc.text(`Invoice Number: ${paymentResponse.razorpay_payment_id}`, 20, 70);
  doc.text(`Order ID: ${paymentResponse.razorpay_order_id}`, 20, 80);
  doc.text(`Transaction Date: ${new Date().toLocaleDateString()}`, 20, 90);

  // --- Customer Details ---
  doc.text(`Customer Name: ${orderData.customer.name}`, 20, 100);
  doc.text(`Email: ${orderData.customer.email}`, 20, 110);
  doc.text(`Phone: ${orderData.customer.phone}`, 20, 120);
  doc.text(`Address: ${orderData.customer.address}`, 20, 130);

  // --- Product Table ---
  const startY = 140;
  doc.text('Product Details:', 20, startY);

  const tableStartY = startY + 10;
  const tableData = orderData.products.map((product, index) => [
    index + 1,
    product.name,
    product.quantity,
    `₹${product.unitPrice}`,
    `₹${product.totalPrice}`,
  ]);

  doc.autoTable({
    head: [['S.No', 'Product Name', 'Quantity', 'Unit Price', 'Total']],
    body: tableData,
    startY: tableStartY,
  });

  // --- Summary Section ---
  const summaryStartY = doc.lastAutoTable.finalY + 10;
  doc.text(`Subtotal: ₹${orderData.subtotal}`, 150, summaryStartY);
  doc.text(`GST (${orderData.gstPercentage}%): ₹${orderData.gstAmount}`, 150, summaryStartY + 10);
  doc.text(`Discount: ₹${orderData.discount}`, 150, summaryStartY + 20);
  doc.text(`Grand Total: ₹${orderData.totalPrice}`, 150, summaryStartY + 30);

  // --- Footer ---
  const footerStartY = summaryStartY + 50;
  doc.text('Thank you for your purchase!', 20, footerStartY);
  doc.text(`For queries, contact us at: ${companyDetails.contact}`, 20, footerStartY + 10);

  // --- Save the PDF ---
  doc.save('invoice.pdf');
};


const [show6, setShow6] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () =>{setShow6(true);
    handleClose()
  } 


  
const navigatecategory=(data)=>
{
  navigate('/categoryproduct',{state:data})
}
 


 
  





  return (

    <>
  




    <div style={{position:"fixed",left:"0",right:"0",zIndex:"1000",top:"0"}}>

    {/* <header className="main-header">
      
        <div className="header-text">
          <h5
          style={{
            marginBottom:"0px",
            color:"#fff",
            fontWeight:"700",
          }}>Let's Join Us Kiona</h5>
        </div>

       
        <div className="social-icons">
     
          <a href="#" className="icon facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>

        
          <a href="#" className="icon twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>

      
          <a href="#" className="icon instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>

       
          <a href="#" className="icon linkedin">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
      </div>
    </header> */}


<nav className="navbar navbar-expand-lg" style={{backgroundColor: "rgba(252, 247, 238, 0.95)"}} >
  <div className="container" >
    <div className="content-container" style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
    {/* Brand Logo */}
    <a style={{cursor:"pointer"}} className="navbar-brand text-white d-flex align-items-center" onClick={()=>navigate('/')}>
      <span className="logo-icon me-1">Ⓚ</span><img className="image-fluid" src={logo} style={{width:"175px",height:"50px"}}></img>
    </a>

    {/* Navbar links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
  <Link className="nav-link text-white" to="/">
    Home
  </Link>
</li>
<li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle text-white"
    href="#"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Product
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li className="dropdown-item"  onClick={()=>navigatecategory('shampoo')} style={{cursor:"pointer"}}>
      
        Shampoo
     
    </li>
    <li className="dropdown-item" onClick={()=>navigatecategory('massage oil')} style={{cursor:"pointer"}}>
    
        Massage Oil 
     
    </li>
    <li className="dropdown-item" onClick={()=>navigatecategory('face wash')} style={{cursor:"pointer"}}>
    
    Face Wash
    
</li>

<li className="dropdown-item" onClick={()=>navigatecategory('hair serum')} style={{cursor:"pointer"}}>
    
Hair Serum

</li>
<li className="dropdown-item" onClick={()=>navigatecategory('hair oil')} style={{cursor:"pointer"}}>
    
Hair Oil

</li>
  </ul>
</li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/combo">
            Combo
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/blog1">
            Blog
          </Link>
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

    {/* Toggler for mobile view */}
    <button
        style={{width:"fit-content", color:"#000"}}
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>
  </nav>
  {/* <div className="category">
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

    </div>
  </div>
</div> */}


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
  Welcome to Kiona
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
            By continuing, you agree to Kiona{' '}
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
          onClick={handleShow6}
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
            New User? Sinup
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
      src={logo}
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
                 <img src={item.product_image} alt={item.product} />
          <div className="cart-item-info">
            <div className="cart-item-title">{item.product_name}</div>
           
            <div className="cart-item-price">
          ₹{((parseFloat(item.product_price) || 0) * 1).toFixed(2)} 
          <span style={{marginLeft:"14rem"}}>Quantity {item.product_quantity1}</span>
        </div>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => decrementQuantity(index)}>-</button>
            <span className="quantity">{item.product_quantity1}</span>
            <button onClick={() => incrementQuantity(index)}>+</button>
          </div>
              </div>
              
            ))}
                   <div className="cart-total">
                   <h3>
  Total Price: <span>₹{parseFloat(calculateTotalPrice()).toFixed(2)}</span>
</h3>
</div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button  variant="primary" onClick={handleShow4}>
              CheckOut
            </Button>
          </Modal.Footer>
        </Modal>

{/* modal---------------------------------------------------------------------- */}


{/* billing form modal------------------------------------------------------------------------- */}


<Modal show={show4} onHide={handleClose4}  size="xl">
        <Modal.Header closeButton>
          <Modal.Title>  <div>
          <h3>Add New Address</h3>
         </div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div
      className="container"
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Form Section */}
      <div
        style={{
          flex: "1",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
        }}
      >
        <form onSubmit={handleSubmit1}>
          <h5 style={{ marginBottom: "20px", fontWeight: "600" }}>
            *Area Details
          </h5>
          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="apartmentNumber" className="form-label">
                *Apartment / House No.
              </label>
              <input
                type="text"
                className="form-control"
                id="apartmentNumber"
                name="apartmentNumber"
                value={formData.apartmentNumber}
                onChange={handleChange}
                placeholder="e.g. 12/228"
                required
                style={{
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="apartmentName" className="form-label">
                *Apartment Name
              </label>
              <input
                type="text"
                className="form-control"
                id="apartmentName"
                name="apartmentName"
                value={formData.apartmentName}
                onChange={handleChange}
                placeholder="e.g. Park Avenue"
                style={{
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="area" className="form-label">
              *Area
              </label>
              <input
                type="text"
                className="form-control"
                id="area"
                name="area"
                onChange={handleChange}
                placeholder="e.g. 12/228"
                required
                style={{
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="StreetDetails" className="form-label">
              *Street Details/Landmark
              </label>
              <input
                type="text"
                className="form-control"
                id="landmark"
                name="landmark"
               
                onChange={handleChange}
                placeholder="e.g. Park Avenue"
                style={{
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="landmark" className="form-label">
              *Pincode
            </label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              name="pincode"
              
              onChange={handleChange}
              style={{
                borderRadius: "5px",
                padding: "10px",
                fontSize: "14px",
              }}
            />
          </div>
          <h5 style={{ marginTop: "20px", fontWeight: "600" }}>
            Personal Details
          </h5>
          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g. John"
                required
                style={{
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g. Doe"
                style={{
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              required
              style={{
                borderRadius: "5px",
                padding: "10px",
                fontSize: "14px",
              }}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="setDefault"
                name="setDefault"
                checked={formData.setDefault}
                onChange={handleChange}
              />
              <label htmlFor="setDefault" className="form-check-label">
                Set as Default Address
              </label>
            </div>
          </div>
          <h5 style={{ marginTop: "20px", fontWeight: "600" }}>Address Type</h5>
          <div className="mb-3 address-type" style={{ marginBottom: "20px" }}>
            <button
              type="button"
              className={`btn ${
                formData.addressType === "Home"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => handleAddressType("Home")}
              style={{
                marginRight: "10px",
                fontSize: "14px",
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              <i
                className="fa-solid fa-house"
                style={{ marginRight: "5px" }}
              ></i>
              Home
            </button>
            <button
              type="button"
              className={`btn ${
                formData.addressType === "Office"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => handleAddressType("Office")}
              style={{
                marginRight: "10px",
                fontSize: "14px",
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              <i
                className="fa-solid fa-building"
                style={{ marginRight: "5px" }}
              ></i>
              Office
            </button>
            <button
              type="button"
              className={`btn ${
                formData.addressType === "Other"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => handleAddressType("Other")}
              style={{
                marginRight: "10px",
                fontSize: "14px",
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              <i
                className="fa-solid fa-ellipsis"
                style={{ marginRight: "5px" }}
              ></i>
              Other
            </button>
          </div>
        </form>
      </div>

      {/* Cart Section */}
      <div
        style={{
          flex: "1",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
        }}
      >
        <h5 style={{ marginBottom: "20px", fontWeight: "600" }}>Cart Items</h5>
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            
            <div>
              <div style={{ fontWeight: "600", marginBottom: "5px" }}>
                {item.product_name}
              </div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                ₹{((parseFloat(item.product_price) || 0) * 1).toFixed(2)}  <span style={{marginLeft:"13rem"}}>Quantity {item.product_quantity1}</span>
              </div>
            </div>
          </div>
        ))}
        <div  style={{ fontWeight: "600", fontSize: "18px", marginTop: "20px" }}>
        Total Price: <span>₹{parseFloat(calculateTotalPrice()).toFixed(2)}</span>
        </div>
      </div>
    </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePayment}>
           Go to Payment
          </Button>
        </Modal.Footer>
      </Modal>



{/* billing form modal end------------------------------------------------------------------------- */}

{/* sinup for user--------------------------------------------------------------------- */}

<Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
        <Modal.Title>Customer Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                // required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
                // required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                // value={formData.phone}
                // onChange={handleInputChange}
                // required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                // value={formData.password}
                // onChange={handleInputChange}
                // required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose6}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>





    </div>
    </>
  )
}

export default Header