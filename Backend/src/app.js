import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";



const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

import authRouter from "./routes/auth.router.js";
import chatRouter from "./routes/chat.router.js";


app.use("/api/auth", authRouter);
app.use("/api/chat", chatRouter);

export default app;
