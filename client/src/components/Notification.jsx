import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { UserContext } from "../userContext";

import { FaAngleLeft } from "react-icons/fa6";
// assets
import UserImg from "../assets/1.png";
const Notification = () => {
  const navigate = useNavigate();
  let { user } = useContext(UserContext);
  const { people } = useContext(UserContext);

  const handleFallow = (item) => {
    try {
      const currentUserId = user._id;
      axios.post(`/api/${item._id}/fallow`, { currentUserId });
      toast.success("send fallow");
    } catch (error) {
      alert(error.message);
    }
  };
  const [fallowers, setFallowers] = useState(false);

  const handleFallowers = () => {
    setSettings(false);
    setFallowers(true);
    setFallowing(false);
    onOpen(true);
  };

  const handleSettings = () => {
    setSettings(true);
    setFallowers(false);
    setFallowing(false);
    onOpen(true);
  };

  const handleFallowwing = () => {
    setSettings(false);
    setFallowers(false);
    setFallowing(true);
    onOpen(true);
  };

  const handleProfile = (item) => {
    navigate(`/user/${item._id}`);
  };


  return (
    <>
      <div>
        <div className="flex items-center px-10 py-2 border-b-1">
          <p className="text-xl">
            <NavLink to="/">
              <FaAngleLeft />
            </NavLink>
          </p>

          <h1 className="text-center text-xl mx-auto">Notifications</h1>
        </div>
        <div>
          {user.followers.map((fallower) => {
            return (
              <div
                key={fallower._id}
                onClick={() => handleProfile(fallower)}
                className="flex items-center gap-4 my-2 rounded-lg cursor-pointer p-3 hover:bg-neutral-800"
              >
                <div>
                  <img src={UserImg} alt="" className="w-17 rounded-full" />
                </div>
                <div>
                  <h1>{fallower.username}</h1>
                  <h1 className="text-neutral-400">{fallower.name}</h1>
                </div>
              </div>
            );
          })}
        </div>

        <hr />
      </div>
      <Outlet />
    </>
  );
};

export default Notification;
