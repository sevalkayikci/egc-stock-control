import StockMovement from '../models/StockMovement.js';

export const getAllStockMovements = async (req, res) => {
    try {
        const movements = await StockMovement.findAll();
        res.status(200).json(movements);
    } catch (error) {
        console.error('❌ Hata:', error);
        res.status(500).json({ message: 'Sunucu hatası' });
    }
}

export const createStockMovement = async (req, res) => {
    const { productId, quantity, type, locationId } = req.body;
    try {
        const newMovement = await StockMovement.create({ productId, quantity, type, locationId });
        res.status(201).json(newMovement);
    } catch (error) {
        console.error('❌ Hata:', error);
        res.status(500).json({ message: 'Sunucu hatası' });
    }
}

