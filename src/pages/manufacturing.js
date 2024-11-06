// src/Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import './manufacturing.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Navbar = () => {

   
        const [dropdownVisible, setDropdownVisible] = useState(false);
      
        const handleDropdownToggle = () => {
          setDropdownVisible(!dropdownVisible);
        };





        const [activeTab, setActiveTab] = useState('resourceTracking');

        const content = {
          resourceTracking: {
            title: 'INVENTORY ACCURACY & STOCK VISIBILITY',
            description: [
              'Conduct regular stock checks with minimal manual effort',
              'Monitor stock movement across zones and facilities.',
              'Enable seamless scanning and tracking for quick updates.'
            ],
            image: '100001548.jpeg' 
          },
          riskManagement: {
            title: 'EFFICIENT SPACE UTILIZATION & LAYOUT UTILIZATIONS',
            description: [
              'Identify Underutilized Areas and Rearrange Inventory for better flow.',
              'Adjust Product Placement based on demand trends and retrieval frequency.',
              'Detect Congested zones and prevent Bottlenecks in operations.'
            ],
            image: 'manufacturing 4.jpg' 
          },
          smartAutomation: {
            title: 'IMPROVING PICKING & PACKING OPERATIONS',
            description: [
              'Provide Real-Time Instructions for quick and accurate order picking.',
              'Identify Discrepancies before dispatch, reducing returns.',
              'Automate Sorting of high-priority orders for faster processing.'
            ],
            image: 'manufacturing 3.jpg' // Replace with your image URL or import it
          },
          dataDrivenInsights: {
            title: 'SAFETY ANALYTICS',
            description: [
              'Monitor areas for unsafe practices, like blocked aisles or high-risk activities.',
              'Monitor Productivity and Forecast Demand for efficient replenishment.',
              'Ensure workers wear proper safety gear through Automated Monitoring.'
            ],
            image: 'manufacturing 2.jpg'
          }
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






    <div className="container-mirrored">
  <div className="image-section-mirrored">
    <img src="Manufacturing 1.png" alt="Product Line" />
  </div>
  <div className="content-mirrored">
    <h1>Transform<br />
Operations <br />
Beyond the Line</h1>
    <h4 style={{ fontWeight: '300' }}>
    Unlock the power of smart insights to optimize every facet of your manufacturing process.
    </h4>
    <button className="know-more-btn">Know More</button>
  </div>
    </div>






    <div className="centered-section">
        <h2>See Smarter Manufacturing in Motion</h2>
        <h6>Empower your production floor with intelligent safety measures and seamless automation that drive performance.</h6>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kCouvttSdQs?si=cE3Lc_vD7nqExstz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>

       





<div className="app2">
  <div className="tabs2">
    {Object.keys(content).map((tabKey) => (
      <button
        key={tabKey}
        className={`tab2 ${activeTab === tabKey ? 'active2' : ''}`}
        onClick={() => setActiveTab(tabKey)}
      >
        {content[tabKey].title.split(' & ')[0]}
      </button>
    ))}
  </div>

  <div className="content2">
    <div className="text-column2">
      <h2>{content[activeTab].title}</h2>
      <hr />
      <p>
        {content[activeTab].description.map((desc, index) => (
          <div key={index}>• {desc}</div>
        ))}
      </p>
    </div>
    <div className="image-column2">
      <img src={content[activeTab].image} alt={content[activeTab].title} />
    </div>
  </div>
</div>






<div className="app-container2">
  <header className="app-header2">
    <h1 className="title2">Industry Insights by the Numbers</h1>
  </header>

  <div className="statistics-container2">
    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+20%</h2>
      <p className="statistic-description21">Overall Productivity</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Through Automation</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">-50%</h2>
      <p className="statistic-description21">Defect Rate</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">With Quality Control System</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+15%</h2>
      <p className="statistic-description21">Overall Equipment Effectiveness</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">With Predictive Maintenance</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">-30%</h2>
      <p className="statistic-description21">Lead Time Reduction</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Through Streamline Process</p>
    </div>
  </div>
</div>







<div className="app-container3">
      <div className="content3" style={{textAlign:'left'}}>
        <h1 className="title3">Optimize Manufacturing Efficiency with Argus</h1>
        <button className="connect-button3">Connect Now</button>
      </div>

      <div className="card-container3">
        <div className="card3">
          <div className="icon3">✒️</div>
          <h3 className="card-title3">Seamless Integration into your Production System</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚓</div>
          <h3 className="card-title3">Real-Time Alert for Proactive Management</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚡</div>
          <h3 className="card-title3">Comprehensive Traceability to ensure High Quality</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">🌐</div>
          <h3 className="card-title3">Operational Excellence with reduced downtime</h3>
        </div>
      </div>
    </div>




    <div className="heading-container">
      <h1 className="responsive-heading">Be the First to Receive<br/> the Latest Updates. </h1>
    </div>






  
    <Footer />



</div>

);
};

export default Navbar;
