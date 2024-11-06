import React, { useState } from 'react';
import './supplychain.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Smart = () => {

   
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
        <p className="supply-subheading">
        THE STOCK BLOCK</p>
        <h1 className="supply-title">Automated Inventory Management</h1>
        <p className="supply-description">
        Optimizing stock control with real-time tracking and data-driven insights to reduce overstock, prevent stockouts, and minimize carrying costs.<br/> Our solutions streamline inventory workflows, improve demand forecasting, and automate replenishment, ensuring the right products are<br /> available at the right time for seamless operations.
        </p>
      </div>
    </div>





    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="smart1.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
  <h1>CUT LABOR COST BY 30% OF AUTOMATION</h1>
  <h4 style={{fontWeight:'300'}}>Save 25-30% on manual labour through Automated Inventory Tracking.</h4>
    <ul className="featuresSupply">
    <li>Team spend less time in searching
          item to fulfil order.</li>
          <li>Reducing the reliance on costly,
          unplanned repair.</li>
    </ul>
  </div>
</div>

 








    <div className="container">
      <div className="content">
      <h1>INCREASE ORDER FULFILLMENT SPEED BY 30%</h1>
       <h4 style={{fontWeight:'300'}}>Enhance logistics efficiency by 40% using smart warehousing solution. </h4>
        <ul className="features">
          <li>Quickly locate and fulfil rush order</li>
          <li>Impress clients with prompt service.</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="smart2.png" alt="Product Line" />
        
      </div>
    </div>





    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="smart3.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
  <h1>ACHEIVE 98% ACCURACY IN INVENTORY SORTING</h1>
  <h4 style={{fontWeight:'300'}}>Reduce operational error by 60% with precise Automated System.</h4>
    <ul className="featuresSupply">
    <li>Avoid the frustration of misplaced productsduring Rush hour.</li>
          <li>Reducing the reliance on costly,
          unplanned repair.</li></ul>
  </div>
</div>









    <div className="heading-container">
      <h1 className="responsive-heading">Be the First to Receive<br/> the Latest Updates. </h1>
    </div>






  
    <Footer />
  </div>

);
};

export default Smart;
