import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "@heroui/react";
import UserImg2 from "../assets/1.png";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlineGridOn } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiShieldUserFill } from "react-icons/ri";
import { UserContext } from "../userContext";

const User = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const { id } = useParams();
  let { user } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleFallow = (item) => {
    try {
      const currentUserId = user._id;
      axios.post(`/api/${item._id}/fallow`, { currentUserId });
      toast.success("send fallow");
    } catch (error) {
      alert(error.message);
    }
  };
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
      {userData ? (
        // <div>{userData.name}</div>
        <>
          <div className="max-w-4xl mx-auto py-8 px-6">
            <div className="flex items-center justify-center gap-20 px-8">
              <div className=" ">
                <img
                  src={UserImg2}
                  alt=""
                  className="w-35 rounded-full cursor-pointer"
                />
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <h1 className="text-xl">{userData.username}</h1>
                  <button
                    onClick={() => handleFallow(item)}
                    className="px-4 py-1 bg-blue-600 rounded-sm cursor-pointer hover:bg-blue-700"
                  >
                    Fallow
                  </button>
                  <button className="text-2xl">
                    <FiMoreHorizontal />
                  </button>
                </div>
                <div className="flex items-center my-5 gap-5">
                  <h1>0 publication</h1>
                  <h1>0 subscribers</h1>
                  <h1>0 subscriptions</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-0.5 bg-neutral-800 mt-20"></div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex justify-center gap-16">
                <h3
                  className={`flex cursor-pointer items-center gap-2 border-t py-4 text-[12px] font-semibold uppercase tracking-wider ${
                    selectedCategory === 1
                      ? "border-white"
                      : "border-transparent text-zinc-500"
                  }`}
                  onClick={() => handleCategoryClick(1)}
                >
                  <MdOutlineGridOn className="h-3 w-3" />
                  Publications
                </h3>
                <h3
                  className={`flex cursor-pointer items-center gap-2 border-t-2 py-4 text-xs font-semibold uppercase tracking-wider ${
                    selectedCategory === 3
                      ? "border-white"
                      : "border-transparent text-zinc-500"
                  }`}
                  onClick={() => handleCategoryClick(3)}
                >
                  <RiShieldUserFill className="h-3 w-3" />
                  Marks
                </h3>
              </div>
            </div>
            {selectedCategory === 1 && (
              <div className=" flex flex-col items-center justify-center mx-auto py-12 px-5  ">
                <p className="rounded-full w-20 h-20 flex items-center justify-center border-1 p-4 mx-auto mb-5">
                  <MdOutlinePhotoCamera className="h-8 w-8 " />
                </p>

                <h2 className="text-2xl  text-center mb-4 font-semibold">
                  There are no publications yet
                </h2>
              </div>
            )}
            {selectedCategory === 3 && (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <p className="rounded-full border-1 p-4">
                  <RiShieldUserFill className="h-12 w-12" />
                </p>
                <h1 className="text-2xl font-semibold">No photo</h1>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center my-80">
          <Spinner color="Danger" label="Loading..." />
        </div>
      )}
    </div>
  );
};

export default User;
