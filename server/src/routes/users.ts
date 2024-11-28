import { Router } from "express";
import usersModal from "../models/users";
import authenticateToken from "../middleware/authenticateToken";
import { decode, JwtPayload } from "jsonwebtoken";
import upload from "../middleware/image_uploader";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
const router = Router();

interface autoLoginObject extends JwtPayload {
  _id: string;
  email: string;
  role: string;
}

module.exports = {
  route: "/user",
  router: router,
  func: () => {

    /// edit user profile by id
    router.put(
      "/:id",
      authenticateToken,
      upload.fields([{ name: "profileImage", maxCount: 1 }]),
      async (req: any, res: any) => {
        /// check if the user is the same user that is trying to update the profile

        /// get the token from the header and decode it
        const token = req.header("authorization").split(" ")[1];
        if (!token) return res.status(401).send("Access Denied");
        const decod = decode(token) as autoLoginObject;
        if (!decod) return res.status(401).send("Access Denied");
        if (decod._id !== req.params.id)
          return res.status(401).send("Access Denied");

        /// find the user by id
        const user = await usersModal.User.findById(decod._id);
        if (!user) return res.status(401).send("Access Denied");
        // check if there is a profile image and add it to the body
        if (req.files["profileImage"]) {
          req.body.profileImage = req.files["profileImage"][0].filename;
        }
        /// update the user
        const updatedUser = await usersModal.User.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!updatedUser) return res.status(400).send("User not found");
        res.status(200).send({
          message: "User updated successfully",
          user: {
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            profileImage: updatedUser.profileImage,
            postalCode: updatedUser.postalCode,
            address: updatedUser.address,
            city: updatedUser.city,
            country: updatedUser.country,
            phone: updatedUser.phone,
            id: updatedUser._id,
            about: updatedUser.about,
          },
        });
      }
    );

    /// change password
    router.put(
      "/:id/password",
      authenticateToken,
      async (req: any, res: any) => {
        /// check if the user is the same user that is trying to update the password

        /// get the token from the header and decode it
        const token = req.header("authorization").split(" ")[1];
        if (!token) return res.status(401).send("Access Denied");
        const decod = decode(token) as autoLoginObject;
        if (!decod) return res.status(401).send("Access Denied");
        if (decod._id !== req.params.id)
          return res.status(401).send("Access Denied");
        /// validate the password
        if (req.params.id !== decod._id)
          return res.status(401).send("Access Denied");
        if (req.body.newPassword.length < 5)
          return res
            .status(400)
            .send("Password must be at least 5 characters long");
        if (!req.body.oldPassword)
          return res.status(400).send("Old password is required");

        /// find the user by id

        const user = await usersModal.User.findById(decod._id);
        if (!user) return res.status(401).send("Access Denied");

        /// check if the old password
        const validPassword = compareSync(req.body.oldPassword, user.password);
        if (!validPassword) return res.status(400).send("Invalid old password");
        
        /// generate salt and hash the new password
        const salt = genSaltSync(10);
        user.password = hashSync(req.body.newPassword, salt);

        await user.save();
        res.status(200).send({ message: "Password updated successfully" });
      }
    );

  },
};
