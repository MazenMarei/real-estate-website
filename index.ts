import express, { Router } from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const port = 5000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/// static uploads files

app.use("/uploads", express.static(path.join(__dirname, "src", "uploads")));

/// connect to mongodb

mongoose.connect(
  "mongodb+srv://education:66mIrIRcfpCLm2Gd@education.auxxc.mongodb.net/realestateproject?retryWrites=true&w=majority&appName=realestateproject"
);

/// check connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

/// check error
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB", err);
});

/// listen to port
app.listen(port, () => {
  console.log(
    "Server is running on port " + port + ` http://localhost:${port}`
  );
});



/// register routes folders
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
  /// get file extension and check if it is a typescript file
  const fileExt = path.extname(file);

  if (fileExt === ".ts") {
    /// if it is a typescript file add the route
    addRoute(file);
  } else if (!fileExt) {
    /// if it is a directory read the directory and check if it has sub a typescript file
    const checkDir = fs
      .lstatSync(path.join(__dirname, "src/routes", file))
      .isDirectory();
      /// if it has a sub typescript file add the route
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
  app.use("/api" + route.route, route.router);
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

