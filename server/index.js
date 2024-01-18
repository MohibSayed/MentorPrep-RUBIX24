import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet"
import morgan from "morgan";
import multer from "multer";
import authRoute from "./routes/auth.js";
import menteesRoute from "./routes/Mentee.js";
import mentorsRoute from "./routes/Mentor.js";
import bookingRoute from "./routes/booking.js";

const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations.js");
const messageRoute = require("./routes/messages");
import cookieParser from "cookie-parser";
import cors from "cors";
const path = require("path");
const Port = 8800;

const app = express();
dotenv.config();

//database connection
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  } catch (err) {
    throw err;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected");
});
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});
app.use("/api/auth", authRoute);
app.use("/api/mentee", menteesRoute);
app.use("/api/mentor", mentorsRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(Port, () => {
  connect();
  console.log("Server started on Port " + Port);
});
