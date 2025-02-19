"use client";

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
import UserImg from "../assets/user.jpg";

const Sidebar = () => {
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

  return (
    <>
      <div className=" left-0 top-0 h-screen w-[275px] bg-black text-white border-r border-neutral-800 px-3 py-8">
        <NavLink to="/" className="flex items-center gap-2 px-4 mb-8">
          <FaInstagram className="w-7 h-7" />
          <span className="text-xl font-semibold">Instagram</span>
        </NavLink>

        <nav className="space-y-1">
          <NavLink
            to="/"
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <GoHome className="w-6 h-6" />
            <span className="text-[15px]">Home</span>
          </NavLink>

          <div
            onClick={toggleBars}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <CiSearch className="w-6 h-6" />
            <span className="text-[15px]">Search query</span>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
            <TbBrandSafari className="w-6 h-6" />
            <span className="text-[15px]">Interesting</span>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
            <BiMoviePlay className="w-6 h-6" />
            <span className="text-[15px]">Reels</span>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
            <FaFacebookMessenger className="w-6 h-6" />
            <span className="text-[15px]">Messages</span>
          </div>

          <div
            onClick={toggleNoti}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <FaRegHeart className="w-6 h-6" />
            <span className="text-[15px]">Notifications</span>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
            <MdOutlineCreateNewFolder className="w-6 h-6" />
            <span className="text-[15px]">Create</span>
          </div>

          <NavLink
            to="/profil"
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <CgProfile className="w-6 h-6" />
            <span className="text-[15px]">Profile</span>
          </NavLink>
        </nav>
      </div>

      {/* Search Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[350px] bg-black text-white border-r border-neutral-800 transition-transform duration-300 ${
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
              X
            </h2>
          </div>
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-neutral-800 text-white placeholder-neutral-400 rounded-lg px-4 py-2 focus:outline-none"
          />
          <hr className="my-6 border-neutral-800" />

          <div className="flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors">
            <img
              src={UserImg || "/placeholder.svg"}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Nabijonov_00928</h3>
              <p className="text-neutral-400 text-sm">Nabijonov_5355</p>
            </div>
            <button className="ml-auto text-sm text-neutral-400 hover:text-white">
              ×
            </button>
          </div>
        </div>
      </div>

      {/* Notifications Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[350px] bg-black text-white border-r border-neutral-800 transition-transform duration-300 ${
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
              X
            </h2>
          </div>
          <hr className="border-neutral-800" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
