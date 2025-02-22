import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineGridOn } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiShieldUserFill } from "react-icons/ri";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/react";
import UserImg1 from "../assets/1.png";
import { UserContext } from "../userContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [settings, setSettings] = useState(false);
  const [followers, setFollowers] = useState(false);
  const [following, setFollowing] = useState(false);

  if (!user) {
    navigate("/login");
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSettings = () => {
    setSettings(true);
    setFollowers(false);
    setFollowing(false);
    onOpen(true);
  };

  const handleFollowers = () => {
    setSettings(false);
    setFollowers(true);
    setFollowing(false);
    onOpen(true);
  };

  const handleFollowing = () => {
    setSettings(false);
    setFollowers(false);
    setFollowing(true);
    onOpen(true);
  };

  const handleLogout = () => {
    axios.post("/api/auth/logout");
    toast.success("Logged out successfully.");
    navigate("/login");
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between gap-6">
        <img
          src={UserImg1}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-neutral-700"
        />
        <div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-white">
              {user ? user.username : "User Name"}
            </h1>
            <button className="bg-blue-600 px-4 py-2 text-sm font-semibold rounded-md hover:bg-blue-700">
              Edit Profile
            </button>
            <IoIosSettings
              onClick={handleSettings}
              className="h-6 w-6 text-white cursor-pointer hover:text-blue-500"
            />
          </div>
          <div className="flex gap-6 mt-4">
            <span className="text-white">
              <strong>0</strong> Posts
            </span>
            <span
              onClick={handleFollowers}
              className="text-white cursor-pointer hover:underline"
            >
              <strong>0</strong> Followers
            </span>
            <span
              onClick={handleFollowing}
              className="text-white cursor-pointer hover:underline"
            >
              <strong>0</strong> Following
            </span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-12 border-b border-neutral-700 py-4 mt-8">
        <h3
          className={`cursor-pointer text-lg font-semibold ${
            selectedCategory === 1
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-neutral-400"
          }`}
          onClick={() => handleCategoryClick(1)}
        >
          <MdOutlineGridOn className="inline mr-1" /> Posts
        </h3>
        <h3
          className={`cursor-pointer text-lg font-semibold ${
            selectedCategory === 2
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-neutral-400"
          }`}
          onClick={() => handleCategoryClick(2)}
        >
          <IoBookmarkSharp className="inline mr-1" /> Saved
        </h3>
        <h3
          className={`cursor-pointer text-lg font-semibold ${
            selectedCategory === 3
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-neutral-400"
          }`}
          onClick={() => handleCategoryClick(3)}
        >
          <RiShieldUserFill className="inline mr-1" /> Tagged
        </h3>
      </div>

      {/* Content */}
      <div className="mt-8">
        {selectedCategory === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg">
                  <MdOutlinePhotoCamera className="text-4xl text-neutral-500 mb-4" />
                  <h2 className="text-lg font-semibold text-white mb-2">
                    Share a Photo
                  </h2>
                  <p className="text-neutral-400 mb-4">
                    Photos you share will appear on your profile.
                  </p>
                  <button className="bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-blue-600">
                    Share Now
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}

        {selectedCategory === 2 && (
          <div className="text-center">
            <p className="text-neutral-400">You have no saved posts yet.</p>
          </div>
        )}

        {selectedCategory === 3 && (
          <div className="text-center">
            <p className="text-neutral-400">
              You have not been tagged in any posts.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-neutral-800 text-white rounded-md"
      >
        <ModalContent>
          <ModalHeader>
            {settings && "Settings"}
            {followers && "Followers"}
            {following && "Following"}
          </ModalHeader>
          <ModalBody>
            {settings && (
              <div className="text-center">
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:underline"
                >
                  Logout
                </button>
              </div>
            )}
            {followers && <div>List of followers</div>}
            {following && <div>List of following</div>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Profile;
