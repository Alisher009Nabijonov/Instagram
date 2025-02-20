import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

import { FaAngleLeft } from "react-icons/fa6";
// assets
import UserImg from "../assets/user.jpg";
const Notification = () => {
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
  return (
    <>
      <div>
        <div className="flex items-center px-10 py-2 border-b-1">
          <p className="text-xl">
            <NavLink to="/">
              <FaAngleLeft />
            </NavLink>
          </p>

          <h1 className="text-center text-xl mx-auto">Notifications</h1>
        </div>
        {people.map((person) => (
          <div
            key={person.id}
            className="flex items-center justify-between gap-4 p-3 px-10 py-5 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3 ">
              <img
                src={person.img}
                alt={person.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-200">{person.name}</h3>
                <p className="text-sm text-gray-400">{person.userName}</p>
              </div>
            </div>
            <div>
              <p>
                <FaAngleRight />
              </p>
            </div>
          </div>
        ))}
        <hr />
      </div>
      <Outlet />
    </>
  );
};

export default Notification;
