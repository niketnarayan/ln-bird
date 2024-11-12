import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <>

<footer className="footer" style={{backgroundColor: '#00363A',height:"400px"}}>
      <Container>
        <Row className="footer-row">
          <Col md={2} sm={6} className="footer-column">
            <h3>All Categories</h3>
            <ul>
              <li>Grocery</li>
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Lifestyle</li>
              <li>Premium Fruits</li>
              <li>Books</li>
              <li>Furniture</li>
            </ul>
          </Col>

          <Col md={2} sm={6} className="footer-column">
            <h3>Popular Categories</h3>
            <ul>
              <li>Biscuits, Drinks & Packaged Foods</li>
              <li>Fruits & Vegetables</li>
              <li>Cooking Essentials</li>
              <li>Dairy & Bakery</li>
              <li>Personal Care</li>
              <li>Beauty</li>
              <li>Home Care</li>
              <li>Mom & Baby Care</li>
              <li>School, Office & Stationery</li>
            </ul>
          </Col>

          <Col md={2} sm={6} className="footer-column">
            <h3>Customer Account</h3>
            <ul>
              <li>My Account</li>
              <li>My Orders</li>
              <li>Wishlist</li>
              <li>Delivery Addresses</li>
              <li>JioMart Wallet</li>
            </ul>
          </Col>

          <Col md={2} sm={6} className="footer-column">
            <h3>Help & Support</h3>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return Policy</li>
              <li>Shipping & Delivery Policy</li>
              <li>AC Installation by resQ</li>
            </ul>
          </Col>

          <Col md={4} sm={12} className="footer-column contact" style={{height:"400px"}}>
            <h3>Contact Us</h3>
            <p>WhatsApp us: <a href="tel:7000370003">70003 70003</a></p>
            <p>Call us: <a href="tel:18008901222">1800 890 1222</a></p>
            <p>8:00 AM to 8:00 PM, 365 days</p>
            <p>Should you encounter any issues with the website.</p>
            <h3>Download the app</h3>
            <div className="app-links">
              <img src="https://www.jiomart.com/assets/ds2web/jds-icons/google-play-icon.svg" alt="Google Play" />
              <img src="https://www.jiomart.com/assets/ds2web/jds-icons/ios_app_icon.svg" alt="App Store" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>

    <div className="footer-bottom">
        <p>&copy; (2020 - 2023) CP Wholesale India Private Limited. All rights reserved.</p>
      </div>







    </>
  )
}

export default Footer