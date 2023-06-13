import Sequelize from "sequelize";
import database from  './database.js';

const log_in = database.define("log_ins", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreasement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  admin: Sequelize.BOOLEAN,
});

export default log_in;