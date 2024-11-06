// src/Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import './manufacturing.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Construction = () => {

   
        const [dropdownVisible, setDropdownVisible] = useState(false);
      
        const handleDropdownToggle = () => {
          setDropdownVisible(!dropdownVisible);
        };





        const [activeTab, setActiveTab] = useState('resourceTracking');

        const content = {
          resourceTracking: {
            title: 'WORKER SAFETY AND ACCIDENT PREVENTION',
            description: [
              'Detect unsafe behaviors and generate instant alerts.',
              'Automate incident tracking for faster response.',
              'Analyze worker patterns to improve safety over time.'
            ],
            image: 'construction .jpg' 
          },
          riskManagement: {
            title: 'ON-TIME DELIVERY & PROJECT EFFICIENCY',
            description: [
              'Track task completion against schedules with live data.',
              'Identify process inefficiencies and resolve them proactively.',
              'Access project metrics anytime, from anywhere.'
              
            ],
            image: 'construction 3.jpg' // Replace with your image URL or import it
          },
          smartAutomation: {
            title: 'SMART AUTOMATION FOR PRODUCTIVITY',
            description: [
              'Monitor equipment and material usage to avoid overspending.',
              'Predict costs based on data trends to manage budgets better.',
              'Identify irregularities in material consumption and time logs.'
              
            ],
            image: 'construction 2.jpg' 
          },
          dataDrivenInsights: {
            title: 'DATA DRIVEN INSIGHTS $ REMOTE MONITORING',
            description: [
              'Visualize live production data instantly.',
              'Optimize processes with actionable insights.',
              'Remote factory monitoring anytime, anywhere.'
            ],
            image: '100001550.jpeg'
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
    <img src="e.png"  alt="Product Line" />
  </div>
  <div className="content-mirrored">
    <h1>Building Efficiency from<br /> the Ground Up</h1>
    <h4 style={{ fontWeight: '300' }}>
    Leverage smart solutions to enhance safety, streamline processes, and drive smarter construction.
    </h4>
    <button className="know-more-btn">Know More</button>
  </div>
    </div>






    <div className="centered-section">
        <h2>See How Technology Enhance Construction</h2>
        <h6>Explore how innovative insights can optimize your space, streamline workflows, and significantly enhance overall efficiency across your operations.</h6>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kUPwOI9fDZM?si=7nJ10n37mY11ToEx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    <h1 className="title2">
    Industry Insights by the Numbers</h1>
  </header>

  <div className="statistics-container2">
    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+25%</h2>
      <p className="statistic-description21">Project Schedule Adherence</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Enhanced Project Management</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">-10%</h2>
      <p className="statistic-description21">Project cost</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Efficient Resource Management</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">+30%</h2>
      <p className="statistic-description21">Labor Productivity</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Personalised Experiences</p>
    </div>

    <div className="statistic-card2">
      <h2 className="statistic-percentage2">-20%</h2>
      <p className="statistic-description21">Material Wastage</p>
      <div className="card-divider2"></div>
      <p className="statistic-description2">Real-Time Monitoring</p>
    </div>
  </div>
</div>







<div className="app-container3">
      <div className="content3" style={{textAlign:'left'}}>
        <h1 className="title3">Enhance Safety and Precision with Argus for Construction</h1>
        <button className="connect-button3">Connect Now</button>
      </div>

      <div className="card-container3">
        <div className="card3">
          <div className="icon3">✒️</div>
          <h3 className="card-title3">
          Error Reduction through tracking tools.​</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚓</div>
          <h3 className="card-title3">Comprehensive Monitoring of Safety and Resources</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">⚡</div>
          <h3 className="card-title3">Progress Visualization for accurate timelines.​</h3>
        </div>
        
        <div className="card3">
          <div className="icon3">🌐</div>
          <h3 className="card-title3">
          Data Insights for informed decisions.</h3>
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

export default Construction;
