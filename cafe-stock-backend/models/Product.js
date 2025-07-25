import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  area: { type: DataTypes.ENUM('bar', 'mutfak', 'salon'), allowNull: false },
  unit: { type: DataTypes.STRING, allowNull: false },
  stock: { type: DataTypes.FLOAT, defaultValue: 0 },
  minLevel: { type: DataTypes.FLOAT, defaultValue: 0 },
  barcode: {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true
}

},
{
  schema: 'egc'
});

export default Product;
