import React, { useState, useContext, useEffect } from "react";
// assets
import UserImg from "../assets/user.jpg";
import UserImg1 from "../assets/1.png";
import Vide1 from "../assets/vide1.mp4";
import Vide2 from "../assets/vide2.mp4";
import HomeImg from "../assets/home_chack.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/logo1.png";
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
// axios
import axios from "axios";
// toast
import toast from "react-hot-toast";
// react icon
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { BsFillSave2Fill } from "react-icons/bs";

// contex
import { UserContext } from "../userContext";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [comment, setComment] = useState("No comment");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [settings, setSettings] = useState(false);
  const [fallowers, setFallowers] = useState(false);
  const [fallowing, setFallowing] = useState(false);

  useEffect(() => {
    const savedComment = localStorage.getItem("comment");
    if (savedComment) {
      setComment(savedComment);
    }
  }, []);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      setComment(inputValue);
      localStorage.setItem("comment", inputValue);
      setInputValue("");
    }
  };
  const video = [
    { id: 1, videomp: Vide2 },
    { id: 2, videomp: Vide1 },
  ];
  const video3 = [];

  const navigate = useNavigate();
  let { user } = useContext(UserContext);
  const { people } = useContext(UserContext);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [visibleButtons, setVisibleButtons] = useState(
    people.reduce((acc, item) => ({ ...acc, [item._id]: true }), {})
  );

    const [isFirstButtonVisible, setIsFirstButtonVisible] = useState(true);
    const [isSecondButtonVisible, setIsSecondButtonVisible] = useState(false);
  
    const handleSecondButtonClick = () => {
      setIsSecondButtonVisible(false);
      setIsFirstButtonVisible(true);
    };
  
  // follow
  const handleFallow = (item) => {
    try {
      const currentUserId = user._id;
      axios.post(`/api/${item._id}/fallow`, { currentUserId });
      toast.success("send fallow");
      setVisibleButtons((prev) => ({ ...prev, [item._id]: false })); // setIsFirstButtonVisible(false);
      setIsSecondButtonVisible(true);
      setIsFirstButtonVisible(false);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleProfile = (item) => {
    navigate(`/user/${item._id}`);
  };

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };



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

  // likes
  const [isLiked, setIsLiked] = useState(() => {
    return JSON.parse(localStorage.getItem("isLiked")) || false;
  });

  const [likeCount, setLikeCount] = useState(() => {
    return JSON.parse(localStorage.getItem("likeCount")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("isLiked", JSON.stringify(isLiked));
    localStorage.setItem("likeCount", JSON.stringify(likeCount));
  }, [isLiked, likeCount]);

  const handleLike = () => {
    const newLikeState = !isLiked;
    const newLikeCount = newLikeState ? likeCount + 1 : likeCount - 1;

    setIsLiked(newLikeState);
    setLikeCount(newLikeCount);
  };

  return (
    <>
      <div
        id="responsive_sidebar_max"
        className="z-999 fixed top-0 w-full flex items-center justify-between border-b-1 py-2 px-10 bg-black"
      >
        <div>
          <p className="text-xl">Instagram</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
              />
            </svg>
            <input
              type="text"
              placeholder="Поиск"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            {searchQuery && (
              <div className="absolute top-12 left-0 w-full bg-gray-800 rounded-lg shadow-lg z-50">
                {filteredPeople.length > 0 ? (
                  filteredPeople.map((person) => (
                    <div
                      key={person._id}
                      className="flex items-center gap-4 p-3 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
                    >
                      <img
                        src={UserImg1}
                        alt={person.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-200">
                          {person.username}
                        </h3>
                        <p className="text-sm text-gray-400">{person.name}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="p-3 text-gray-400">No results found.</p>
                )}
              </div>
            )}
          </div>
          <div>
            <p className="text-xl">
              <NavLink to="/notification">
                <FaRegHeart />
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 mt-5 px-6 flex justify-between gap-10">
        <div id="home_right_user" className="px-10 w-200">
          <div className="flex items-center gap-4">
            {people.map((item) => (
              <div
                onClick={() => handleProfile(item)}
                className="flex gap-4 cursor-pointer"
              >
                <div className="w-20">
                  <img
                    src={`http://localhost:5000${item.avatar}`}
                    alt="User"
                    className="w-20 h-20 rounded-full"
                  />
                  <h2 className="truncate mt-2">{item.username}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto p-4">
            <div className="">
              {video.map((item) => (
                <div key={item.id} className="space-y-4">
                  <video
                    controls
                    className="w-80 mt-2 mx-auto shadow-lg border-2 border-neutral-500 rounded-sm z-10 "
                    src={item.videomp}
                  ></video>
                  <div className="w-80 mx-auto py-4 px-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-2xl">
                        <p
                          onClick={handleLike}
                          style={{ color: isLiked ? "red" : "inherit" }}
                          className="cursor-pointer"
                        >
                          <FaHeart />
                        </p>
                        <p onClick={openModal1} className="cursor-pointer">
                          <FaCommentDots />
                        </p>
                        <p>
                          <LuSend />
                        </p>
                      </div>
                      <div className="text-2xl">
                        <p>
                          <BsFillSave2Fill />
                        </p>
                      </div>
                    </div>
                    <div className="my-4">
                      <h1>{likeCount} Likes</h1>
                      <h1 className="text-neutral-400 my-1">
                        View all comments (0)
                      </h1>
                      {/* <h1 className="text-neutral-400">Add to comment</h1> */}
                      <hr className="mt-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {isModalOpen1 && (
              <div
                id="modal_oyna_form"
                className="fixed inset-0 flex items-center justify-center bg-opacity-100 z-50 bg-gray-900 bg-opacity-50"
                onClick={closeModal1}
              >
                <div
                  className="bg-neutral-800 p-6 px-10 rounded-lg shadow-lg max-w-md w-full relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-end gap-10">
                    <button
                      className="text-white text-end mb-4 rounded-md text-xl cursor-pointer"
                      onClick={closeModal1}
                    >
                      X
                    </button>
                  </div>

                  <div className="mb-4">
                    <p className="text-white text-lg mb-2">{comment}</p>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    onClick={handleButtonClick}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="my-10">
            <div className="text-center flex flex-col items-center justify-center">
              <img
                src={HomeImg}
                alt=""
                className="flex items-center justify-center"
              />
              <h1>You have viewed all updates</h1>
              <h2 className="mt-1 text-neutral-400 mb-3">
                You have viewed all new publications for the last 3 days.
              </h2>
            </div>
            <div className="w-full h-0.5 bg-neutral-800 mb-4 mt-10"></div>
            <h1 className="text-xl">Recommended publications</h1>
          </div>
        </div>
        <div id="home_left_people" className="ml-10">
          <div className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors">
            <img
              src={UserImg1 || "/placeholder.svg"}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">
                {user ? user.username : "user name"}
              </h3>
            </div>
            <button
              onClick={openModal}
              className="cursor-pointer ml-auto text-sm text-blue-600 hover:text-white"
            >
              switch
            </button>
          </div>
          {isModalOpen && (
            <div
              id="modal_oyna_form"
              className="fixed inset-0 flex items-center justify-center bg-opacity-100  z-50"
              onClick={closeModal}
            >
              <div
                className="bg-neutral-800 p-6 px-10 rounded-lg shadow-lg max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-end gap-10">
                  <button
                    className=" text-white text-end mb-4 rounded-md text-xl cursor-pointer"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <img src={LogoImg} alt="" className="mx-auto my-2" />
                <div>
                  <h1 className="my-4">Email: {user.email}</h1>
                  <h1>Profile: {user.createdAt}</h1>
                  <h1>Password: none</h1>
                  <button
                    onClick={closeModal}
                    className="px-6 mx-auto text-center rounded-sm flex mt-10 py-2 bg-blue-600 hover:bg-blue-700"
                  >
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between">
            <h1 className="text-neutral-400">Recommendations for you</h1>
            <NavLink to="/people">
              <h1 className="cursor-pointer hover:text-neutral-400 ">All</h1>
            </NavLink>
          </div>
          {people.map((item) => (
            <div id="hover-box" key={item._id}>
              <div className="cursor-pointer flex items-center justify-between gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors">
                <div
                  onClick={() => handleProfile(item)}
                  className="flex items-center gap-4"
                >
                  <img
                    src={`http://localhost:5000${item.avatar}`}
                    alt="User"
                    className="w-17 h-17 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{item.username}</h3>
                    <p className="text-neutral-400 text-sm">{item.name}</p>
                  </div>
                </div>
                <div>
                  {visibleButtons[item._id] && (
                    <button
                      key={item._id}
                      onClick={() => handleFallow(item)}
                      className="cursor-pointer p-4 text-blue-500 rounded-lg hover:text-white"
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
              <div id="hover-text">
                <div
                  onClick={() => handleProfile(item)}
                  className="flex items-center gap-3 px-4"
                >
                  <div>
                    <img src={UserImg1} alt="" className="w-18 rounded-full" />
                  </div>
                  <div>
                    <h1>{item.username}</h1>
                    <h1 className="text-neutral-400">{item.name}</h1>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <h2 className="mt-3 text-[#a29965] cursor-pointer">
                    <span className="text-white font-bold">0</span>publications
                  </h2>
                  <h2
                    onClick={handleFallowers}
                    className=" mt-3 text-[#a29965] cursor-pointer"
                  >
                    <span className="text-white font-bold">
                      {user ? user.followers.length : 0}
                    </span>
                    subscribers
                  </h2>
                  <h2
                    onClick={handleFallowwing}
                    className=" mt-3 text-[#a29965] cursor-pointer"
                  >
                    <span className="text-white font-bold">
                      {user ? user.following.length : 0}
                    </span>
                    subscriptions
                  </h2>
                </div>
                <div>
                  {isFirstButtonVisible && (
                    <button
                      onClick={() => handleFallow(item)}
                      className="w-full my-2 mt-4 cursor-pointer px-8 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                      Follow
                    </button>
                  )}
                  {isSecondButtonVisible && (
                    <button
                      onClick={handleSecondButtonClick}
                      className="w-full my-2 mt-4 px-8 cursor-pointer py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                      Un Follow
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div>
            <p className="mt-5  text-xs text-neutral-400">
              Information Help Press API Vacancies Confidentiality Terms and
              Conditions Places Language Meta Verified
            </p>
            <p className="mt-5 text-neutral-400">© 2025 Instagram from Meta</p>
          </div>
        </div>
      </div>
      <div className="login_bottom_link_bottom">
        <div className="link">
          <a href="">Meta</a>
          <a href="">Information</a>
          <a href="">Blog</a>
          <a href="">Vacancies</a>
          <a href="">Help</a>
          <a href="">API</a>
          <a href="">Confidentiality</a>
          <a href="">Terms and Conditions</a>
          <a href="">Places</a>
          <a href="">Instagram Lite</a>
          <a href="">Threads</a>
          <a href="">Uploading Contacts and Non-Users</a>
          <a href="">Meta Verified</a>
        </div>
        <div className="year_versia">
          <h3 className="year_versia_h3">© 2025 Instagram from Meta</h3>
        </div>
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
              <ModalHeader className="flex flex-col text-center gap-1 text-2xl">
                {settings ? "settings" : "non"}
              </ModalHeader>
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
                  <div>
                    {user.followers.map((fallower) => {
                      return <div key={fallower._id}> {fallower.username}</div>;
                    })}
                  </div>
                )}

                {fallowing && (
                  <div>
                    {user.following.map((fallowingUser) => {
                      return (
                        <div key={fallowingUser._id}>
                          {fallowingUser.username}
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

export default Home;
