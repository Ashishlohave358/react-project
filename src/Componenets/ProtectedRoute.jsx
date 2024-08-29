import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [isLogin, setisLogin] = useState(true);

  return <div>{isLogin ? children : <Navigate to="/login" />}</div>;
}

export default ProtectedRoute;
