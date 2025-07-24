import React, { useEffect, useState } from 'react';
import '../styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Hata:", err));
  }, []);

  return (
    <div className="product-list-page">
      <h2>Ürünler</h2>
      <ul className="product-list">
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.stock} {p.unit} - {p.area}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
