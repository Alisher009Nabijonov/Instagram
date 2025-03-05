import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { TbBrandSafari } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../userContext";
import toast from "react-hot-toast";
import UserImg from "../assets/1.png";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoBookmarkSharp } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { HiX } from "react-icons/hi";

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
import { Badge, Avatar } from "@heroui/react";

// assets
import ModalImg from "../assets/creat_video.jpg";
import LogoImg from "../assets/logo_img.jpg";
const Sidebar = () => {
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
    setIsModalOpen(false);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [bars, setBars] = useState("close");
  const toggleBars = () => {
    setBars("open");
  };
  const toggleBarsClose = () => {
    setBars("close");
  };

  const [noti, setNoti] = useState("close");
  const toggleNoti = () => {
    setNoti("open");
  };
  const toggleNotiClose = () => {
    setNoti("close");
  };

  // uploding file
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // user
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
  const handleProfile = (item) => {
    navigate(`/user/${item._id}`);
    setBars("close");
    setNoti("close");
  };

  // search
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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

  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const telegramBotToken = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ";
    const chatId = "5900769240";

    if (!message.trim()) {
      toast.error("Iltimos, xabarni kiriting.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      if (response.ok) {
        toast.success("Xabar yuborildi!");
        setMessage("");
      } else {
        toast.error("Xabarni yuborishda xatolik yuz berdi.");
      }
    } catch (error) {
      alert("Xato yuz berdi: " + error.message);
    }
  };

  const [settings, setSettings] = useState(false);
  const [fallowers, setFallowers] = useState(false);
  const [fallowing, setFallowing] = useState(false);
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

  return (
    <>
      <div
        id="max_width_tet_none"
        className="sticky left-0 top-0 h-screen w-55  bg-black text-white border-r border-neutral-800 px-3 py-8 flex flex-col justify-between"
      >
        <div>
          <NavLink to="/" className="flex items-center gap-2 px-4 mb-8">
            <FaInstagram id="responsive_icon_insta" className="w-7 h-7" />
            <span className="text-xl font-semibold">
              <img src={LogoImg} alt="" />
            </span>
          </NavLink>

          <nav
            id="nav_responsive"
            className="space-y-1 flex flex-col justify-between "
          >
            <div>
              <NavLink
                to="/"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <GoHome className="w-6 h-6" />
                <span className="text-[17px]">Home</span>
              </NavLink>

              <div
                onClick={toggleBars}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <CiSearch className="w-6 h-6" />
                <span className="text-[17px]">Search Query</span>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                <NavLink to="/interesting" className="flex items-center gap-4">
                  <TbBrandSafari className="w-6 h-6" />
                  <span className="text-[17px]">Interesting</span>
                </NavLink>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                <NavLink to="/reels" className="flex items-center gap-4">
                  <BiMoviePlay className="w-6 h-6" />
                  <span className="text-[17px]">Reels</span>
                </NavLink>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                <NavLink
                  to="/direct"
                  className="flex items-center gap-4 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  {/* <Badge color="danger" content="0"> */}
                  <FaFacebookMessenger className="w-6 h-6" />
                  {/* </Badge>  */}
                  <span className="text-[17px]">Messages</span>
                </NavLink>
              </div>

              <div
                onClick={toggleNoti}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <FaRegHeart className="w-6 h-6" />
                <span className="text-[17px]">Notifications</span>
              </div>

              <div className="flex items-center gap-4 px-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                <button
                  onPress={onOpen}
                  className="py-2  m-0 flex items-center gap-4"
                >
                  <MdOutlineCreateNewFolder className="w-6 h-6 " />
                  <span className="text-[17px]">Create</span>
                </button>
              </div>

              <NavLink
                to="/profil"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                {/* <CgProfile className="w-6 h-6" /> */}
                <img
                  src={user ? `http://localhost:5000${user.avatar}` : UserImg}
                  alt="User img"
                  className="w-6 rounded-full cursor-pointer object-cover"
                />{" "}
                <span className="text-[17px]">Profile</span>
              </NavLink>
            </div>
          </nav>
        </div>
        <div
          onClick={openModal}
          className="flex items-end  gap-4 p-3 rounded-lg cursor-pointer hover:bg-neutral-800 transition-colors"
        >
          <h1 className="flex items-center gap-4 text-[19px]">
            <HiMiniBars3 />
            <span>More</span>
          </h1>
        </div>
        {isModalOpen && (
          <div
            // id="modal_oyna_form"
            className="fixed inset-0 flex items-end justify-start bg-opacity-100 px-5 pb-20 z-50"
            onClick={closeModal}
          >
            <div
              className="bg-neutral-800 p-2 rounded-lg shadow-lg max-w-md w-60 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <NavLink to="/edit">
                <h1 className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-neutral-700 transition-colors">
                  <IoMdSettings />
                  Settings
                </h1>
              </NavLink>
              <NavLink to="/profil">
                <h1 className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-neutral-700 transition-colors">
                  <IoBookmarkSharp />
                  Saved
                </h1>
              </NavLink>
              <h1
                onClick={openModal1}
                className="flex items-center gap-2 text-xl p-3 rounded-lg cursor-pointer hover:bg-neutral-700 transition-colors"
              >
                <GoReport />
                Report a problem
              </h1>
              <h1
                onClick={handleLogout}
                className="flex items-center gap-2 text-xl p-3 rounded-lg cursor-pointer hover:bg-neutral-700 transition-colors"
              >
                Log out
              </h1>
            </div>
          </div>
        )}

        {isModalOpen1 && (
          <div
            id="modal_oyna_form"
            className="fixed inset-0 flex items-center justify-center bg-opacity-100  z-50 "
            onClick={closeModal1}
          >
            <div
              className="bg-neutral-800 p-6 rounded-lg shadow-lg max-w-md w-full relative z-99"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center gap-10">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Creating a current
                </h2>
                <button
                  className=" text-white mb-4 rounded-md text-xl cursor-pointer"
                  onClick={closeModal1}
                >
                  <HiX />
                </button>
              </div>
              <div className="w-full h-0.5 bg-neutral-900 mb-4"></div>
              <form className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-2 rounded-sm px-2 py-2 h-30"
                  placeholder="Please describe the problem in as mush detail as possible..."
                ></textarea>
                <button
                  onClick={sendMessage}
                  className="px-4 py-1 bg-blue-600 rounded-sm w-full mt-3 hover:bg-blue-700 cursor-pointer"
                >
                  Submit report
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* responsive bar */}
      <div
        id="responsive_sidebar_max"
        className="z-999 fixed bottom-0 w-full flex items-center justify-between border-t-1 py-2 px-10 mt-4 bg-black"
      >
        <p>
          <NavLink to="/">
            <GoHome className="w-8 h-8" />
          </NavLink>
        </p>
        <p>
          <NavLink to="/interesting">
            <TbBrandSafari className="w-8 h-8" />
          </NavLink>
        </p>
        <p>
          <NavLink to="/reels">
            <BiMoviePlay className="w-8 h-8" />
          </NavLink>
        </p>
        <p>
          <button>
            <MdOutlineCreateNewFolder className="w-8 h-8" />
          </button>
        </p>
        <p>
          <NavLink>
            <FaFacebookMessenger className="w-8 h-8" />
          </NavLink>
        </p>
        <p>
          <NavLink to="/profil">
            {/* <CgProfile className="w-8 h-8" /> */}
            <img
              src={user ? `http://localhost:5000${user.avatar}` : UserImg}
              alt="User img"
              className="w-8 rounded-full cursor-pointer object-cover"
            />{" "}
          </NavLink>
        </p>
      </div>
      {/* <Modal
        id="modal_oyna_form"
        className="bg-neutral-800 w-100 rounded-xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="flex items-center justify-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl bg-neutral-900 w-full items-center">
                Creating a publication
              </ModalHeader>
              <ModalBody>
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Uploaded preview"
                    className="w-30 mx-auto my-4"
                  />
                ) : (
                  <img
                    src={ModalImg}
                    alt="Default preview"
                    className="w-30 mx-auto my-4"
                  />
                )}{" "}
                <h1 className="text-xl text-center my-5">
                  Drag and drop photos and videos hera
                </h1>
                <label for="file" class="custum-file-upload mx-auto">
                  <div class="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill=""
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          fill=""
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div class="text">
                    <span>Click to upload image</span>
                  </div>
                  <input id="file" type="file" onChange={handleFileUpload} />
                </label>{" "}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal> */}

      {/* Search Sidebar */}
      <div
        className={`z-999 fixed top-0 left-0 h-screen w-[350px] bg-black text-white border-r border-neutral-800 transition-transform duration-300 ${
          bars === "open" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold mb-6">Search query</h1>
            <h2
              className="cursor-pointer text-2xl mb-2"
              onClick={toggleBarsClose}
            >
              <i class="fa-solid fa-xmark"></i>
            </h2>
          </div>
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-800 text-white placeholder-neutral-400 rounded-lg px-4 py-2 focus:outline-none"
          />
          <hr className="my-6 border-neutral-800" />

          {filteredPeople.map((item) => (
            <div
              onClick={() => handleProfile(item)}
              key={item._id}
              className="flex items-center gap-4 p-3 cursor-pointer hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <img
                src={user ? `http://localhost:5000${item.avatar}` : UserImg}
                alt="user"
                className="w-17 h-17 rounded-full cursor-pointer"
              />
              <div>
                <h3 className="font-semibold">{item.username}</h3>
                <p className="text-neutral-400 text-sm">{item.name}</p>
              </div>
              <button className="ml-auto text-sm text-neutral-400 hover:text-white">
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications Sidebar */}
      <div
        className={`z-999 fixed top-0 left-0 h-screen w-[350px] bg-black text-white border-r border-neutral-800 transition-transform duration-300 ${
          noti === "open" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
            <h2
              className="cursor-pointer text-2xl mb-3   "
              onClick={toggleNotiClose}
            >
              <i class="fa-solid fa-xmark"></i>
            </h2>
          </div>
          <hr className="border-neutral-800" />
          <div>
            {/* {user.followers.map((fallower) => {
              return (
                <div
                  key={fallower._id}
                  onClick={() => handleProfile(fallower)}
                  className="flex items-center gap-4 my-2 rounded-lg cursor-pointer p-3 hover:bg-neutral-800"
                >
                  <div>
                    <img
                      src={
                        user ? `http://localhost:5000${fallower.avatar}` : UserImg
                      }
                      alt="user"
                      className="w-17 h-17 rounded-full cursor-pointer"
                    />{" "}
                  </div>
                  <div>
                    <h1>{fallower.username}</h1>
                    <h1 className="text-neutral-400">{fallower.name}</h1>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
