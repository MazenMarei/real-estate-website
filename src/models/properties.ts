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
  gallery: string[];
  propertyImage: string;
  date: Date;
  _id: string;
  owner: string;
  features: {
    airConditioning: boolean;
    barbeque: boolean;
    dryer: boolean;
    gym: boolean;
    laundry: boolean;
    lawn: boolean;
    microwave: boolean;
    outdoorShower: boolean;
    refrigerator: boolean;
    sauna: boolean;
    swimmingPool: boolean;
    tvCable: boolean;
    washer: boolean;
    wifi: boolean;
    windowCoverings: boolean;
  };
}

const propertySchema: mongoose.Schema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
    minlength: 10,
  },
  description: {
    type: String,
    required: false,
    minlength: 20,
  },
  price: {
    type: Number,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  soled: {
    type: Boolean,
    default: false,
  },
  bedrooms: {
    type: Number,
    required: false,
  },
  bathrooms: {
    type: Number,
    required: false,
  },
  garage: {
    type: Number,
    required: false,
  },
  aria: {
    type: Number,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  gallery: [
    {
      type: String,
    },
  ],
  propertyImage: {
    type: String,
    required: false,
  },
  mapIframe: {
    type: String,
    required: false,
  },
  saleType: {
    type: String,
    required: false,
  },
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
    barbeque: {
      type: Boolean,
      default: false,
    },
    dryer: {
      type: Boolean,
      default: false,
    },
    gym: {
      type: Boolean,
      default: false,
    },
    laundry: {
      type: Boolean,
      default: false,
    },
    lawn: {
      type: Boolean,
      default: false,
    },
    microwave: {
      type: Boolean,
      default: false,
    },
    outdoorShower: {
      type: Boolean,
      default: false,
    },
    refrigerator: {
      type: Boolean,
      default: false,
    },
    sauna: {
      type: Boolean,
      default: false,
    },
    swimmingPool: {
      type: Boolean,
      default: false,
    },
    tvCable: {
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
    windowCoverings: {
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
