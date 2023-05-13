import  Sequelize  from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const connection = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.USERNAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT
    }
);

export default connection;



