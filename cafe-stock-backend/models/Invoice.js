import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Product from './Product.js';

const Invoice = sequelize.define('Invoice', {
  filePath: { type: DataTypes.STRING, allowNull: false },
  supplier: { type: DataTypes.STRING, allowNull: false },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  invoiceDate: { type: DataTypes.DATEONLY, allowNull: false }
});

Invoice.belongsTo(Product, { foreignKey: 'productId' });

export default Invoice;
