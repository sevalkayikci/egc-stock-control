import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Product from './Product.js';
import Location from './Location.js';
import User from './User.js';

const StockMovement = sequelize.define('StockMovement', {
  type: { type: DataTypes.ENUM('in', 'out'), allowNull: false },
  quantity: { type: DataTypes.FLOAT, allowNull: false }
},
{
  schema: 'egc'
});


// İlişkiler
StockMovement.belongsTo(Product, { foreignKey: 'productId' });
StockMovement.belongsTo(Location, { foreignKey: 'locationId' });
StockMovement.belongsTo(User, { foreignKey: 'userId' });

export default StockMovement;
