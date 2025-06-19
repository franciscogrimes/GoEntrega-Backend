import connection from '../connection/db.connect.js';
import { DataTypes } from 'sequelize.js';


const Produto = connection.define(
  'Produto',
  {
   id_produto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
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



export default Produto;