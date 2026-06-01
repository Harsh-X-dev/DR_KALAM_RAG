import { apiClient } from "../../../api/apiClient";

export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/login", { email, password });
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const register = async (data) => {
  console.log("Registering user with data:", data);
  try {
    const response = await apiClient.post("/auth/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    return response;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
export const getUser = async () => {
  try {
    const response = await apiClient.get("/auth/get-user");
    return response;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
};
export const logout = async () => {
  try {
    const response = await apiClient.post("/auth/logout");
    return response;
  } catch (error) {
    console.error("Failed to logout:", error);
    throw error;
  }
};
