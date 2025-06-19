import connection from '../connection/db.connect.js';
import { DataTypes } from 'sequelize.js';


const Pagamento = connection.define(
  'Pagamento',
  {
   id_pagamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
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



export default Pagamento;