import { Sequelize } from "sequelize";

const dbLat = new Sequelize(
    'db_lat',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

export default dbLat;