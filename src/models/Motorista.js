import connection from '../connection/db.connect.js';
import { DataTypes } from 'sequelize.js';


const Motorista = connection.define(
  'Motorista',
  {
   id_motorista: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_motorista: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cnh: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  telefone: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
  {
    tableName: 'endereco',  
    freezeTableName: true,
    timestamps: true,   
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);



export default Motorista;