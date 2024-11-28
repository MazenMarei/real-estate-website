import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default createAsyncThunk(
  "users/login",
  async ({ name, email, password }) => {
    const response = await axios
      .post("/api/login", {
        name,
        email,
        password,
      })
      .catch((err) => {
        return err.response;
      });
      
    window.localStorage.setItem("token", response.data.token);

    return {
      message:
        response.status === 200
          ? "User Logged in Successfully"
          : response.data.message ??
            response.data.error ??
            response.data ??
            "Something went wrong",
      status: response.status,
      data: response.data,
    };
  }
);
