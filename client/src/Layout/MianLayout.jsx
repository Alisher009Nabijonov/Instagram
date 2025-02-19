import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

// react icon
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { TbBrandSafari } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa6";
// assets img
import UserImg from "../assets/user.jpg";
const MianLaayout = () => {
  let [bars, setBars] = useState("close");
  const toggleBars = () => {
    setBars("open");
  };
  const toggleBarsClose = () => {
    setBars("close");
  };

  let [noti, setNoti] = useState("close");
  const toggleNoti = () => {
    setNoti("open");
  };
  const toggleNotiClose = () => {
    setNoti("close");
  };
  return (
    <>
      <div>
        <div className="flex">
          <div className="sidebar_main">
            <h1 className="sidebar_logo">
              <NavLink to="/">
                <FaInstagram />
                Instagram
              </NavLink>
            </h1>
            <div className="home_link_div">
              <NavLink to="/">
                <p>
                  <GoHome />
                </p>
                <h2 className="home_link_h2">Home</h2>
              </NavLink>
            </div>
            <div className="home_link_div">
              <p onClick={() => toggleBarsClose()}>
                <CiSearch />
              </p>
              <h2 className="home_link_h2" onClick={() => toggleBars()}>
                Search query
              </h2>
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
              <p onClick={() => toggleNotiClose()}>
                <FaRegHeart />
              </p>
              <h2 className="home_link_h2" onClick={() => toggleNoti()}>Notifications</h2>
            </div>
            <div className="home_link_div">
              <p>
                <MdOutlineCreateNewFolder />
              </p>
              <h2 className="home_link_h2">Create</h2>
            </div>
            <div className="home_link_div">
              <NavLink to="/profil">
                <p>
                  <CgProfile />
                </p>
                <h2 className="home_link_h2">Profile</h2>
              </NavLink>
            </div>
          </div>
          <div className={`sidebar ${bars}`}>
            <div className="search_bar_main">
              <div className="search_bar_title_input">
                <h1 className="search_bar_h1">Search query</h1>
                <form className="search_bar_form">
                  <input type="search" placeholder="Search" />
                </form>
                <hr className="search_bar_line" />
              </div>
              <div className="search_bar_user">
                <div className="search_bar_user_img_name">
                  <div className="search_user_img">
                    <img src={UserImg} alt="" />
                  </div>
                  <div className="search_user_name">
                    <h3 className="search_user_last_name">Nabijonov_00928</h3>
                    <h3 className="search_user_name_h3">Nabijonov_5355</h3>
                  </div>
                </div>
                <div className="search_user_remove">
                  <h3 className="search_user_remove_h3">X</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={`sidebar ${noti}`}>
            <div className="search_bar_main">
              <div className="search_bar_title_input">
                <h1 className="search_bar_h1">Notifications</h1>
              
                <hr className="search_bar_line" />
              </div>
              {/* <div className="search_bar_user">
                <div className="search_bar_user_img_name">
                  <div className="search_user_img">
                    <img src={UserImg} alt="" />
                  </div>
                  <div className="search_user_name">
                    <h3 className="search_user_last_name">Nabijonov_00928</h3>
                    <h3 className="search_user_name_h3">Nabijonov_5355</h3>
                  </div>
                </div>
                <div className="search_user_remove">
                  <h3 className="search_user_remove_h3">X</h3>
                </div>
              </div> */}
            </div>
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
        {/* <div className="login_bottom_link_bottom">
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
        </div> */}
      </div>
    </>
  );
};

export default MianLaayout;
