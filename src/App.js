// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar';
import SupplyChainPage from './pages/supplychain';
import Predictive from './pages/Predictive';
import Security from './pages/security';
import Smart from './pages/smart';
import Enhanced from './pages/enhanced';
import Manufacturing from './pages/manufacturing';
import Warehouse from './pages/warehouse';
import Retail from './pages/retail';
import Construction from './pages/construction';
function App() {
  return (
    <Router>
    
    <Routes>
    <Route path="/" element={<Navbar />} />
    
        <Route path="/supplychain" element={<SupplyChainPage />} />
        <Route path="/Predictive" element={<Predictive />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/Smart" element={<Smart />} />
        <Route path="/Enhanced" element={<Enhanced />} />
        <Route path="/Manufacturing" element={<Manufacturing />} />
        <Route path="/Warehouse" element={<Warehouse />} />
        <Route path="/Retail" element={<Retail />} />
        <Route path="/Construction" element={<Construction />} />
        {/* Add other routes here */}
    </Routes>
</Router>

  );
}

export default App;
