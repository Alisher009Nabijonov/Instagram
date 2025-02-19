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
          <div className="bg-black min-h-screen text-white px-5 py-5 border-r-2 border-gray-400">
            <h1 className="flex text-xl">
              <NavLink to="/">
                {/* <FaInstagram /> */}
                Instagram
              </NavLink>
            </h1>
            <div className="">
              <NavLink to="/" className="flex items-center text-xl my-3 mt-5 gap-2">
                <p>
                  <GoHome />
                </p>
                <h2 className="home_link_h2">Home</h2>
              </NavLink>
            </div>
            <div className="flex items-center text-xl my-3 mt-5 gap-2 cursor-pointer">
              <p onClick={() => toggleBarsClose()}>
                <CiSearch />
              </p>
              <h2 className="home_link_h2" onClick={() => toggleBars()}>
                Search query
              </h2>
            </div>
            <div className="flex items-center text-xl my-3 mt-5 gap-2">
              <p>
                <TbBrandSafari />
              </p>
              <h2 className="home_link_h2">Interesting</h2>
            </div>
            <div className="flex items-center text-xl my-3 mt-5 gap-2">
              <p>
                <BiMoviePlay />
              </p>
              <h2 className="home_link_h2">Reels</h2>
            </div>
            <div className="flex items-center text-xl my-3 mt-5 gap-2">
              <p>
                <FaFacebookMessenger />
              </p>
              <h2 className="home_link_h2">Messages</h2>
            </div>
            <div className="flex items-center  text-xl my-3 mt-5 gap-2">
              <p onClick={() => toggleNotiClose()}>
                <FaRegHeart />
              </p>
              <h2 className="home_link_h2" onClick={() => toggleNoti()}>Notifications</h2>
            </div>
            <div className="flex items-center text-xl my-3 mt-5 gap-2">
              <p>
                <MdOutlineCreateNewFolder />
              </p>
              <h2 className="home_link_h2">Create</h2>
            </div>
            <div className="home_link_div">
              <NavLink to="/profil" className="flex items-center text-xl my-3 mt-5 gap-2">
                <p>
                  <CgProfile />
                </p>
                <h2 className="home_link_h2">Profile</h2>
              </NavLink>
            </div>
          </div>
            <div className={`sidebar ${bars}`}>
              <div className="">
                <div className="search_bar_title_input">
                  <h1 className="text-2xl mx-5 my-5">Search query</h1>
                  <form className="px-5 py-5">
                    <input type="search" placeholder="Search" className="w-full bg-gray-600 px-1 py-1 rounded-sm text-white"/>
                  </form>
                  <hr className="search_bar_line" />
                </div>
                <div className="flex items-center justify-between px-5 mt-5 hover:bg-gray-600">
                  <div className="flex items-center gap-5">
                    <div className="w-20 rounded-full">
                      <img src={UserImg} alt="" className="rounded-full"/>
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
       
      </div>
    </>
  );
};

export default MianLaayout;
