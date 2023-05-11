import Sequelize from "sequelize";
import database from  './database.js';

const log_in = database.define('log_ins',{
    id: {
        type: Sequelize.INTEGER,
        autoIncerement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    } ,
        
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin:Sequelize.BOOLEAN
})

export default log_in;