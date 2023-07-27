import { DataTypes, Model } from "sequelize";
import { DBConnection } from "../config.js";

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: DBConnection,
    modelName: "users",
  }
);

(async () => {
  await DBConnection.sync({ force: true });
})();

export const UserModel = new User();
