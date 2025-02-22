import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

// assets
import UserImg1 from "../assets/1.png";
const Direct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex">
      <div className="w-80 px-2 py-4 border-r-2 h-173">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl">Nabijonov_5355</h1>
          <p className="text-xl">
            <FaEdit />
          </p>
        </div>
        <div className="px-1 py-3">
          <img src={UserImg1} alt="" className="w-25 mx-2 mt-4" />
          <p className="ml-4">Your nate</p>
        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl">Messages</h1>
          <p className="text-neutral-400 my-5">Requests </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto">
        <p className="border-2 rounded-full px-5 py-5 my-2 text-5xl">
          <FaFacebookMessenger />
        </p>
        <h1 className="text-xl mb-2">Your messages</h1>
        <h2 className="text-neutral-400 mb-2">
          Send personal photos and messages to a friend or group
        </h2>
        <button
          onClick={openModal}
          className="bg-blue-500 px-3 py-2 rounded-xl cursor-pointer hover:bg-blue-600"
        >
          Send message
        </button>
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
               New message
              </h2>
              <button
                className=" text-white mb-4 rounded-md text-xl cursor-pointer"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <div className="w-full h-0.5 bg-neutral-800 mb-4"></div>
            <form className="w-full flex items-center">
              <h1>To whom</h1>
              <input
                type="text"
                placeholder="Search"
                className=" bg-none py-1 px-3 rounded-sm my-3"
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
    </div>
  );
};

export default Direct;
