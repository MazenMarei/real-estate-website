import { createSlice } from "@reduxjs/toolkit";
import register from "../Apis/register";
import login from "../Apis/login";
import autoLogin from "../Apis/autoLogin";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    name: null,
    email: null,
    token: null,
    role: null,
    id: null,
    profileImage: null,
  },

  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.token = action.payload.data.token;
      state.role = action.payload.data.role;
      state.id = action.payload.data.id;
      state.profileImage = `/uploads/${
        action.payload.data.profileImage ?? "defaultProfileImage.png.jpg"
      }`;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.name = action.payload.data.user.name;
        state.email = action.payload.data.user.email;
        state.token = action.payload.data.token;
        state.role = action.payload.data.user.role;
        state.id = action.payload.data.user._id;
        state.profileImage = `/uploads/${
          action.payload.data.profileImage ?? "defaultProfileImage.png"
        }`;

        
      }
    });

    builder.addCase(autoLogin.fulfilled, (state, action) => {
      state.name = action.payload.data.user.name;
      state.email = action.payload.data.user.email;
      state.token = window.localStorage.getItem("token");
      state.role = action.payload.data.user.role;
      state.profileImage = `/uploads/${
        action.payload.data.user.profileImage ?? "defaultProfileImage.png"
      }`;
    });
  },
});

export default usersReducer;
