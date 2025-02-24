import React, { useState, useContext } from "react";
// assets
import UserImg from "../assets/user.jpg";
import UserImg1 from "../assets/1.png";
import Vide1 from "../assets/vide1.mp4";
import Vide2 from "../assets/vide2.mp4";
import HomeImg from "../assets/home_chack.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/logo1.png";

// axios
import axios from "axios";
// toast
import toast from "react-hot-toast";
// react icon
import { FaRegHeart } from "react-icons/fa";
// contex
import { UserContext } from "../userContext";

const Home = () => {
  const [isLiked, setIsLiked] = useState(false);

  const video = [
    { id: 1, videomp: Vide1 },
    { id: 2, videomp: Vide2 },
  ];

  const navigate = useNavigate();
  let { user } = useContext(UserContext);
  const { people } = useContext(UserContext);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // follow
  const handleFallow = (item) => {
    try {
      const currentUserId = user._id;
      axios.post(`/api/${item._id}/fallow`, { currentUserId });
      toast.success("send fallow");
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
                    src={UserImg1}
                    alt="User"
                    className="w-20 h-20 rounded-full"
                  />
                  <h2 className="truncate mt-2">{item.username}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto p-4">
            <div className="relative">
              <div className="space-y-4">
                <video
                  controls
                  className="w-full rounded-lg shadow-lg"
                  src={Vide2}
                >
                </video>
              </div>
              <div className="absolute right-4 bottom-15 flex flex-col gap-4">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill={isLiked ? "red" : "none"}
                      viewBox="0 0 24 24"
                      stroke={isLiked ? "red" : "white"}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <span className="text-white text-sm mt-1">
                    {isLiked ? "1" : "0"}
                  </span>
                </div>

                <button className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>

                <button className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto p-4">
            <div className="relative">
              <div className="space-y-4">
                <video
                  controls
                  className="w-full rounded-lg shadow-lg"
                  src={Vide1}
                >
                </video>
              </div>
              <div className="absolute right-4 bottom-15 flex flex-col gap-4">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill={isLiked ? "red" : "none"}
                      viewBox="0 0 24 24"
                      stroke={isLiked ? "red" : "white"}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <span className="text-white text-sm mt-1">
                    {isLiked ? "1" : "0"}
                  </span>
                </div>

                <button className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>

                <button className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
            <div
              key={item._id}
              className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <div
                onClick={() => handleProfile(item)}
                className="flex items-center gap-4"
              >
                <img
                  src={UserImg1 || "/placeholder.svg"}
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
                className="cursor-pointer ml-auto text-sm text-blue-600 hover:text-white"
              >
                follow
              </button>
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
    </>
  );
};

export default Home;
