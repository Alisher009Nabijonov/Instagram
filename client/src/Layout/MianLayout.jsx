import { Outlet } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { TbBrandSafari } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const MianLaayout = () => {
  return (
    <>
      <div className="flex">
        <div className="sidebar_main">
          <h1 className="login_logo_h1">Instagram</h1>
          <div className="home_link_div">
            <p>
              <GoHome />
            </p>
            <h2 className="home_link_h2">Home</h2>
          </div>
          <div className="home_link_div">
            <p>
              <CiSearch />
            </p>
            <h2 className="home_link_h2">Search query</h2>
          </div>
          <div className="home_link_div">
            <p>
              <TbBrandSafari />
            </p>
            <h2 className="home_link_h2">Interesting</h2>
          </div>
          <div className="home_link_div">
            <p>
              <BiMoviePlay />
            </p>
            <h2 className="home_link_h2">Reels</h2>
          </div>
          <div className="home_link_div">
            <p>
              <FaFacebookMessenger />
            </p>
            <h2 className="home_link_h2">Messages</h2>
          </div>
          <div className="home_link_div">
            <p>
              <FaRegHeart />
            </p>
            <h2 className="home_link_h2">Notifications</h2>
          </div>
          <div className="home_link_div">
            <p>
              <MdOutlineCreateNewFolder />
            </p>
            <h2 className="home_link_h2">Create</h2>
          </div>
          <div className="home_link_div">
            <p>
              <CgProfile />
            </p>
            <h2 className="home_link_h2">Profile</h2>
          </div>
        </div>
        <div>
          <Outlet />
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

export default MianLaayout;
