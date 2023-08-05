import { Sequelize } from "sequelize";
class Database {
  #connection;

  constructor() {

  }

  connect() {
    this.#connection = new Sequelize("auth", "postgres", "root", {
      host: "localhost",
      port: 5434,
      dialect: "postgres"
    });
    return this.#connection;
  }

  close() {
    this.#connection.close();
  }
}

export const DBConnection = new Database().connect();
