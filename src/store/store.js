import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../slices/loadingSlice";
import userInfoReducer from "../slices/usersSlice";
export default configureStore({
  reducer: {
    loading: loadingReducer.reducer,
    userInfo: userInfoReducer.reducer,
    // properties : propertiesReducer,
  },
});
