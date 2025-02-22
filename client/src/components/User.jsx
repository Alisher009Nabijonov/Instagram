import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { id } = useParams(); // Destructure the 'id' parameter
  const [userData, setUserData] = useState(null); // State to store user data
  const [error, setError] = useState(null);     

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/user/getUser/${id}`);
        setUserData(response.data.user); 
      } catch (err) {
        setError("Failed to fetch user data.");
        console.error(err);
      }
    };

    fetchUser(); 
  }, [id]); 

  return (
    <div>
      {userData ? (<div>{userData.name}</div>) : (<div>user yoq</div>)}
    </div>
  );
};

export default User;
