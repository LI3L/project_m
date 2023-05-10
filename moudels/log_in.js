import Sequelize from "sequelize";
import database from  './database.js';

const log_in = database.define('log_in',{
    id: {
        type: Sequelize.INTEGER,
        autoIncerement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: Sequelize.STRING,
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin:Sequelize.BOOLEAN
})

export default log_in;