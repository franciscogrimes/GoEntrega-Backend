import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

const connection = new Sequelize(dbConfig)


export default connection;