import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Location = sequelize.define('Location', {
  name: { type: DataTypes.STRING, allowNull: false }
},
{
  schema: 'egc'
});



export default Location;
