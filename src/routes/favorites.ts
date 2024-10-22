import { Router } from "express";
import usersModal from "../models/users";
import { decode, JwtPayload } from "jsonwebtoken";
import properties from "../models/properties";
import authenticateToken from "../middleware/authenticateToken";
const router = Router();
interface autoLoginObject extends JwtPayload {
  _id: string;
  email: string;
  role: string;
}
module.exports = {
  route: "/favorites",
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
      const property = await properties.findById({ _id: propertyId });
      if (!user || !property)
        return res.status(400).send({ message: "Invalid Credential" });

      user.favorites.push(property._id);
      await user.save();
      res.status(200).send({ message: "Login successful", user: user });
    });

    router.get("/", authenticateToken, async (req: any, res: any) => {
      console.log("get favorites");

      const token = req.header("authorization").split(" ")[1];
      const decoded = decode(token);
      if (!decoded)
        return res.status(400).send({ message: "Invalid Credential" });
      const decodedToken = decoded as autoLoginObject;

      const user = await usersModal.User.findById({
        _id: decodedToken._id,
      }).populate("properties");
      if (!user) return res.status(400).send({ message: "Invalid Credential" });
      const favorites = user.favorites;
      res.status(200).send({ favorites: favorites });
    });

    router.delete("/", authenticateToken, async (req: any, res: any) => {
      console.log("delete favorites");

      const token = req.header("authorization").split(" ")[1];
      const decoded = decode(token);
      const propertyId = req.body.propertyId;
      if (!decoded)
        return res.status(400).send({ message: "Invalid Credential" });
      const decodedToken = decoded as autoLoginObject;

      const user = await usersModal.User.findById({ _id: decodedToken._id });
      const property = await properties.findById({ _id: propertyId });
      if (!user || !property) return res.status(400).send({ message: "Invalid Credential" });

      user.favorites = user.favorites.filter(
        (favorite: any) => favorite.toString() !== property._id.toString()
      );
      await user.save();
      res.status(200).send({ message:  "removed from favorites" });

    });
  },
};
