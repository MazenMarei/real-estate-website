import mongoose from "mongoose";
import Joi from "joi";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  date: Date;
  profileImage: string;
  favorites: string[];
  _id: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  profileImage: {
    type: String,
    default: "defaultProfileImage.png",
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "properties",
    },
  ],
  phone: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  postalCode: {
    type: String,
    default: "",
  },
  date: { type: Date, default: Date.now },
});

const User: mongoose.Model<IUser> = mongoose.model<IUser>("users", userSchema);

function handleUserValidation(user: {
  name: string;
  email: string;
  password: string;
  role: string;
}) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(225).required().email(),
    password: Joi.string().min(5).max(1024).required(),
    role: Joi.string().required().min(4).max(6),
  });
  return schema.validate(user, { abortEarly: false });
}
export default {
  User,
  handleUserValidation,
};
