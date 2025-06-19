import connection from '../connection/db.connect.js';
import { DataTypes } from 'sequelize.js';
import Cliente from './Cliente.js';
import Endereco from './Endereco.js';
import Motorista from './Motorista.js';
import Produto from './Produto.js';
import Pagamento from './Pagamento.js';

const Pedido = connection.define(
  'Pedido',
  {
   id_pedido: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data_hora: {
    type: DataTypes.DATE,
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

Pedido.hasOne(Cliente, { foreignKey: 'idCliente' })
Pedido.hasOne(Endereco, { foreignKey: 'idEndereco' })
Pedido.hasOne(Motorista, { foreignKey: 'idMotorista' })
Pedido.hasOne(Produto, { foreignKey: 'idProduto' })
Pedido.hasOne(Pagamento, { foreignKey: 'idPagamento' })


export default Pedido;