import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default  createAsyncThunk(
  "users/register",
  async ({ name, email, password, password_confirmation, role }) => {
    const response = await axios.post("/api/register", {
      name,
      email,
      password,
      password_confirmation,
      role,
    }).catch((err) => {
      return err.response
    })

    
      return  {
        message: response.status === 200 ? "User Registered Successfully" : response.data.message,
        status: response.status,
        data : response.data
      };
    
  }
);

