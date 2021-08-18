import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as BodyParser from "body-parser";
import * as cors from "cors";
import blog from "./routes/blogRoutes";

createConnection()
  .then(async (connection) => {
    const app = express();
    app.use(cors());
    app.use(BodyParser.json());

    app.use("/", blog);

    app.listen(process.env.PORT);
    console.log(`Server started at http://localhost:${process.env.PORT}`);
  })
  .catch((error) => console.log(error));