import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import ScanBarcode from './components/ScanBarcode.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan-barcode" element={<ScanBarcode />} />
      </Routes>
    </Router>
  );
};

export default App;
