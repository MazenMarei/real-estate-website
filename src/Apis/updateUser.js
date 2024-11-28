import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UpdateUser = createAsyncThunk(
  "users/update",
  async ({
    id,
    name,
    email,
    role,
    profileImage,
    postalCode,
    address,
    city,
    country,
    phone,
    about,
  }) => {
    const response = await axios
      .put(
        "/api/user/" + id,
        {
          name,
          email,
          role,
          profileImage,
          postalCode,
          address,
          city,
          country,
          phone,
          about,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      )
      .catch((err) => {
        return err.response;
      });

    return {
      message:
        response.status === 200
          ? "User Updated Successfully"
          : response.data.message,
      status: response.status,
      data: response.data,
    };
  }
);

export const UpdateUserPassword = createAsyncThunk(
  "users/updatePassword",
  async ({ id, oldPassword, newPassword }) => {
    const response = await axios
      .put(
        "/api/user/" + id + "/password",
        { oldPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      )
      .catch((err) => {
        return err.response;
      });

    return {
      message:
        response.status === 200
          ? "Password Updated Successfully"
          : response.data.message,
      status: response.status,
      data: response.data,
    };
  }
);
