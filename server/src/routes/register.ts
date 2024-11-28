import { Router } from "express";
import usersModal from "../models/users";
import { genSaltSync, hashSync } from "bcrypt";
const router = Router();

module.exports = {
  route: "/register",
  router: router,
  func: () => {
    /// register user
    router.post("/", (req: any, res: any) => {
      /// validate user input
      usersModal.handleUserValidation(req.body);

      const { error } = usersModal.handleUserValidation({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      });

      /// check if there is an error
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      /// generate salt and hash the password
      const salt = genSaltSync(10);
      const user = new usersModal.User({
        name: req.body.name,
        email: req.body.email,
        password: hashSync(req.body.password, salt),
        role: req.body.role,
        profileImage: "defaultProfileImage.png",
      });

      /// save the user
      user
        .save()
        .then(() => {
          res.status(201).send({ message: "User created successfully" });
        })
        .catch((err: any) => {
          if (err.code === 11000) {
            res.status(400).send({ message: "Email already exists" });
          } else {
            res.status(400).send({ message: "Something went wrong" });
          }
        });
    });
  },
};
