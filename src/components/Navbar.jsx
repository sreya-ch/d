// src/components/Navbar.js
import React from 'react';
import '../../src/App.css';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    alert("Search functionality not implemented.");
  };

  return (
    <div>
    <header className="bg-light border-bottom">
      <div className="container-fluid">
        <div className='first'>
        <div className="row align-items-center justify-between py-2">
          {/* Logo */}
          <div className="col-md-2">
            <a className="navbar-brand" href="#">
              <img
                src="assets/logonew.jpg"
                alt="Quick Grain"
                className="img-fluid"
                id="logo"
              />
            </a>
          </div>
          {/* Search Bar */}
          <div className="col-lg-2">
            <form className="form-inline" onSubmit={handleSearch}>
              <input
                type="text"
                id="searchBox"
                placeholder="Enter product name"
              />
              <button
                type="submit"
                style={{
                  fontSize: '20px',
                  border: 'none',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              >
                Search
              </button>
            </form>
          </div>
          </div>
          <div className='second'>
          {/* Login and Cart */}
          <div className="col text-right">
            <button className="btn-custom">
              <Link to="/" style={{color:"black",fontWeight:"bold"}}>Home</Link>
            </button>
            <button className="btn-custom">
                <Link to="/login" style={{color:"black",fontWeight:"bold"}} >Login</Link>
            </button>
            <button className="btn-custom">
                <Link to="/signup" style={{color:"black",fontWeight:"bold"}} >Sign Up</Link>
            </button>
            <button className="btn-custom">
                <Link to="/cart" style={{color:"black",fontWeight:"bold"}}>Cart</Link>
            </button>
          </div>
        </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navbar1;
