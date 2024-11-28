import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../slices/loadingSlice";
import userInfoReducer from "../slices/usersSlice";
import propertiesReducer from "../slices/propertySlice";



export default configureStore({
  reducer: {
    loading: loadingReducer.reducer,
    userInfo: userInfoReducer.reducer,
    property: propertiesReducer,
  },
});
