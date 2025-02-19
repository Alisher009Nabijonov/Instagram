import React from "react";
// assets
import UserImg from "../assets/user.jpg";
import HomeImg from "../assets/home_chack.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto py-8 px-6 flex justify-between gap-10">
        <div className="w-180">
          <div className="flex gap-4">
            <div className="w-20">
              <img
                src={UserImg}
                alt="User"
                className="w-20 h-20 rounded-full"
              />
              <h2 className="truncate mt-2">Nabijonov_5355</h2>
            </div>
            <div className="w-20">
              <img
                src={UserImg}
                alt="User"
                className="w-20 h-20 rounded-full"
              />
              <h2 className="truncate mt-2">Nabijonov_5355</h2>
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
        <div className="w-100">
          <div className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors">
            <img
              src={UserImg || "/placeholder.svg"}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Nabijonov_00928</h3>
              {/* <p className="text-neutral-400 text-sm">Nabijonov_5355</p> */}
            </div>
            <button className="cursor-pointer ml-auto text-sm text-blue-600 hover:text-white">
              switch
            </button>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-neutral-400">Recommendations for you</h1>
            <NavLink to="/people">
              <h1 className="cursor-pointer hover:text-neutral-400 ">All</h1>
            </NavLink>
          </div>
          <div className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors">
            <img
              src={UserImg || "/placeholder.svg"}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Nabijonov_00928</h3>
              <p className="text-neutral-400 text-sm">Nabijonov_5355</p>
            </div>
            <button className="cursor-pointer ml-auto text-sm text-blue-600 hover:text-white">
              Subscribe
            </button>
          </div>
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
