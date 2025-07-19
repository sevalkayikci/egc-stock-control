import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import sequelize from './config/database.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'; 
import locationRoutes from './routes/locationRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: "https://https://egc-stok-kontrol.netlify.app",
  credentials: true
}));


app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/stocks', stockRoutes);

app.get('/', (req, res) => {
  res.send('CafeStock API çalışıyor!');
});

sequelize.authenticate()
  .then(() => {
    console.log('✅ Veritabanına başarıyla bağlanıldı.');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("📦 Tablolar senkronize edildi.");
    app.listen(PORT, () => {
      console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Veritabanı bağlantı hatası:', err);
  });
