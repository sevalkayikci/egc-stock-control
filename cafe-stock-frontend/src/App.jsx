import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import ScanBarcode from './components/ScanBarcode.jsx';
import AddProduct from './components/AddProduct.jsx';
import LocationList from './components/LocationList.jsx';
import ProductList from './components/ProductList.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan-barcode" element={<ScanBarcode />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/list-products" element={<ProductList />} />
        <Route path="/list-locations" element={<LocationList />} />
      </Routes>
    </Router>
  );
};

export default App;
