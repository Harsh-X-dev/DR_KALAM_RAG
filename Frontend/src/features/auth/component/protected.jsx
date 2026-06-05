import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { Loading } from "../../../component/Loading";
export const Protected = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loading fullScreen={true} size={15} />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
