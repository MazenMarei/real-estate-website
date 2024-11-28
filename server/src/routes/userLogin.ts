import { Router } from "express";
import usersModal from "../models/users";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import { date } from "joi";
const router = Router();

module.exports = {
  route: "/login",
  router: router,
  func: () => {
    /// login user by email and password
    router.post("/", async (req: any, res: any) => {

      /// check is the user is already registered and password is correct
      const user = await usersModal.User.findOne({ email: req.body.email });
      if (!user) return res.status(400).send({ message: "Invalid Credential" });
      const validPassword = compareSync(req.body.password, user.password);
      if (!validPassword)
        return res.status(400).send({ message: "Invalid Credential" });

      /// create a token
      const token = sign(
        { _id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: "7d" }
      );

      /// return the user data
      res.status(200).send({
        message: "Login successful",
        token: token,
        user: {
          profileImage: user.profileImage,
          favorites: user.favorites,
          name: user.name,
          role: user.role,
          email: user.email,
          date: user.date,
        },
      });
    });
  },
};
