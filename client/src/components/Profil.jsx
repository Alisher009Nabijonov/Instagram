import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineGridOn } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiShieldUserFill } from "react-icons/ri";
import { MdOutlinePhotoCamera } from "react-icons/md";
import axios from "axios";

import { FaPhone } from "react-icons/fa";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

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
import { Tooltip } from "@heroui/react";

import UserImg from "../assets/1.png";

// contex
import { UserContext } from "../userContext";

// react-router-dom
import { useNavigate, Link, Await } from "react-router-dom";
import toast from "react-hot-toast";

const Profil = () => {
  const navigate = useNavigate();
  let { user } = useContext(UserContext);
  if (!user) {
    navigate("/login");
  }else{
    navigate("/profil")
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [settings, setSettings] = useState(false);
  const [fallowers, setFallowers] = useState(false);
  const [fallowing, setFallowing] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    setSavedNote(note);
    setNote("");
  };

  // modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      alert("Logout successful");
      navigate("/login");
      window.location.reload();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const [searchFollowers, setSearchFollowers] = useState("");
  const [searchFollowing, setSearchFollowing] = useState("");

  return (
    <>
      <div className="max-w-4xl mx-auto py-8 px-6">
        <div className="flex items-center py-4 gap-10">
          <div>
            <img
              src={user ? `http://localhost:5000${user.avatar}` : UserImg}
              alt="User img"
              className="w-30 h-30 rounded-full cursor-pointer object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-xl">{user ? user.username : "user name"}</h1>
              <Link to="/edit">
                <button className="bg-neutral-700 px-6 py-2 text-sm rounded-sm cursor-pointer hover:bg-neutral-800">
                  Edit profil
                </button>
              </Link>
              <Link to="/archive">
                <button className="bg-neutral-700 px-6 py-2 text-sm rounded-sm cursor-pointer hover:bg-neutral-800">
                  View archive
                </button>
              </Link>
              <Tooltip content="Settings">
                <button
                  onClick={handleSettings}
                  className=" px-1 py-2 text-sm rounded-sm cursor-pointer"
                >
                  <IoIosSettings className="h-6 w-6" />
                </button>
              </Tooltip>
            </div>

            <div className="flex items-center gap-6">
              <h2 className="mt-3 text-[#afafaf] cursor-pointer flex items-center gap-2">
                {" "}
                <span className="text-white font-bold">0</span>Posts
              </h2>
              <h2
                onClick={handleFallowers}
                className=" mt-3 text-[#afafaf] cursor-pointer flex gap-2"
              >
                <span className="text-white font-bold">
                  {user ? user.followers.length : 0}
                </span>
                Followers
              </h2>
              <h2
                onClick={handleFallowwing}
                className=" mt-3 text-[#afafaf] cursor-pointer flex gap-2"
              >
                <span className="text-white font-bold">
                  {user ? user.following.length : 0}
                </span>
                Following
              </h2>
            </div>

            <p className="pt-5 text-sm font-extrabold">
              {user ? user.name : "Name"}
            </p>
            <p className=" pt-5 text-sm text-gray-300">
              {user ? (user.bio) : ("You bio will be showed here.")}
            </p>
          </div>
        </div>

        <div className="">
          <div
            className="cursor-pointer w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center text-4xl mt-10"
            onClick={openModal}
          >
            +
          </div>
          <h2 className="cursor-pointer ml-8 mt-2" onClick={openModal}>
            Add
          </h2>
        </div>

        {isModalOpen && (
          <div
            id="modal_oyna_form"
            className="fixed inset-0 flex items-center justify-center bg-opacity-100  z-50"
            onClick={closeModal}
          >
            <div
              className="bg-neutral-700 p-6 rounded-lg shadow-lg max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center gap-10">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Creating a current
                </h2>
                <button
                  className=" text-white mb-4 rounded-md text-xl cursor-pointer"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <div className="w-full h-0.5 bg-neutral-800 mb-4"></div>
              <form className="w-full">
                <input
                  type="text"
                  placeholder="Title of the current"
                  className="w-full bg-neutral-900 py-1 px-3 rounded-sm my-3"
                />
              </form>
              <div className="w-full h-0.5 bg-neutral-800 mt-4"></div>
              <div className="w-full">
                <h1 className="text-blue-600 font-bold text-center mt-3 cursor-pointer">
                  Next
                </h1>
              </div>
            </div>
          </div>
        )}

        <div className="w-full h-0.5 bg-neutral-800 mt-10"></div>
        <div className="flex items-center justify-center gap-3">
          <div className="flex justify-center gap-16">
            <h3
              className={`flex cursor-pointer items-center gap-2 border-t py-4 text-[12px] font-semibold uppercase tracking-wider ${selectedCategory === 1
                ? "border-white"
                : "border-transparent text-zinc-500"
                }`}
              onClick={() => handleCategoryClick(1)}
            >
              <MdOutlineGridOn className="h-3 w-3" />
              Publications
            </h3>
            <h3
              className={`flex cursor-pointer items-center gap-2 border-t-2 py-4 text-xs font-semibold uppercase tracking-wider ${selectedCategory === 2
                ? "border-white"
                : "border-transparent text-zinc-500"
                }`}
              onClick={() => handleCategoryClick(2)}
            >
              <IoBookmarkSharp className="h-3 w-3" />
              Saved
            </h3>
            <h3
              className={`flex cursor-pointer items-center gap-2 border-t-2 py-4 text-xs font-semibold uppercase tracking-wider ${selectedCategory === 3
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
          <div>
            <h1>First steps</h1>
            <div className="flex w-full gap-2">
              <div className="flex gap-2 w-100 mx-auto text-center">

                <div className="border-1 border-neutral-700 py-3 px-5 w-75 ">
                  <p className="rounded-full w-20 h-20 flex items-center justify-center bg-zinc-900 p-4 mx-auto mb-5">
                    <MdOutlinePhotoCamera className="h-8 w-8 text-zinc-400" />
                  </p>

                  <h2 className="text-lg font-semibold text-center mb-4">
                    Share photo
                  </h2>
                  <p className="text-sm mb-2 text-zinc-400">
                    Photos you share will appear on your profile
                  </p>
                  <button
                    onPress={onOpen}
                    className="cursor-pointer mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600"
                  >
                    Share your first photo
                  </button>
                </div>
              </div>
              <div className="flex gap-2"></div>
            </div>
          </div>
        )}
        {selectedCategory === 2 && (
          <div className="flex flex-col items-center gap-8 py-12">
            <div className="flex w-full justify-between px-4 text-sm">
              <p className="text-zinc-400">
                The list of saved items is visible only to you.
              </p>
              <p className="cursor-pointer text-blue-500 hover:text-blue-400">
                + New selection
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="rounded-full bg-zinc-800 p-4">
                <IoBookmarkSharp className="h-12 w-12" />
              </p>
              <h1 className="text-2xl font-semibold">Save</h1>
              <p className="max-w-md text-zinc-400">
                Save photos and videos you want to watch again. No one will be
                notified, and only you can see the saved items.
              </p>
            </div>
          </div>
        )}
        {selectedCategory === 3 && (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <p className="rounded-full bg-zinc-800 p-4">
              <RiShieldUserFill className="h-12 w-12" />
            </p>
            <h1 className="text-2xl font-semibold">Photo with you</h1>
            <p className="max-w-md text-zinc-400">
              This shows people who have tagged you in their photos.
            </p>
          </div>
        )}
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
        <ModalContent className="py-5">
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
                    <p className="font-bold text-2xl text-center">Followers</p>
                    <input
                      className="bg-[#474747] px-2 py-1 outline-none rounded"
                      placeholder="Search"
                      type="text"
                      value={searchFollowers}
                      onChange={(e) => setSearchFollowers(e.target.value)}
                    />
                    {user.followers
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
                            <div className="flex gap-3">
                              <img
                                className="w-8 rounded-full"
                                src={UserImg}
                                alt="userimg"
                              />
                              {fallower.username}
                            </div>
                            <button className="bg-[#474747] hover:bg-[#707070] cursor-pointer px-5 h-8 rounded-md">
                              remove
                            </button>
                          </div>
                        );
                      })}
                  </div>
                )}

                {fallowing && (
                  <div className="flex gap-3 flex-col">
                    <p className="font-bold text-2xl text-center">Following</p>
                    <input
                      className="bg-[#474747] px-2 py-1 outline-none rounded"
                      placeholder="Search"
                      type="text"
                      value={searchFollowing}
                      onChange={(e) => setSearchFollowing(e.target.value)}
                    />
                    {user.following
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
                            <div className="flex gap-3">
                              <img
                                className="w-8 rounded-full"
                                src={UserImg}
                                alt="userimg"
                              />
                              {fallower.username}
                            </div>
                            <button className="bg-[#474747] hover:bg-[#707070] cursor-pointer px-5 h-8 rounded-md">
                              remove
                            </button>
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

export default Profil;
