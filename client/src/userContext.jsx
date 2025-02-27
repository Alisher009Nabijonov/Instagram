import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("/api/auth/profile")
      .then(({ data }) => {
        setUser(data);
        // toast.success(`Signed as ${user.username}`);
        toast.success("usert topildi.") 
      })
      .catch((error) => {
        console.log("error while get profile", error);
        setUser(null);
        toast.error("user topilmadi");
      });
  }, []);

  
  useEffect(() => {
    axios
      .get("/api/user/getAllUsers")
      .then(({ data }) => {
        setPeople(data.users);
        toast.success(data.message);
      })
      .catch((error) => {
        console.log("error while get profile", error);
        setPeople([]);
        toast.error("user topilmadi");
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, people }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
