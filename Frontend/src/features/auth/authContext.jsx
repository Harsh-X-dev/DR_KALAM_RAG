import { createContext, useState, useEffect } from "react";
import { getUser } from "../auth/api/authApi";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Check if user is already logged in on component mount
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await getUser();
        setUser(response.data.user);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
