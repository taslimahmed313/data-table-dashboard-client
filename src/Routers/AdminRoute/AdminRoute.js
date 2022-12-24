import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";


const AdminRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="loader">
        <BeatLoader color="#36d7b7" />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
