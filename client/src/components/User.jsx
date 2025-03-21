import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "@heroui/react";
import UserImg2 from "../assets/1.png";
import UserImg from "../assets/1.png";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlineGridOn } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiShieldUserFill } from "react-icons/ri";
import { UserContext } from "../userContext";
import { FaChevronLeft } from "react-icons/fa";

// heroui
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import toast from "react-hot-toast";

const User = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [settings, setSettings] = useState(false);
  const [fallowers, setFallowers] = useState(false);
  const [fallowing, setFallowing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const { id } = useParams();
  let { user } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const [isFirstButtonVisible, setIsFirstButtonVisible] = useState(true);
  const [isSecondButtonVisible, setIsSecondButtonVisible] = useState(false);

  const handleSecondButtonClick = () => {
    setIsSecondButtonVisible(false);
    setIsFirstButtonVisible(true);
  };

  const handleFallow = (item) => {
    try {
      const currentUserId = user._id;
      axios.post(`/api/${item._id}/fallow`, { currentUserId });
      toast.success("send fallow");
      setIsSecondButtonVisible(true);
      setIsFirstButtonVisible(false);
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

  const handleFallowers = () => {
    setSettings(false);
    setFallowers(true);
    setFallowing(false);
    onOpen(true);
  };
  const handleFallowwing = () => {
    setSettings(false);
    setFallowers(false);
    setFallowing(true);
    onOpen(true);
  };

  const [searchFollowers, setSearchFollowers] = useState("");
  const [searchFollowing, setSearchFollowing] = useState("");

  return (
    <>
      {userData ? (
        <div id="profile_bar_responsive">
          <div className="flex items-center px-10 py-2 w-full">
            <div className="text-center">
              <h1 className="text-center mx-auto">
                <FaChevronLeft className="text-center mx-auto"/>
              </h1>
            </div>
            <div className="text-center mx-auto">
              <h1>{userData.username}</h1>
            </div>
          </div>
          <hr />
        </div>
      ) : (
        <div></div>
      )}
      <div>
        {userData ? (
          <>
            <div className="max-w-4xl mx-auto py-8 px-6 mt-5">
              <div className="flex items-center justify-center gap-20 px-8">
                <div className=" ">
                  <img
                  id="user_img_profile"
                    src={
                      user
                        ? `http://localhost:5000${userData.avatar}`
                        : UserImg2
                    }
                    alt={userData.name}
                    className="w-30 h-30 rounded-full cursor-pointer object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-6">
                    <h1 className="text-xl">{userData.username}</h1>
                    {isFirstButtonVisible && (
                      <button
                        onClick={() => handleFallow(userData)}
                        className="cursor-pointer px-8 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
                      >
                        Follow
                      </button>
                    )}
                    {isSecondButtonVisible && (
                      <button
                        onClick={handleSecondButtonClick}
                        className="px-5 cursor-pointer py-2  rounded-lg border border-white hover:bg-white/10"
                      >
                        Unfollow
                      </button>
                    )}
                    <button className="text-2xl">
                      <FiMoreHorizontal />
                    </button>
                  </div>
                  <div className="flex items-center gap-6">
                    <h2 className="mt-3 text-[#a8a58b] cursor-pointer">
                      <span className="text-white font-bold mr-1">0</span>
                      posts
                    </h2>
                    <h2
                      onClick={handleFallowers}
                      className=" mt-3 text-[#a8a58b] cursor-pointer"
                    >
                      <span className="text-white font-bold mr-1">
                        {user ? userData.followers.length : 0}
                      </span>
                      followers
                    </h2>
                    <h2
                      onClick={handleFallowwing}
                      className=" mt-3 text-[#a8a58b] cursor-pointer"
                    >
                      <span className="text-white font-bold mr-1">
                        {user ? userData.following.length : 0}
                      </span>
                      fallowing
                    </h2>
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
      <Modal
        className="bg-neutral-800 w-100 rounded-sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdropClassName="bg-black/50"
      >
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalBody>
                {settings && (
                  <div>
                    <h1
                      onClick={handleLogout}
                      className="text-xl text-center my-1 cursor-pointer"
                    >
                      Log out
                    </h1>
                    <div className="w-full h-0.5 my-4 bg-neutral-600"></div>
                    <h1
                      onClick={onClose}
                      className="text-xl text-center my-1 cursor-pointer"
                    >
                      Cancel
                    </h1>
                  </div>
                )}

                {fallowers && (
                  <div className="flex gap-3 flex-col">
                    <p className="font-bold text-xl text-center">Followers</p>
                    <input
                      className="bg-[#474747] px-2 py-1 outline-none rounded"
                      placeholder="Search"
                      type="text"
                      value={searchFollowers}
                      onChange={(e) => setSearchFollowers(e.target.value)}
                    />
                    {userData.followers
                      .filter((fallower) =>
                        fallower.username
                          .toLowerCase()
                          .includes(searchFollowers.toLowerCase())
                      )
                      .map((fallower) => {
                        return (
                          <div
                            className="flex items-center justify-between"
                            key={fallower._id}
                          >
                            <Link to={`/user/${fallower._id}`}>
                              <div className="flex gap-3">
                                <img
                                  className="w-8 h-8 object-cover rounded-full"
                                  src={`http://localhost:5000${fallower.avatar}`}
                                  alt="userimg"
                                />
                                {fallower.username}
                              </div>
                            </Link>

                            <Link to={`/user/${fallower._id}`}>
                              <button className="bg-[#474747] hover:bg-[#707070] cursor-pointer px-5 h-8 rounded-md">
                                view
                              </button>
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                )}

                {fallowing && (
                  <div className="flex gap-3 flex-col">
                    <p className="font-bold text-xl text-center">Following</p>
                    <input
                      className="bg-[#474747] px-2 py-1 outline-none rounded"
                      placeholder="Search"
                      type="text"
                      value={searchFollowing}
                      onChange={(e) => setSearchFollowing(e.target.value)}
                    />
                    {userData.following
                      .filter((fallower) =>
                        fallower.username
                          .toLowerCase()
                          .includes(searchFollowing.toLowerCase())
                      )
                      .map((fallower) => {
                        return (
                          <div
                            className="flex items-center justify-between"
                            key={fallower._id}
                          >
                            <Link to={`/user/${fallower._id}`}>
                              <div className="flex gap-3">
                                <img
                                  className="w-8 h-8 object-cover rounded-full"
                                  src={`http://localhost:5000${fallower.avatar}`}
                                  alt="userimg"
                                />
                                {fallower.username}
                              </div>
                            </Link>
                            <Link to={`/user/${fallower._id}`}>
                              <button className="bg-[#474747] hover:bg-[#707070] cursor-pointer px-5 h-8 rounded-md">
                                view
                              </button>
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                )}
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default User;
