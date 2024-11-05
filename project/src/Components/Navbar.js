import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
 
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(215, 25, 32)' }}>
        <div className="container-fluid">
          {/* Logo with left margin */}
          <a className="navbar-brand text-white d-flex align-items-center" href="#" style={{ marginLeft: '50px', marginRight: '50px' }}>
            <img src="https://www.lotswholesale.com/vendor/image/Logo/lotswholesale-logo.svg" alt="Logo" style={{width:"auto",height:"45px",marginTop:"0px"}} />
            <div className="ms-2 text-white">
            </div>
          </a>

          {/* Centered Search Bar */}
          <div className="input-group mx-auto" style={{ maxWidth: '400px' }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search your products here"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              <i className="bi bi-search"></i> {/* Bootstrap Search Icon */}
            </button>
          </div>

          {/* Login Button */}
          <a className="btn btn-light ms-auto" href="#">
            <i className="bi bi-box-arrow-in-right"></i> LOGIN
          </a>
        </div>
      </nav>

      {/* Categories Menu */}
      <div className="bg-light p-2">
        <div className="container d-flex align-items-center">
          {/* Categories Dropdown using react-bootstrap */}
          <DropdownButton
            id="dropdown-basic-button"
            title={
              <span
                style={{
                  fontWeight: 'bold', // Apply bold
                  fontSize: '18px', // Apply larger font size
                  color: isDropdownOpen ? 'red' : 'black', // Change text color based on open state
                }}
              >
                Categories
              </span>
            }
            className={`me-3 ${isDropdownOpen ? 'text-danger' : ''}`}
            variant="light"
            onClick={toggleDropdown}
          >
            <Dropdown.Item href="#" style={{ fontSize: '18px' }}>
              Category 1
            </Dropdown.Item>
            <Dropdown.Item href="#" style={{ fontSize: '18px' }}>
              Category 2
            </Dropdown.Item>
            <Dropdown.Item href="#" style={{ fontSize: '18px'}}>
              Category 3
            </Dropdown.Item>
          </DropdownButton>

          {/* Mailer Link */}
          <a
            href="#"
            className=""
            style={{
              fontWeight: '500',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <i className="fa-solid fa-tag" style={{ color: 'red' }}></i>
            {/* Discount icon */}
            <span style={{ marginLeft: '5px', color: 'black' }}>LOTS Mailer</span>
          </a>
        </div>
      </div>

      {/* Additional CSS for hover effects */}
      <style jsx>{`
        .dropdown-menu a:hover {
          background-color: #f8f9fa;
          color: red;
          transition: all 0.3s ease-in-out;
        }

        .navbar a:hover {
          color: #fff;
          text-decoration: none;
        }

        .dropdown-toggle:hover {
          color: red !important;
        }

        .dropdown-toggle.text-danger {
          color: red !important;
        }

        
      `}</style>
    </>
  );
}

export default Navbar;
