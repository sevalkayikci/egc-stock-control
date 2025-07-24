import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/AddProduct.css';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    area: '',
    unit: '',
    stock: '',
    minLevel: '',
    barcode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('🎉 Ürün başarıyla eklendi!');
        setFormData({ name: '', category: '', area: '', unit: '', stock: '', minLevel: '', barcode: '' });
      } else {
        toast.error('🚫 Ürün eklenemedi.');
      }
    } catch (error) {
      console.error('Hata:', error);
      toast.error('💥 Sunucu hatası.');
    }
  };

  return (
    <div className="add-product-page">
      <h2>Yeni Ürün Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Ürün Adı" value={formData.name} onChange={handleChange} required />
        <input name="category" placeholder="Kategori" value={formData.category} onChange={handleChange} />
        <input name="area" placeholder="Depo/Bölge" value={formData.area} onChange={handleChange} />
        <input name="unit" placeholder="Birim (adet, kg...)" value={formData.unit} onChange={handleChange} />
        <input name="stock" placeholder="Stok Miktarı" type="number" value={formData.stock} onChange={handleChange} />
        <input name="minLevel" placeholder="Minimum Seviye" type="number" value={formData.minLevel} onChange={handleChange} />
        <input name="barcode" placeholder="Barkod" value={formData.barcode} onChange={handleChange} required />
        <button type="submit">Ekle</button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default AddProduct;
