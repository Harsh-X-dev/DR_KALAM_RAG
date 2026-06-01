import { login, register, logout } from "../api/authApi";
import { AuthContext } from "../authContext";
import { useContext} from "react";
import { toast } from "sonner";

export function useAuth() {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);
  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const response = await login(email, password);
      setUser(response.data.user);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed. Please check your credentials and try again.",
      );
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async (data) => {
    setLoading(true);
    try {
      const response = await register(data);
      setUser(response.data.user);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await logout();
      setUser(response.data.user);
      toast.success("Logged out successfully.");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Logout failed. Please try again.",
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, handleLogin, handleLogout, handleRegister };
}
