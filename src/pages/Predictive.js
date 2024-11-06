import React, { useState } from 'react';
import './supplychain.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Predictive = () => {

   
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
        <p className="supply-subheading">THE ASSEST INSIGHT</p>
        <h1 className="supply-title">Predictive Maintenance &
Machine Performance
Monitoring</h1>
        <p className="supply-description">
        Utilizing advanced analytics and AI to predict equipment failures before they happen, ensuring minimal downtime and maximizing operational<br /> efficiency. Our solutions monitor asset health in real-time, optimize maintenance schedules, reduce costs, and extend equipment lifespan, driving<br /> productivity and business continuity.
        </p>
      </div>
    </div>







    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="predictive1.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>CUT MACHINE DOWNTIME BY 50% WITH PREDICTIVE MAINTENANCE</h1>
    <h4 style={{ fontWeight: '300' }}>
    Implement strategies for continuous operation and minimizing unexpected failures and save thousands in downtime costs.
    </h4>
    <ul className="featuresSupply">
    <li>Catching issues early, preventing halts.</li>
    <li>Save thousands in downtime costs.</li>
    </ul>
  </div>
</div>




    <div className="container">
      <div className="content">
      <h1>BOOST WORKPLACE SAFETY BY 70% WITH EARLY DETECTION</h1>
       <h4 style={{fontWeight:'300'}}>Identify equipment issues early to prevent failures and enhance safety.</h4>
        <ul className="features">
          <li>Zero Accident, Zero Penalty Fines</li>
          <li>Prevent Near Misses effectively</li>
         
        </ul>
        
        
      </div>
      <div className="image-section">
        <img src="predictive2.png" alt="Product Line" />
        
      </div>
    </div>






    <div className="containerSupply">
  <div className="image-sectionSupply">
    <img src="predictive3.png" alt="Product Line" />
  </div>
  <div className="contentSupply">
    <h1>ENHANCE ASSEST LONGEVITY BY 40%</h1>
    <h4 style={{ fontWeight: '300' }}>
    Boost lifespan of equipment by 20-40% through timely maintenance.
    </h4>
    <ul className="featuresSupply">
    <li>Avoid Unnecessary Capital Investment</li>
    <li>Maintain Ideal Operating Condition</li>
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

export default Predictive;
