import React, { useEffect, useState } from "react";
import { Route,  useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const { path, element } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token")
    
    if (token) {
      return setisLoggedIn(true);
    }
    return navigate("/");
  }, [navigate]);

  return isLoggedIn && <Route path={path} element={element} exact />;
};

export default ProtectedRoute;
