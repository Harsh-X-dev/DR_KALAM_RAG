import jwt from "jsonwebtoken";
import db from "../config/prisma.js";
export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "not logged in" });
    }
    const isBlacklisted = await db.blacklist.findUnique({ where: { token } });
    if (isBlacklisted) {
      return res
        .status(401)
        .json({ message: "token is blacklisted, please login again" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRATE_KEY);
    // console.log(decode);
    req.user = decode;
    next();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
