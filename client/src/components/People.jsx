import React, { useContext } from "react";
// assets
import UserImg1 from "../assets/1.png";
import axios from "axios";
// userContext

import { UserContext } from "../userContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const People = () => {
  const navigate = useNavigate();
  let { user } = useContext(UserContext);
  const { people } = useContext(UserContext);

  const handleFallow = (item) => {
    try {
      const currentUserId = user._id;
      axios.post(`/api/${item._id}/fallow`, { currentUserId });
      toast.success("sdkjdsf");
    } catch (error) {
      alert(error.message);
    }
  };
  const handleProfile = (item) => {
    navigate(`/user/${item._id}`);
  };
  return (
    <div className="w-full">
      <div className="w-100 mx-auto my-10">
        <h1 className="my-2">Recommendations</h1>
        {people.map((item) => (
          <div
            key={item._id}
            className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <div
              onClick={() => handleProfile(item)}
              className="flex items-center gap-4"
            >
              <img
                src={user ? `http://localhost:5000${item.avatar}` : UserImg1}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{item.username}</h3>
                <p className="text-neutral-400 text-sm">{item.name}</p>
              </div>
            </div>
            <button
              onClick={() => handleFallow(item)}
              className="cursor-pointer ml-auto text-sm bg-blue-600 py-2 px-4 rounded-sm hover:bg-blue-500"
            >
              fallow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
