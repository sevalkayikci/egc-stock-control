import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AddProduct.css';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [unit, setUnit] = useState('');
  const [stock, setStock] = useState('');
  const [minLevel, setMinLevel] = useState('');
  const [barcode, setBarcode] = useState('');

  const [locations, setLocations] = useState([]);

  const units = ['adet', 'kg', 'lt', 'ml', 'kutu', 'şişe'];

  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase.from('locations').select('*');
      if (error) {
        console.error('Konumlar alınamadı:', error);
      } else {
        setLocations(data);
      }
    };

    fetchLocations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      category,
      location,
      unit,
      stock: parseFloat(stock),
      minLevel: parseFloat(minLevel),
      barcode
    };

    try {
      await axios.post('https://egc-stock-control.onrender.com/api/products', productData);
      alert('✅ Ürün başarıyla eklendi!');
      setName('');
      setCategory('');
      setLocation('');
      setUnit('');
      setStock('');
      setMinLevel('');
      setBarcode('');
    } catch (error) {
      console.error('Ürün eklenemedi:', error);
      alert('❌ Ürün eklenirken hata oluştu.');
    }
  };

  return (
    <div className="add-product-page">
      <h2>Yeni Ürün Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ürün Adı"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Kategori"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <select value={location} onChange={(e) => setLocation(e.target.value)} required>
          <option value="">Depo/Bölge Seç</option>
          {locations.map((loc) => (
            <option key={loc.id} value={loc.name}>
              {loc.name}
            </option>
          ))}
        </select>

        <select value={unit} onChange={(e) => setUnit(e.target.value)} required>
          <option value="">Birim (adet, kg...)</option>
          {units.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Stok Miktarı"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Minimum Seviye"
          value={minLevel}
          onChange={(e) => setMinLevel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Barkod"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default AddProduct;
