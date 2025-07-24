// src/pages/Dashboard.jsx
import React from 'react';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📋 Stok Kontrol Paneli</h1>
      <div className="dashboard-buttons">
        <button onClick={() => navigate('/scan-barcode')}>📷 Barkod Oku</button>
        <button onClick={() => navigate('/add-product')}>➕ Ürün Ekle</button>
        <button onClick={() => navigate('/delete-product')}>🗑️ Ürün Sil</button>
        <button onClick={() => navigate('/list-products')}>📦 Ürünleri Listele</button>
        <button onClick={() => navigate('/list-warehouses')}>🏢 Depoları Listele</button>
      </div>
    </div>
  );
};

export default Dashboard;
