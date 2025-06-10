import { Sequelize } from "sequelize";

const database = Sequelize("winnicode_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default database;