import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "./path/to/your/UserModel.js";

// Function to hash the password before saving it to the database
const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

// Function to create a new user and save it to the database
export const createUser = async (firstName, lastName, email, password) => {
  const hashedPassword = hashPassword(password);

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    return user;
  } catch (err) {
    throw new Error("Error creating user");
  }
};

// Function to authenticate a user and generate a JWT token
export const authenticateUser = async (email, password) => {
  try {
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error("Invalid password");
    }

    // Generate a JWT token and return it
    const token = jwt.sign({ userId: user.id }, jwtSecretKey, { expiresIn: "1h" });
    return token;
  } catch (err) {
    throw new Error("Authentication failed");
  }
};

// Function to verify a JWT token and return the user
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, jwtSecretKey);
    const userId = decoded.userId;
    return UserModel.findByPk(userId);
  } catch (err) {
    throw new Error("Invalid token");
  }
};
