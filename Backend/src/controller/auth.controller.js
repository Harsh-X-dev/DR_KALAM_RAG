import db from "../config/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const genrateToken = (user_id) => {
  return jwt.sign({ user_id }, process.env.JWT_SECRATE_KEY, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

export const loginController = async (req, res) => {
  try {

    const { email, password } = req.body;
    
    // check if fileds are present
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // find the user
    const user = await db.users.findUnique({ where: { email } });
    if (!user) {
      return res
        .status(400)
        .json({ message: "No User found. Invalid credentials" });
    }

    // compare the password
    const checkPassword = await bcrypt.compare(password, user.password);

    // if user not found
    if (!checkPassword) {
      return res
        .status(400)
        .json({ message: "No User found. Invalid credentials" });
    }

    // if email and password match then create a token and send to the client
    const token = genrateToken(user.user_id);

    res.cookie("token", token);
    res.status(200).json({
      message: "Login successful",
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Something went wrong...." });
  }
};
export const logoutController = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (token) {
      await db.blacklist.create({
        data: {
          token,
        },
      });
    }
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validate the fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exists
    const alreadyExists = await db.users.findUnique({ where: { email } });

    if (alreadyExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create the user
    const user = await db.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const { password: _, ...userWithoutPassword } = user;

    const token = genrateToken(user.user_id);

    res.cookie("token", token);
    res.status(201).json({
      message: "User created successfully.",
      data: userWithoutPassword,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getUserController = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    if (!user_id) {
      return res
        .status(400)
        .json({ message: "looks like you are not logged in" });
    }

    const user = await db.users.findUnique({
      where: { user_id },
      select: { name: true, email: true, isAdmin: true },
    });

    res
      .status(200)
      .json({ message: "User details fetched successfully", data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
