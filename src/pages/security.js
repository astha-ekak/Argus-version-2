import React, { useState } from 'react';
import './supplychain.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Security = () => {

   
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
        THE SECURE SHORE</p>
        <h1 className="supply-title">Security & Surveillance <br/>with Environment<br />
Monitoring</h1>
        <p className="supply-description">
        Integrating intelligent monitoring and advanced analytics to safeguard assets and ensure safety. Our solutions provide real-time threat detection,<br /> automated alerts, and actionable insights to prevent incidents, reduce risks, and enhance situational awareness, delivering peace of mind and robust<br /> protection for businesses and communities.
        </p>
      </div>
    </div>






 
    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="sevurity1.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>BOOST SAFETY PROTOCOL COMPILANCE BY 35%</h1>
    <h4 style={{ fontWeight: '300' }}>
    Reduce the risk of non compliance fines by 30% with enhanced<br /> adherence strategies.
    </h4>
    <ul className="featuresSupply">
    <li>Monitor real-time, Safety compliance.</li>
    <li>Reduce the risk of costly accident and fines.</li>
    </ul>
  </div>
</div>

  







    <div className="container">
      <div className="content">
      <h1>DECREASE THEFT INCIDENT BY 50% WITH<br /> REAL-TIME MONITORING</h1>
       <h4 style={{fontWeight:'300'}}>Strengthen site security and protect assets with continuous<br /> surveillance.</h4>
        <ul className="features">
          <li>Smart vision to prevent theft.</li>
          <li>Ensure that workers & equipment
          are secure</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="security2.png" alt="Product Line" />
        
      </div>
    </div>




    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="security3.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>ENSURE A SAFE WORKPLACE WITH CONTINUOS<br /> MONITORING</h1>
    <h4 style={{ fontWeight: '300' }}>
    Monitoring environmental parameters to maintain a healthy<br /> and secure working environment.
    </h4>
    <ul className="featuresSupply">
    <li>Continuously track environmental factors</li>
    <li>Ensure site compliance and safety</li>
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

export default Security;
