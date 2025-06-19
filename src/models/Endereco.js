import connection from '../connection/db.connect.js';
import { DataTypes } from 'sequelize';

const Endereco = connection.define(
  'Endereco',
  {
   id_endereco: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rua: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bairro: {
    type: DataTypes.STRING,
     allowNull: false
  },
  cidade: {
    type: DataTypes.STRING,
     allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
     allowNull: false
  },
  cep: {
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

export default Endereco;