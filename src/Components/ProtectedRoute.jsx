import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        return <Navigate to="/" replace />;
    }
    
    return children;
};

export default ProtectedRoute;
