import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userManager from "utils/userManager";

function ProtectedRoute({ children, redirectUrl }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    const getUser = (async () => {
      return await userManager.getUser();
    })
    getUser().then(user => {
      if (!user) {
        navigate("/signin" + (redirectUrl ? `?redirectUrl=${redirectUrl}` : ""));
      }
    })
  })

  return React.Children.only(children);
}

export default ProtectedRoute;