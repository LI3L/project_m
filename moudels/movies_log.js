import Sequelize from "sequelize";
import database from  './database.js';

const log_in = database.define('movies',{
    id: {
        type: Sequelize.INTEGER,
        autoIncerement: true,
        allowNull: false,
        primaryKey: true
    },
    movie_title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    } ,
    movie_year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    movie_genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: { 
        type: Sequelize.DATE,
        allowNull: false
    },
    diractor: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    actors: {
        type: Sequelize.STRING,
        allowNull: false
    },
    movie_description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    movie_image: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

export default movies;
