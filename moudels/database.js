import  Sequelize  from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const connection = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.USERNAME,
    process.env.PASSWORD,
    {
        dialect: process.env.DIALECT,
        host: process.env.HOST
    }
)

export default connection;



