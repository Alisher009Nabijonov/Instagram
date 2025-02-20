import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/auth/profile")
      .then(({ data }) => {
        setUser(data);
        alert("user profile keldi");
      })
      .catch((error) => {
        console.log("error while get profile", error);
        setUser(null);
        alert("user profile keldi !!!");
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
