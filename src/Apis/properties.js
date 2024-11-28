import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProperties = createAsyncThunk(
  "properties/addProperties",
  async (properties) => {
    const response = await axios
      .post("/api/properties", properties, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((err) => {
        return err.response;
      });

    return response;
  }
);

export const getProperties = createAsyncThunk(
  "properties/getProperties",
  async (params) => {
    const response = await axios
      .get("/api/properties", {
        params,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return response;
  }
);
export const getFeaturedProperties = createAsyncThunk(
  "properties/getFeaturedProperties",
  async () => {
    const response = await axios
      .get("/api/properties/featured", {})
      .catch((err) => {
        return err.response;
      });

    return response;
  }
);

export const updateProperties = createAsyncThunk(
  "properties/updateProperties",
  async (properties) => {
    const response = await axios
      .put(`/api/properties/${properties._id}`, properties, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((err) => {
        return err.response;
      });

    return response;
  }
);

export const deleteProperties = createAsyncThunk(
  "properties/deleteProperties",
  async (id) => {
    const response = await axios
      .delete(`/api/properties/${id}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return response;
  }
);
