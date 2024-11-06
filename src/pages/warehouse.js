// src/Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import './manufacturing.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Warehouse = () => {

   
        const [dropdownVisible, setDropdownVisible] = useState(false);
      
        const handleDropdownToggle = () => {
          setDropdownVisible(!dropdownVisible);
        };





        const [activeTab, setActiveTab] = useState('resourceTracking');

        const content = {
          resourceTracking: {
            title: 'Material Tracking & Resource Optimization',
            description: [
              'Detect defects instantly with automated quality checks.',
              'Optimize workflows and reduce bottlenecks.',
              'Get alerts for predictive maintenance before breakdowns.'
            ],
            image: 'warehouse_1.png'
          },
          riskManagement: {
            title: 'Workplace Safety & Risk Management',
            description: [
              'Real-time hazard detection like missing PPE.',
              'Monitor worker activity to prevent accidents.',
              'Track safety compliance automatically.'
            ],
            image: 'warehouse_2.png' // Replace with your image URL or import it
          },
          smartAutomation: {
            title: 'Smart Automation for Productivity',
            description: [
              'Detect defects instantly with automated quality checks.',
              'Optimize workflows and reduce bottlenecks.',
              'Get alerts for predictive maintenance before breakdowns..'
            ],
            image: 'warehouse_3.png'
          },
          dataDrivenInsights: {
            title: 'Data Driven Insights & Remote Monitoring',
            description: [
              'Visualize live production data instantly.',
              'Optimize processes with actionable insights.',
              'Remote factory monitoring anytime, anywhere.'
            ],
            image: 'warehouse_4-2.png'
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
    <img src="123456.png" alt="Product Line" />
  </div>
  <div className="content-mirrored">
    <h1>Elevate Your Inventory<br /> to New Heights</h1>
    <h4 style={{ fontWeight: '300' }}>
    Master your workflow with data-driven insights that unlock efficiency, reduce errors, and transform stock management.
    </h4>
    <button className="know-more-btn">Explore now</button>
  </div>
    </div>






    <div className="centered-section">
        <h2>See Your Storage Solutions Transformed</h2>
        <h6>Explore how innovative insights can optimize your space and enhance overall efficiency.</h6>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kCouvttSdQs?si=ABfmB8_kXmtJ4V7f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    <h1 className="title2">Our Story in Numbers</h1>
  </header>

  <div className="statistics-container2">
    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+30%</h2>
      <p className="statistic-description21">Inventory</p>
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
        <h1 className="title3">Maximize Warehouse Performance Using Argus</h1>
        <button className="connect-button3">Connect Now</button>
      </div>

      <div className="card-container3">
        <div className="card3">
          <div className="icon3">✒️</div>
          <h3 className="card-title3">Smart Space Utilization for optimal storage efficiency.​</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚓</div>
          <h3 className="card-title3">
          Inventory Transparency for precise control</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚡</div>
          <h3 className="card-title3">
          Automated Order Processing for faster, accurate picking.</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">🌐</div>
          <h3 className="card-title3">Dynamic Management for Real-Time Task allocation.</h3>
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

export default Warehouse;
