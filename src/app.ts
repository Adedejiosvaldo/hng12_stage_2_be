import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./error/error.service";
import { AppError } from "./error/error";
import router from "./numbers/fact.route";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
const API_PREFIX = "/api/v1";

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

app.use("/api/classify-number", router);

app.use((req: Request, res: Response, next: NextFunction) => {
  let err = new AppError(
    `${req.ip} tried to reach a resource at ${req.originalUrl} that is not on this server.`,
    404
  );
  next(err);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

export const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}`);
    });
  } catch (e) {
    console.error("here is the error: ", e);
  }
};
