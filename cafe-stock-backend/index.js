import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import sequelize from './config/database.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'; 
import locationRoutes from './routes/locationRoutes.js';
import stockRoutes from './routes/stockRoutes.js';

// .env dosyasını oku
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS ayarı
app.use(cors({
  origin: 'https://egc-stok-kontrol.netlify.app', // Netlify frontend
  credentials: true
}));

app.use(express.json());

// API rotaları
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/stocks', stockRoutes);

app.get('/', (req, res) => {
  res.send('✅ CafeStock API çalışıyor!');
});

// Veritabanı bağlantısı ve sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Veritabanına başarıyla bağlanıldı.');

    await sequelize.sync({ alter: false }); // Dikkat: production'da "alter: false" önerilir
    console.log("📦 Tablolar senkronize edildi.");

    app.listen(PORT, () => {
      console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error('❌ Veritabanı bağlantı hatası:', err);
  }
})();
