import { DataTypes, Model } from "sequelize";
import { DBConnection } from "../config.js";
import bcrypt from "bcrypt";

export class User extends Model {
  // Add a method to compare passwords during authentication
  comparePassword = async (password) => {
    return bcrypt.compare(password, this.password);
  };
}

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
      // Add a setter to hash the password before saving
      set(value) {
        const hashedPassword = bcrypt.hashSync(value, 10);
        this.setDataValue("password", hashedPassword);
      },
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

