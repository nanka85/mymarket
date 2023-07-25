import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5434,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: ["src/*.js"],
    logging: true,
    synchronize: true,
})