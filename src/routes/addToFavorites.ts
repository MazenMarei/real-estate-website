import { Router } from "express";
import usersModal from "../models/users";
import { compareSync } from "bcrypt";
import { sign, decode, JwtPayload } from "jsonwebtoken";
import authenticateToken from "../middleware/authenticateToken";
const router = Router();
interface autoLoginObject extends JwtPayload {
  _id: string;
  email: string;
  role: string;
}
module.exports = {
  route: "/addToFavorites",
  router: router,
  func: () => {
    router.post("/", authenticateToken, async (req: any, res: any) => {
      console.log("add to favorites");

      const token = req.header("authorization").split(" ")[1];
      const decoded = decode(token);
      const propertyId = req.body.propertyId;
      if (!decoded)
        return res.status(400).send({ message: "Invalid Credential" });
      const decodedToken = decoded as autoLoginObject;

      const user = await usersModal.User.findById({ _id: decodedToken._id });
      if (!user) return res.status(400).send({ message: "Invalid Credential" });
      user.favorites.push(propertyId);
      await user.save();
      res.status(200).send({ message: "Login successful", user: user });
    });
  },
};
