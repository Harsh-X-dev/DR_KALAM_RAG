import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Loading } from "../../../component/Loading";
export const Protected = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

    return children;

};
