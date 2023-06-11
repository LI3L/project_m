import Sequelize from "sequelize";
import database from  './database.js';

const movies = database.define('movies',{
    id: {
        type: Sequelize.INTEGER,
        autoIncreasement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    } ,
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sits: {
        type: Sequelize.INTEGER,
    },
});

export default movies;
