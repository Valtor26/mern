import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev")); // for logging the requests


export default app;