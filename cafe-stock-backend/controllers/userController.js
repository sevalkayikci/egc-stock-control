import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// örnek login fonksiyonu
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ user: { id: user.id, role: user.role } }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existing = await User.findOne({ where: { username } });
    if (existing) return res.status(400).json({ message: 'Kullanıcı zaten var' });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashed, role });

    res.status(201).json({ message: 'Kayıt başarılı', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
};
