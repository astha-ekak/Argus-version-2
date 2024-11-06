import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';  
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com'; 
import Footer from './Footer';

import './navbar.css'; 
import './contact.css';

const Contact = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [padding, setPadding] = useState('50px');

    const handleDropdownToggle = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Adjust padding for responsiveness
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setPadding('20px'); // Smaller padding for mobile screens
            } else if (screenWidth < 1024) {
                setPadding('30px'); // Medium padding for tablets
            } else {
                setPadding('50px'); // Larger padding for desktops
            }
        };

        // Initialize padding on load and on resize
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        userType: '',
        companyName: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
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

            {/* Main content */}
            <div className='main_content' style={{ maxWidth: '100%', margin: '0 auto', padding }}>
                <h1 style={{ fontSize: '98px', fontWeight: 'bold' }}>Get in Touch</h1>
                <p  style={{ fontStyle: 'italic', color: '#666' }}>
                    Where innovation powers automation for a smarter tomorrow. Ready to begin
                </p>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label>First name (Required)</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Last name (Required)</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Email (Required)</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Phone (Required)</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>User Type (Required)</label>
                        <select
                            name="userType"
                            value={formData.userType}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        >
                            <option value="">Choose one</option>
                            <option value="Individual">Individual</option>
                            <option value="Company">Company</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '15px',
                            backgroundColor: '#333',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Submit
                    </button>
                </form>

                <div style={{ marginTop: '40px' }}>
                    <img
                        src="your-image-url-here"
                        alt="Company Location"
                        style={{
                            width: '100%',
                            borderRadius: '10px',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>
            <Footer /> {/* Footer component */}
        </div>
    );
}

export default Contact;
