import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <>
    <>
  <footer className="footer">
    <div className="container-fluid">
      <div className="row footer-row">
        {/* All Categories */}
        <div className="col-md-2 col-sm-6 col-12 footer-column">
          <h3>All Categories</h3>
          <ul>
            <li>Grocery</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home &amp; Lifestyle</li>
            <li>Premium Fruits</li>
            <li>Books</li>
            <li>Furniture</li>
          </ul>
        </div>
        {/* Popular Categories */}
        <div className="col-md-2 col-sm-6 col-12 footer-column">
          <h3>Popular Categories</h3>
          <ul>
            <li>Biscuits, Drinks &amp; Packaged Foods</li>
            <li>Fruits &amp; Vegetables</li>
            <li>Cooking Essentials</li>
            <li>Dairy &amp; Bakery</li>
            <li>Personal Care</li>
            <li>Beauty</li>
            <li>Home Care</li>
            <li>Mom &amp; Baby Care</li>
            <li>School, Office &amp; Stationery</li>
          </ul>
        </div>
        {/* Customer Account */}
        <div className="col-md-2 col-sm-6 col-12 footer-column">
          <h3>Customer Account</h3>
          <ul>
            <li>My Account</li>
            <li>My Orders</li>
            <li>Wishlist</li>
            <li>Delivery Addresses</li>
            <li>KiranaMart Wallet</li>
          </ul>
        </div>
        {/* Help & Support */}
        <div className="col-md-2 col-sm-6 col-12 footer-column">
          <h3>Help &amp; Support</h3>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation &amp; Return Policy</li>
            <li>Shipping &amp; Delivery Policy</li>
            <li>AC Installation by resQ</li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className="col-md-4 col-sm-12 col-12 footer-column">
          <h3>Contact Us</h3>
          <p>
            WhatsApp us: <a href="tel:7000370003">70003 70003</a>
          </p>
          <p>
            Call us: <a href="tel:18008901222">1800 890 1222</a>
          </p>
          <p>8:00 AM to 8:00 PM, 365 days</p>
          <p>Should you encounter any issues with the website.</p>
          <ul>
          <li><a href="/Contactus">Contact Us</a></li>
        </ul>
          <h3>Download the app</h3>
          <div className="app-links">
            <img
              src="https://www.jiomart.com/assets/ds2web/jds-icons/google-play-icon.svg"
              alt="Google Play"
            />
            <img
              src="https://www.jiomart.com/assets/ds2web/jds-icons/ios_app_icon.svg"
              alt="App Store"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p>
      © (2020 - 2023) CP Wholesale India Private Limited. All rights reserved.
    </p>
  </div>
</>

    </>
  );
}

export default Footer;
