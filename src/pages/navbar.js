// src/Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import Button from 'react-bootstrap/Button';
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
      <Button href="/contact" className="contact-btn">CONTACT</Button>
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






    <div className="image-section11">
            <img 
                src="Complete Product Tracking (1515 x 894 px).png"
                alt="Responsive" 
                className="responsive-image11" 
            />
        </div>








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

<div className="container_use_case">
      <div className="text-section_use_case">
        <h2>ACHIEVE END-TO-END VISIBILITY</h2>
        <div className="product-visibility_use_case">
          <h1>99.9%</h1>
          <p>Product Visibility</p>
        </div> <hr></hr>
        <div className="material-tracking_use_case">
          <h2>24/7</h2>
          <p>Real-Time Material Tracking</p>
        </div>
        <ul className="features-list_use_case">
          <li>Full product traceability with DPP.</li>
          <li>Real-time defect detection, reducing waste.</li>
          <li>Automated compliance for easy audits.</li>
          <li>Lower costs with optimized processes.</li>
          <li>Track recyclables for sustainability.</li>
          <li>Data-driven insights for smarter decisions.</li>
        </ul>
        <div className="know_more_text_right">
          <a href="#more" className="know_more_text_text_right">KNOW MORE</a>
          <span className="arrow_text_right">→</span>
        </div>
      </div>
      <div className="image-section_use_case">
        <img src="Complete Product Tracking.png"  className="tracking-image_use_case" />
        
      </div>
    </div>
    


    <div className="container_text_right">
      <div className="image_section_text_right">
        <img src="Productivity 2.png" alt="Product Line" className="tracking_image_text_right" />
      </div>
      <div className="text_section_text_right">
        <h1 className="header_text_right">EASY SAFETY CHECK</h1>
        <div className="product_visibility_text_right">
          <h2 className="percentage_text_right">50%</h2>
          <p className="description_text_right">Reduction in Safety Incident</p>
        </div>
        <hr></hr>
        <div className="material_tracking_text_right">
          <h2 className="availability_text_right">65%</h2>
          <p className="tracking_description_text_right">Faster Compliance Check</p>
        </div>
        <ul className="features_list_text_right">
          <li className="feature_item_text_right">Fewer production delays and reduced rework costs.</li>
          <li className="feature_item_text_right">Less manual oversight, freeing up resources.</li>
          <li className="feature_item_text_right">Lower waste, leading to better inventory management.</li>
          <li className="feature_item_text_right">Lower costs with optimized processes.</li>
          <li className="feature_item_text_right">Reduced downtime, increased operational efficiency.</li>
          <li className="feature_item_text_right">Smarter decisions with real-time insights, driving better outcomes.</li>
        </ul>
        <div className="know_more_text_right">
          <a href="#more" className="know_more_text_text_right">KNOW MORE</a>
          <span className="arrow_text_right">→</span>
        </div>
      </div>
    </div>
     






    <div className="container_use_case">
      <div className="text-section_use_case">
        <h2>STREAMLINE PRODUCTION</h2>
        <div className="product-visibility_use_case">
          <h1>70%</h1>
          <p>Faster Operations</p>
        </div>
        <hr></hr>
        <div className="material-tracking_use_case">
          <h2>60%</h2>
          <p>Reduction in Operational Delays</p>
        </div>
        <ul className="features-list_use_case">
        <li>Faster production means quicker deliveries.</li>
          <li>Less manual work lets staff focus on key tasks.</li>
          <li>Better batch & lot tracking reduces costs.</li>
          <li>Lower costs with optimized processes.</li>
          <li>Optimized workforce boosts efficiency.</li>
          <li>Streamline operations, unlock new revenue opportunities</li>
        </ul>
        <div className="know_more_text_right">
          <a href="#more" className="know_more_text_text_right">KNOW MORE</a>
          <span className="arrow_text_right">→</span>
        </div>
      </div>
      <div className="image-section_use_case">
        <img src="Safety 2.png"  className="tracking-image_use_case" />
        
      </div>
    </div>
    


 



    <div className="App">
      <header className="header">
        <h1>UNLOCK YOUR BUSINESS POTENTIAL</h1>
      </header>

      <div className="card-container">
        <div className="card">
          <div className="icon">
            
            <img src="Icon(1).png" alt="Icon 1" />
          </div>
          <h2>Lower operational costs.</h2>
          <p>
            Minimize operational costs by reducing waste & enhancing resource efficiency.
          </p>
        </div>
        
        <div className="card">
          <div className="icon">
            
            <img src="Icon(2).png" alt="Icon 2" />
          </div>
          <h2>Boosted return-of-investment</h2>
          <p>
            Maximize your profit through enhanced efficiency and reduced costs.
          </p>
        </div>

        <div className="card">
          <div className="icon">
          
            <img src="Icon(3).png" alt="Icon 3" />
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
