import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./routes/route.js";

import Connection from "../back-end/database/db.js";
const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

const username = process.env.USER_NAME;
const password = process.env.USER_PASS;

const PORT = 8080;

Connection(username, password);

app.listen(PORT, () => {
  console.log(`Listening successfully at PORT : ${PORT}`);
});
