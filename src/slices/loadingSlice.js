import {  createSlice } from "@reduxjs/toolkit";


const loadingReducer = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    setLoading: (state, action) => {      
     return state = Boolean(action.payload);
    },
  },

});

export const { setLoading } = loadingReducer.actions;
export default loadingReducer;
