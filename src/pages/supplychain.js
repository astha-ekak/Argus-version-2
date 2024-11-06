// src/Navbar.js
import React, { useState } from 'react';
import './supplychain.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const SupplyChainPage = () => {

   
        const [dropdownVisible, setDropdownVisible] = useState(false);
      
        const handleDropdownToggle = () => {
          setDropdownVisible(!dropdownVisible);
        };


  return (
    <div>
     <nav className="navbar">
      <div className="navbar-logo">
        <span className="circle"></span>
        <span className="logo-text">ARGUS</span>
      </div>
      <ul className="navbar-links">
      <Link to="/">Home</Link>
        <li
          className="dropdown"
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <a href="#" className="dropdown-toggle">Technology</a>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <Link to="/supplychain">Supply chain optimization</Link>
                <Link to="/Predictive">Predictive Maintenance</Link>
                
              </div>
              <div className="dropdown-column">
              <Link to="/Security">Security & Surveillance</Link>
                
              </div>
              <div className="dropdown-column">
              <Link to="/Smart">Smart Inventory Management</Link>
              <Link to="/enhanced">Enhanced Customer Experience</Link>
              </div>
            </div>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <a href="#" className="dropdown-toggle">Industry</a>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <Link to="/manufacturing">Manufacturing Industry</Link>
                <Link to="/warehouse">Warehouse Industry</Link>
                
              </div>
              <div className="dropdown-column">
              <Link to="/retail">Retail Industry</Link>
                
              </div>
              <div className="dropdown-column">
              <Link to="/construction">Construction Industry</Link>
             
              </div>
            </div>
          )}
        </li>
      </ul>
      <button className="contact-btn">CONTACT</button>
    </nav>






    <div className="supply-container">
      <div className="supply-header">
        <p className="supply-subheading">THE SUPPLY ALLY</p>
        <h1 className="supply-title">Automated Supply Chain Optimization</h1>
        <p className="supply-description">
          Empowering businesses with real-time data insights and intelligent automation to streamline supply chain operations, reduce costs, and boost<br /> efficiency. Our advanced solutions help identify bottlenecks, improve demand forecasting, and enhance logistics for a seamless, agile, and<br /> resilient supply chain.
        </p>
      </div>
    </div>








    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="supply1.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>ENHANCED DELIVERY EFFICIENCY</h1>
    <hr style={{maxWidth:'100%',paddingRight:'100px'}}></hr>
    <h4 style={{ fontWeight: '300' }}>
    Streamline logistics to ensure faster fulfilment and higher customer satisfaction
    </h4>
    <ul className="featuresSupply">
    <li>Reduce Lead Time</li>
    <li>Lower Operational Costs</li>
    </ul>
  </div>
</div>


    <div className="container">
      <div className="content">
      <h1>
      GREATER TRANSPARENCY AND TRUST</h1>
       <h4 style={{fontWeight:'300'}}>Increase Customer Confidence through Traceability and Product Origin Tracking</h4>
        <ul className="features">
          <li>Product Journey Tracking</li>
          <li>Reducing Material wastage and Improving Efficiency</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="supply_!.png" alt="Product Line" />
        
      </div>
    </div>






   




    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="supply_3.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>IMPROVED INVENTORY MANAGEMENT</h1>
    <h4 style={{ fontWeight: '300' }}>
    Optimise Stock levels for better Product Availability and Customer Satisfaction
    </h4>
    <ul className="featuresSupply">
    <li>Minimize Overproduction and stockout effectively.</li>
          <li>Reducing Material wastage </li>
    </ul>
  </div>
</div>













    <div className="heading-container">
      <h1 className="responsive-heading">Be the First to Receive<br/> the Latest Updates. </h1>
    </div>






  
    <Footer />
  </div>

);
};

export default SupplyChainPage;
