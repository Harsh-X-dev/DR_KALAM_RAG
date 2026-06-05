import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_Backend_URL;

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});
