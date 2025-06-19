import connection from '../connection/db.connect.js';
import { DataTypes } from 'sequelize';

const Cliente = connection.define(
  'Cliente',
  {
    id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'cliente',  
    freezeTableName: true,
    timestamps: true,   
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default Cliente;
