import Location from '../models/Location.js';

export const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.findAll();
        res.status(200).json(locations);
    } catch (error) {
        console.error('❌ Hata:', error);
        res.status(500).json({ message: 'Sunucu hatası' });
    }
    }

export const createLocation = async (req, res) => {
    const { name } = req.body;
    try {
        const newLocation = await Location.create({ name });
        res.status(201).json(newLocation);
    } catch (error) {
        console.error('❌ Hata:', error);
        res.status(500).json({ message: 'Sunucu hatası' });
    }
}

export const updateLocation = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const location = await Location.findByPk(id);
        if (!location) {
            return res.status(404).json({ message: 'Konum bulunamadı' });
        }
        location.name = name;
        await location.save();
        res.status(200).json(location);
    } catch (error) {
        console.error('❌ Hata:', error);
        res.status(500).json({ message: 'Sunucu hatası' });
    }
}

