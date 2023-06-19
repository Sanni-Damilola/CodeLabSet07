import express, { Application, Request, Response } from "express";
import mongoose from "./config/db";
import cors from "cors";
import router from "./Router/bookRouter";

const port: number = 2001;
mongoose;

const app: Application = express();

app.use("/api", router);

app.use(express.json()).use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Success",
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
