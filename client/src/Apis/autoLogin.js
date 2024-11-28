import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default createAsyncThunk("users/autoLogin", async () => {
  if (!window.localStorage.getItem("token")) {
    return {
      message: "User not logged in",
      status: 401,
      data: null,
    };
  }
  const response = await axios
    .post("/api/autoLogin", null, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
    .catch((err) => {
      return err.response;
    });


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
});
