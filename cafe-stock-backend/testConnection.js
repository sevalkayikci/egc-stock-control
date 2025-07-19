import sequelize from './config/database.js';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Veritabanına başarıyla bağlanıldı.');
  } catch (error) {
    console.error('❌ Veritabanı bağlantı hatası:', error);
  }
})();