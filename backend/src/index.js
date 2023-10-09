import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"

import {studentRouter} from "./Routes/student.js"

dotenv.config()
const CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const port = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", studentRouter);

mongoose.connect(CONNECTION_STRING)

app.listen(port, "0.0.0.0", () => console.log(`Server has started at port ${port}`));