import { Router } from "express";
import usersModal from "../models/users";
import { ObjectId } from "mongodb"; // Import ObjectId from mongodb
import { decode, JwtPayload } from "jsonwebtoken";
import properties from "../models/properties";
import authenticateToken from "../middleware/authenticateToken";
import upload from "../middleware/image_uploader";

const router = Router();
interface autoLoginObject extends JwtPayload {
  _id: string;
  email: string;
  role: string;
}
module.exports = {
  route: "/properties",
  router: router,
  func: () => {
    /// get all featured properties
    router.get("/featured", async (req: any, res: any) => {
      /// get all properties
      const featuredProperties = await properties.find();
      /// populate the owner object
      let populatedProperties = (
        await properties.populate(featuredProperties, { path: "owner" })
      )
        .sort((a: any, b: any) => a.date - b.date)
        .slice(0, 15);
        
      /// remove password and email from owner object
      populatedProperties = populatedProperties.map((property: any) => {
        if (property.owner && property.owner.password) {
          const { password, email, ...ownerWithoutPassword } =
            property.owner._doc;
          property.owner = ownerWithoutPassword;
        }
        return property;
      });
      res.status(200).send({ properties: populatedProperties });
    });
    
    /// get properties by query
    router.get("/", async (req: any, res: any) => {

      const query = req.query;

      /// check if the query id is valid
      if (query && query._id) {
        if (!ObjectId.isValid(query._id))
          return res.status(400).send({ message: "Invalid Property ID" });
      }

      /// get token from the header and decode it
      const token = req.header("authorization").split(" ")[1];
      const decoded = decode(token);
      if (!decoded)
        return res.status(400).send({ message: "Invalid Credential" });
      const decodedToken = decoded as autoLoginObject;

      /// find the user by id
      const user = await usersModal.User.findById({ _id: decodedToken._id });
      if (!user) return res.status(400).send({ message: "Invalid Credential" });
      // check if the user is the owner of the property
      if (query && query.owner) {
        if (decodedToken.role !== "seller")
          return res.status(401).send({ message: "Not Authorized" });
        let filteredProperties = await properties.find({ owner: user._id });
        let populatedProperties = await properties.populate(
          filteredProperties,
          { path: "owner" }
        );
        /// remove password and email from owner object
        populatedProperties = populatedProperties.map((property: any) => {
          if (property.owner && property.owner.password) {
            const { password, email, ...ownerWithoutPassword } =
              property.owner._doc;
            property.owner = ownerWithoutPassword;
          }
          return property;
        });

        return res.status(200).send({ properties: populatedProperties });
      } else {
        /// get all properties depends on the query
        const filteredProperties = await properties.find(query);
        let populatedProperties = await properties.populate(
          filteredProperties,
          { path: "owner" }
        );
        /// remove password and email from owner object
        populatedProperties = populatedProperties.map((property: any) => {
          if (property.owner && property.owner.password) {
            const { password, email, ...ownerWithoutPassword } =
              property.owner._doc;
            property.owner = ownerWithoutPassword;
          }
          return property;
        });
        res.status(200).send({ properties: populatedProperties });
      }
    });

    /// post new property
    router.post(
      "/",
      authenticateToken,
      upload.fields([
        { name: "propertyImage", maxCount: 1 },
        { name: "gallery", maxCount: 10 },
      ]),
      async (req: any, res: any) => {

        // get the token from the header and decode it
        const token = req.header("authorization").split(" ")[1];
        const decoded = decode(token);
        if (!decoded)
          return res.status(400).send({ message: "Invalid Credential" });
        const decodedToken = decoded as autoLoginObject;

        /// check if the user is a seller
        if (decodedToken.role !== "seller")
          return res.status(401).send({ message: "Not Authorized" });
        /// find the user by id
        const user = await usersModal.User.findById({ _id: decodedToken._id });
        if (!user)
          return res.status(400).send({ message: "Invalid Credential" });

        // get the property data from the request body
        const {
          title,
          description,
          price,
          type,
          saleType,
          soled,
          bedrooms,
          bathrooms,
          garage,
          aria,
          city,
          mapIframe,
          location,
          date,
          features,
        } = req.body;

        /// check if the property image and gallery images are uploaded
        const propertyImage = req.files["propertyImage"][0];
        const gallery = req.files["gallery"];
        if (!propertyImage || !gallery)
          return res.status(400).send({ message: "Image Required" });

        /// create the property
        const property = await properties.create({
          owner: user._id,
          title,
          description,
          price,
          type,
          saleType,
          soled,
          bedrooms,
          bathrooms,
          garage,
          aria,
          city,
          mapIframe,
          location,
          date,
          features,
          propertyImage:
            "http://localhost:5000/uploads/" + propertyImage.filename,
          gallery: gallery.map(
            (image: any) => "http://localhost:5000/uploads/" + image.filename
          ),
        });

        return res
          .status(201)
          .send({ message: "Property Added", propertyId: property._id });
      }
    );

    /// update property by id
    router.put(
      "/:id",
      authenticateToken,
      upload.fields([
        { name: "propertyImage", maxCount: 1 },
        { name: "gallery", maxCount: 10 },
      ]),
      async (req: any, res: any) => {

        /// get the token from the header and decode it
        const token = req.header("authorization").split(" ")[1];
        if (!token || !req.header("authorization"))
          return res.status(401).send({ message: "Not Authorized" });
        // Validate the ID
        if (!ObjectId.isValid(req.params.id)) {
          return res.status(400).send({ message: "Invalid Property ID" });
        }
        /// decode the token
        const decoded = decode(token);
        if (!decoded)
          return res.status(400).send({ message: "Invalid Credential" });
        const decodedToken = decoded as autoLoginObject;
        /// check if the user is a seller
        if (decodedToken.role !== "seller")
          return res.status(401).send({ message: "Not Authorized" });
        /// find the user by id
        const user = await usersModal.User.findById({ _id: decodedToken._id });
        if (!user)
          return res.status(400).send({ message: "Invalid Credential" });
        /// find the property by id
        const OldProperty = await properties.findById(req.params.id);
        if (!OldProperty)
          return res.status(400).send({ message: "Invalid Property" });
        if (OldProperty.owner.toString() !== user._id.toString())
          return res.status(401).send({ message: "Not Authorized" });
        // Update the property
        if (req.files["propertyImage"]) {
          const propertyImage = req.files["propertyImage"][0];
          OldProperty.propertyImage =
            "http://localhost:5000/uploads/" + propertyImage.filename;
          await OldProperty.save();
        }
        
        if (req.files["gallery"]) {
          const gallery = req.files["gallery"];
          OldProperty.gallery = gallery.map(
            (image: any) => "http://localhost:5000/uploads/" + image.filename
          );
          await OldProperty.save();
        }

        /// update the property data
        const updatedData = await OldProperty.updateOne({
          ...req.body,
          owner: user._id,
        });

        if (updatedData)
          return res.status(200).send({ message: "Property Updated" });
        return res.status(400).send({ message: "Error Updating Property" });
      }
    );

    /// delete property by id
    router.delete("/:id", authenticateToken, async (req: any, res: any) => {
      // Validate the token
      if (!req.header("authorization"))
        return res.status(401).send({ message: "Not Authorized" });
      // Validate the ID
      if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: "Invalid Property ID" });
      }

      /// get the token from the header and decode it
      const token = req.header("authorization").split(" ")[1];
      const decoded = decode(token);
      if (!decoded)
        return res.status(400).send({ message: "Invalid Credential" });
      const decodedToken = decoded as autoLoginObject;
      /// check if the user is a seller
      if (decodedToken.role !== "seller")
        return res.status(401).send({ message: "Not Authorized" });
      /// find the user by id
      const user = await usersModal.User.findById({ _id: decodedToken._id });
      if (!user) return res.status(400).send({ message: "Invalid Credential" });
      /// find the property by id
      const OldProperty = await properties.findById(req.params.id);
      if (!OldProperty)
        return res.status(400).send({ message: "Invalid Property" });
      if (OldProperty.owner.toString() !== user._id.toString())
        return res.status(401).send({ message: "Not Authorized" });
      
      /// delete the property
      const deletedData = await OldProperty.deleteOne();
      if (deletedData)
        return res.status(200).send({ message: "Property Deleted" });
      return res.status(400).send({ message: "Error Deleting Property" });
    });
    
  },
};
