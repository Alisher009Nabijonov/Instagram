import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast"

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/auth/profile")
      .then(({ data }) => {
        setUser(data);
        toast.success("user topildi");
      })
      .catch((error) => {
        console.log("error while get profile", error);
        setUser(null);
        toast.error("user topilmadi");
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("/api/user/getAllUsers/people")
  //     .then(({ data }) => {
  //       setUser(data);
  //       toast.success("user topildi");
  //     })
  //     .catch((error) => {
  //       console.log("error while get profile", error);
  //       setUser(null);
  //       toast.error("user topilmadi");
  //     });
  // }, []);


  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
