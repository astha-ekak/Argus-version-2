import React, { useState } from 'react';
import './supplychain.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Enhanced = () => {

   
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
        <p className="supply-subheading">THE CLIENT HIGHLIGHT</p>
        <h1 className="supply-title">Enhanced Customer <br />Support & Retail Experience</h1>
        <p className="supply-description">
        Delivering personalized, responsive interactions that cater to individual needs and exceed expectations. Our innovative solutions streamline<br /> service, anticipate preferences, and resolve issues swiftly, building stronger relationships, increasing customer satisfaction, and fostering<br /> loyalty for long-term growth
        </p>
      </div>
    </div>






 

    <div className="container-mirrored">
      <div className="image-section-mirrored">
        <img src="Enhanced Customer 2.png" alt="Product Line" />
      </div>
      <div className="content-mirrored">
        <h1>OPTIMIZED THE CHECKOUT PROCESSES</h1>
       <h4 style={{fontWeight:'300'}}>Higher Conversion rate by guiding customer towards key products.</h4>
       <ul className="features">
          <li>Faster checkout, boost efficiency.</li>
          <li>Cut wait times, improve shopping.</li>
         
        </ul>
        
      </div>
    </div>







    <div className="container">
      <div className="content">
      <h1>EXTENDED USER INTERACTION PERIOD</h1>
       <h4 style={{fontWeight:'300'}}>Encouraging longer visits, during higher purchase opportunities.</h4>
        <ul className="features">
          <li>Maximizing sales opportunities</li>
          <li>Better product placement insights</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="Enhanced Customer 1.png" alt="Product Line" />
        
      </div>
    </div>








    <div className="container-mirrored">
      <div className="image-section-mirrored">
        <img src="Enhanced Customer 3.png" alt="Product Line" />
      </div>
      <div className="content-mirrored">
        <h1>OPTIMIZE PRODUCT VISIBILITY BY 15%</h1>
       <h4 style={{fontWeight:'300'}}>Aligning staff resources with peak traffic for smoother operations.</h4>
        <ul className="features">
          <li>Maximizing sales opportunities</li>
          <li>Better Product Placement Insights</li>
         
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

export default Enhanced;
