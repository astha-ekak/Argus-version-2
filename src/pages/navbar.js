// src/Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Navbar = () => {

   
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

    {/* Section below the navbar */}
    <section className="main-section">
      <div className="content-container">
        <div className="row">
          <h1 className="heading">REDEFINING INDUSTRIES WITH AI POWERED INNOVATIONS</h1>
          <p className="subheading ">Argus by Ekak Innovations leverages AI and computer vision to transform industries, boost efficiency, cut costs, and streamline operations. Focused on traceability, Argus offers visibility and quality control throughout the product lifecycle, empowering organizations across all sectors to optimize processes.</p>
        </div>
        
        <div className="row">
          <button className="level-up-btn">Level Up Now</button>
        </div>
      </div>
    </section>

    <section className="cards1-section">
      <h2 className="cards1-heading">Upgrade your Industries with Smart Solution</h2>
      <div className="cards1-container">
        <div className="card1">
          <h3 className="card1-heading">Traceability</h3>
          <p className="card1-paragraph">Boosts visibility, enables real-time tracking, ensures compliance, reduces wastage, improves recalls, and strengthens quality control, while building trust and providing insights.</p>
          <img src="Traceability (Homepage Argus).png" alt="Card 1" className="card-image"  style={{width:'100%',marginTop:'20px',borderRadius:'15px'}}/>
        </div>
        <div className="card1">
          <h3 className="card1-heading">Productivity</h3>
          <p className="card1-paragraph">Increases defect detection rates, automates quality checks, improves inventory turnover, reduces downtime, accelerates turnaround times,strengthens operations, and ensures consistent performance across all sectors.</p>
          <img src="Productivity (Homepage Argus).png" alt="Card 2" className="card-image " style={{width:'100%',marginTop:'20px',borderRadius:'15px'}} />
        </div>
        <div className="card1">
          <h3 className="card1-heading">Safety</h3>
          <p className="card1-paragraph">Lowers accident-related expenses by automating safety checks, detecting hazards in real-time, and ensuring compliance, leading to a safer, more efficient work environment.</p>
          <img src="Safety (Homepage Argus).png" alt="Card 3" className="card-image" style={{width:'100%',marginTop:'20px',borderRadius:'15px'}}/>
        </div>
      </div>
    </section>

    {/* Heading section */}
    <div class="heading-section">
  <h2>"Production floors are the heartbeat of operations—<span class="highlight">optimizing this space maximizes overall efficiency."</span></h2>
</div>

<div className="container">
      <div className="content">
        <h1>ACHIEVE END-TO-END VISIBILITY</h1>
        
        <div className="visibility">
          <h2>99.9%</h2>
          <p>Product Visibility</p>
        </div>
        
        <hr className="hr-line" />
        
        <div className="tracking">
          <h2>24/7</h2>
          <p>Real-Time Material Tracking</p>
        </div>
        
        <ul className="features">
          <li>Full product traceability with DPP.</li>
          <li>Real-time defect detection, reducing waste.</li>
          <li>Automated compliance for easy audits.</li>
          <li>Lower costs with optimized processes.</li>
          <li>Track recyclables for sustainability.</li>
          <li>Data-driven insights for smarter decisions.</li>
        </ul>
        
        <a href="#more" className="know-more">
          KNOW MORE <span>&rarr;</span>
        </a>
      </div>
      
      <div className="image-section">
        <img src="Complete Product Tracking.png"  />
       
      </div>
    </div>

    


    <div className="container-mirrored">
      <div className="image-section-mirrored">
        <img src="Productivity 2.png" alt="Product Line" />
      </div>
      <div className="content-mirrored">
        <h1>EASY SAFETY CHECK</h1>
        <div className="visibility">
          <h2>50%</h2>
          <p>Reduction in Safety Incident</p>
        </div>
        <hr className="hr-line-mirrored" />
        <div className="tracking">
          <h2>65%</h2>
          <p>Faster Compliance Check</p>
        </div>
        <ul className="features">
          <li>Fewer production delays and reduced rework costs.</li>
          <li>Less manual oversight, freeing up resources.</li>
          <li>Lower waste, leading to better inventory management.</li>
          <li>Lower costs with optimized processes.</li>
          <li>Reduced downtime, increased operational efficiency.</li>
          <li>Smarter decisions with real-time insights, driving better outcomes.</li>
        </ul>
        <a href="#more" className="know-more">
          KNOW MORE <span>&rarr;</span>
        </a>
      </div>
    </div>
     




     
    <div className="container">
      <div className="content">
        <h1>PRODUCT DESCRIPTION #3</h1>
        <div className="visibility">
          <h2>70%</h2>
          <p>Faster Operations</p>
        </div>
        <hr className="hr-line" />

        <div className="tracking">
          <h2>60%</h2>
          <p>Reduction in Operational Delays</p>
        </div>
        <ul className="features">
          <li>Faster production means quicker deliveries.</li>
          <li>Less manual work lets staff focus on key tasks.</li>
          <li>Better batch & lot tracking reduces costs.</li>
          <li>Lower costs with optimized processes.</li>
          <li>Optimized workforce boosts efficiency.</li>
          <li>Streamline operations, unlock new revenue opportunities</li>
        </ul>
        <a href="#more" className="know-more">
          KNOW MORE <span>&rarr;</span>
        </a>
      </div>
      <div className="image-section">
        <img src="Safety 2.png" alt="Product Line" />
        
      </div>
    </div>



    <div className="App">
      <header className="header">
        <h1>UNLOCK YOUR BUSINESS POTENTIAL</h1>
      </header>

      <div className="card-container">
        <div className="card">
          <div className="icon">
            
            <img src="https://via.placeholder.com/50" alt="Icon 1" />
          </div>
          <h2>Lower operational costs.</h2>
          <p>
            Minimize operational costs by reducing waste & enhancing resource efficiency.
          </p>
        </div>
        
        <div className="card">
          <div className="icon">
            
            <img src="https://via.placeholder.com/50" alt="Icon 2" />
          </div>
          <h2>Boosted ROI</h2>
          <p>
            Maximize your profit through enhanced efficiency and reduced costs.
          </p>
        </div>

        <div className="card">
          <div className="icon">
          
            <img src="https://via.placeholder.com/50" alt="Icon 3" />
          </div>
          <h2>Faster time-to-market.</h2>
          <p>
            Seize the Market opportunities and outpace your competitors.
          </p>
        </div>
      </div>
    </div>   

    <hr></hr>



    <div className="app-container">
      <header className="app-header">
        <h1 className="title">The Numbers</h1>
      </header>

      <div className="statistics-container">
        <div className="statistic-card">
          <h2 className="statistic-percentage">20%</h2>
          <div className="card-divider"></div>
          <p className="statistic-description">Operations Cost Reduce</p>
        </div>

        <div className="statistic-card">
          <h2 className="statistic-percentage">50%</h2>
          <div className="card-divider"></div>
          <p className="statistic-description">Production Increase</p>
        </div>

        <div className="statistic-card">
          <h2 className="statistic-percentage">40%</h2>
          <div className="card-divider"></div>
          <p className="statistic-description">Increased Throughput</p>
        </div>

        <div className="statistic-card">
          <h2 className="statistic-percentage">30%</h2>
          <div className="card-divider"></div>
          <p className="statistic-description">Accelerate time-to-market</p>
        </div>
      </div>
    </div>
<Footer />


  </div>

);
};

export default Navbar;
