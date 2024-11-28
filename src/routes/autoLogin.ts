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
  route: "/autoLogin",
  router: router,
  func: () => {

    // check from the user token
    router.post("/", authenticateToken, async (req: any, res: any) => {
      
      // get the token from the header and decode it
      const token = req.header("authorization").split(" ")[1];
      const decoded = decode(token);

      if (!decoded)
        return res.status(400).send({ message: "Invalid Credential" });
      const decodedToken = decoded as autoLoginObject;

      // find the user by id
      const user = await usersModal.User.findById({ _id: decodedToken._id });
      if (!user) return res.status(400).send({ message: "Invalid Credential" });
      
      // return the user data
      res.status(200).send({
        message: "Login successful",
        user: {
          profileImage: user.profileImage,
          favorites: user.favorites,
          name: user.name,
          role: user.role,
          email: user.email,
          token: token,
          date: user.date,
          id: user._id,
          phone: user.phone,
          address: user.address,
          city: user.city,
          country: user.country,
          postalCode: user.postalCode,
          about: user.about,
        },
      });
    });
  },
};
