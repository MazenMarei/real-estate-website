import mongoose from "mongoose";
import Joi from "joi";

export interface IProperty {
  title: string;
  description: string;
  price: number;
  type: string;
  soled: boolean;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  aria: number;
  city: string;
  location: string;
  region: string;
  images: string[];
  date: Date;
  _id: string;
  owner: string;
  features: {
    airConditioning: boolean;
    bedding: boolean;
    cableTv: boolean;
    heating: boolean;
    internet: boolean;
    microwave: boolean;
    smoking: boolean;
    swimmingPool: boolean;
    washer: boolean;
    wifi: boolean;
  };
}

const propertySchema: mongoose.Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  soled: {
    type: Boolean,
    default: false,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  garage: {
    type: Number,
    required: true,
  },
  aria: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  features: {
    airConditioning: {
      type: Boolean,
      default: false,
    },
    bedding: {
      type: Boolean,
      default: false,
    },
    cableTv: {
      type: Boolean,
      default: false,
    },
    heating: {
      type: Boolean,
      default: false,
    },
    internet: {
      type: Boolean,
      default: false,
    },
    microwave: {
      type: Boolean,
      default: false,
    },
    smoking: {
      type: Boolean,
      default: false,
    },
    swimmingPool: {
      type: Boolean,
      default: false,
    },
    washer: {
      type: Boolean,
      default: false,
    },
    wifi: {
      type: Boolean,
      default: false,
    },
  },
});

const Property: mongoose.Model<IProperty> = mongoose.model<IProperty>(
  "properties",
  propertySchema
);

export default Property;
