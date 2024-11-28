import { createSlice } from "@reduxjs/toolkit";
import { addProperties, getProperties, updateProperties } from "../Apis/properties";
const propertiesReducer = createSlice({
  name: "properties",
  initialState: {
    title: "",
    description: "",
    price: "",
    type: "",
    saleType: "",
    soled: false,
    bedrooms: 1,
    bathrooms: 1,
    garage: 0,
    aria: 50,
    city: "",
    mapIframe: "",
    location: "",
    gallery: [],
    propertyImage: "",
    date: "",
    features: {
      Air_Conditioning: false,
      barbeque: false,
      dryer: false,
      gym: false,
      laundry: false,
      lawn: false,
      microwave: false,
      outdoor_Shower: false,
      refrigerator: false,
      sauna: false,
      swimming_Pool: false,
      tv_Cable: false,
      washer: false,
      wifi: false,
      window_Coverings: false,
    },
  },
  reducers: {
    setProperties: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProperties.fulfilled, (state, action) => {
      if (action.payload.status === 201) {
        return true;
      }
      return false;
    });

    builder.addCase(getProperties.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(getProperties.rejected, (state, action) => {
      return action.payload;
    });
  },
});

export default propertiesReducer;
