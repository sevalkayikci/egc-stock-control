import Product from '../models/Product.js';

// ✅ Tüm ürünleri listele
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Hata oluştu', error: err.message });
  }
};

// ✅ Yeni ürün ekle
export const createProduct = async (req, res) => {
  try {
    const { name, category, area, unit, stock, minLevel, barcode } = req.body;

    const newProduct = await Product.create({
      name,
      category,
      area,
      unit,
      stock,
      minLevel,
      barcode
    });

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Hata oluştu', error: err.message });
  }
};


// ✅ Ürün güncelle
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Product.update(req.body, { where: { id } });
    res.json({ message: 'Güncellendi', result: updated });
  } catch (err) {
    res.status(500).json({ message: 'Hata oluştu', error: err.message });
  }
};

// ✅ Ürün sil
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.destroy({ where: { id } });
    res.json({ message: 'Silindi' });
  } catch (err) {
    res.status(500).json({ message: 'Hata oluştu', error: err.message });
  }
};

// GET /api/products/barcode/:barcode
export const getProductByBarcode = async (req, res) => {
  try {
    const { barcode } = req.params;
    const product = await Product.findOne({ where: { barcode } });

    if (!product) {
      return res.status(404).json({ message: 'Ürün bulunamadı' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası', error });
  }
};
