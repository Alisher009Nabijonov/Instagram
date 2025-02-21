import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

const Direct = () => {
  return (
    <div className="flex">
      <div className="w-80 px-2 py-4 border-r-2 h-173">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl">Nabijonov_5355</h1>
          <p className="text-xl">
            <FaEdit />
          </p>
        </div>

        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl">Messages</h1>
          <p className="text-neutral-400 my-5">Requests </p>
        </div>
      </div>
      <div>
        <FaFacebookMessenger />
      </div>
    </div>
  );
};

export default Direct;
