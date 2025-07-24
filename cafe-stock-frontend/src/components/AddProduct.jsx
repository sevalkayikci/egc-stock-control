import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css'; // Stil dosyan varsa

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [barcode, setBarcode] = useState('');
  const [stock, setStock] = useState('');
  const [minLevel, setMinLevel] = useState('');
  const [unit, setUnit] = useState('');

  // Sabit birim listesi
  const units = ['adet', 'kg', 'lt', 'ml', 'kutu', 'şişe'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      category,
      barcode,
      stock: parseFloat(stock),
      minLevel: parseFloat(minLevel),
      unit
    };

    try {
      await axios.post('https://egc-stock-control.onrender.com/api/products', productData);
      alert('Ürün başarıyla eklendi!');
      // Formu sıfırla
      setName('');
      setCategory('');
      setBarcode('');
      setStock('');
      setMinLevel('');
      setUnit('');
    } catch (error) {
      console.error('Ürün eklenirken hata oluştu:', error);
      alert('Ürün eklenemedi!');
    }
  };

  return (
    <div className="form-container">
      <h2>Ürün Ekle</h2>
      <form onSubmit={handleSubmit}>
        <label>Ürün Adı</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Kategori</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />

        <label>Barkod</label>
        <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} />

        <label>Stok</label>
        <input type="number" step="any" value={stock} onChange={(e) => setStock(e.target.value)} required />

        <label>Minimum Seviye</label>
        <input type="number" step="any" value={minLevel} onChange={(e) => setMinLevel(e.target.value)} />

        <label>Birim</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value)} required>
          <option value="">Seçiniz</option>
          {units.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>

        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default AddProduct;
