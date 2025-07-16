import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Location = sequelize.define('Location', {
  name: { type: DataTypes.STRING, allowNull: false }
});

export default Location;
