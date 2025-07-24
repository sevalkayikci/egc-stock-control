import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import './styles/ScanBarcode.css';

const ScanBarcode = () => {
  const [barcode, setBarcode] = useState(null);
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleDetected = async (err, result) => {
    if (result?.text && result.text !== barcode) {
      setBarcode(result.text);

      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/barcode/${result.text}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          setNotFound(false);
        } else {
          setProduct(null);
          setNotFound(true);
        }
      } catch (error) {
        console.error("API hatası:", error);
        setNotFound(true);
      }
    }
  };

  return (
    <div className="scanner-page">
      <h2>Barkod Oku</h2>
      <BarcodeScannerComponent
        width={400}
        height={300}
        onUpdate={handleDetected}
      />
      {product && (
        <div>
          <h3>Ürün Bilgisi:</h3>
          <p><stron>Ad:</stron> {product.name}</p>
          <p><strong>Barkod:</strong> {product.barcode}</p>
        </div>
      )}
      {notFound && (
        <div>
          <p>Bu barkodla eşleşen ürün bulunamadı.</p>
          <button onClick={() => window.location.href = "/add-product"}>
            Yeni Ürün Olarak Ekle
          </button>
        </div>
      )}
    </div>
  );
};

export default ScanBarcode;
