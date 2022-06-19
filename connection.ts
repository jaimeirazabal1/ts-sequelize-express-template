// @/connection.ts
import { Sequelize } from "sequelize-typescript";

import { Dog } from "./models";

const connection = new Sequelize({
    dialect: "mariadb",
    host: "localhost",
    username: "root",
    password: "",
    database: "ts-sequelize",
    logging: false,
    models: [Dog],
});

export default connection;