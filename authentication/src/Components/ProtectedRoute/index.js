import { Route, Navigate } from "react-router-dom"; // Changed import statement
import  Cookies  from "js-cookie";
import Home from "../HomePage";

const ProtectedRoute = (props) => {
  const token = Cookies.get('jwt_token');

  if (token === undefined) {
    // Redirect to the login page if token is not found
    return <Navigate to="/login" />;
  }

  // Render the protected route
  return <Route {...props} />;
};

export default ProtectedRoute;
