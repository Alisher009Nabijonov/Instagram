import React, { useState } from "react";
// assets
import UserImg from "../assets/user.jpg";
import HomeImg from "../assets/home_chack.jpg";
import { NavLink } from "react-router-dom";

// react icon
import { FaRegHeart } from "react-icons/fa";

const Home = () => {
  const people = [
    {
      id: 1,
      img: UserImg,
      name: "Nabijonov_00928",
      userName: "Nabijonov_5355",
      btn: "Subscribe",
    },
    {
      id: 2,
      img: UserImg,
      name: "Nabijonov_00928",
      userName: "Nabijonov_5355",
      btn: "Subscribe",
    },
    {
      id: 3,
      img: UserImg,
      name: "Bobur_009",
      userName: "Bobur_009",
      btn: "Subscribe",
    },
    {
      id: 3,
      img: UserImg,
      name: "Muhammadali_007",
      userName: "Muhammadali_007",
      btn: "Subscribe",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const results = people.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPeople(results);
    } else {
      setFilteredPeople([]);
    }
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
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          {filteredPeople.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-gray-800 rounded-lg shadow-lg z-50">
              {filteredPeople.map((person) => (
                <div
                  key={person.id}
                  className="flex items-center gap-4 p-3 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
                >
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-200">
                      {person.name}
                    </h3>
                    <p className="text-sm text-gray-400">{person.userName}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <p className="text-xl">
            <NavLink to="/notification">
              <FaRegHeart />
            </NavLink>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 mt-5 px-6 flex justify-between gap-10">
        <div id="home_right_user" className="px-10 w-200">
          <div className="flex gap-4 ">
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
        <div id="home_left_people" className="ml-10">
          <div className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors">
            <img
              src={UserImg || "/placeholder.svg"}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Nabijonov_00928</h3>
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
          {people.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <img
                src={item.img || "/placeholder.svg"}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-neutral-400 text-sm">{item.userName}</p>
              </div>
              <button className="cursor-pointer ml-auto text-sm text-blue-600 hover:text-white">
                {item.btn}
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
