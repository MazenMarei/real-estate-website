import express, { Router } from "express";
import Joi from "joi";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";
const port = 5000;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('src/uploads'));

mongoose.connect(
  "mongodb+srv://education:66mIrIRcfpCLm2Gd@education.auxxc.mongodb.net/realestateproject?retryWrites=true&w=majority&appName=realestateproject"
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB", err);
});

app.listen(port, () => {
  console.log(
    "Server is running on port " + port + ` http://localhost:${port}`
  );
});

fs.readdir(path.join(__dirname, "src/routes"), (err, files) => {
  if (err) {
    console.error(err);
  } else {
    files.forEach((file) => {
      registerRoute(file);
    });
  }
});

function registerRoute(file: string) {
  const fileExt = path.extname(file);
  if (fileExt === ".ts") {
    addRoute(file);
  } else if (!fileExt) {
    const checkDir = fs
      .lstatSync(path.join(__dirname, "src/routes", file))
      .isDirectory();
    if (checkDir) {
      fs.readdir(path.join(__dirname, "src/routes", file), (err, files) => {
        if (err) {
          console.error(err);
        } else {
          files.forEach((subFile) => {
            registerRoute(path.join(file, subFile));
          });
        }
      });
    } else {
      console.error("Route not added: " + file);
    }
  } else {
    console.log("Route not added: " + file);
  }
}

function addRoute(file: string) {
  const route: {
    route: string;
    router: Router;
    func: Function;
  } = require(path.join(__dirname, "src/routes", file));
  if (!route.route || !route.router || !route.func) {
    console.error("Route not added: " + file);
    return;
  }
  app.use("/api"+route.route, route.router);
  route.func();

  console.log(
    "Route added: " + route.route,
    " -- Methods : " +
      route.router.stack.map((route) =>
        route.route?.stack[0].method.toLocaleUpperCase()
      ),
    " -- Path : src\\routes\\" + file
  );
}
