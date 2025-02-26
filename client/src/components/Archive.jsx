import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbClockHour2 } from "react-icons/tb";
import { useNavigate, Link, Await } from "react-router-dom";

const Archive = () => {
  return (
    <div>
      <div className="min-h-screen bg-black text-white p-4 max-w-5xl mx-auto mt-15">
        <Link to="/profil">
          <h1 className="text-2xl flex items-center gap-2 active:text-neutral-500">
            <FaArrowLeftLong />
            Archive
          </h1>
        </Link>
        <div className="text-center my-5 mt-15">
          <h1 className="text-xl my-3">Stories</h1>
          <hr />
        </div>
        <div className="text-center mt-15 mb-10">
          <p className="mx-auto text-center flex items-center justify-center text-5xl my-8">
            <TbClockHour2 />
          </p>
          <h1 className="text-xl">Complete the story</h1>
          <h2 className="text-sm mt-2 w-112 mx-auto">
            Keep your stories archived after they disappear so you can remember
            what you shared. Only you can see your story archive.
          </h2>
        </div>
      </div>

        <div className="login_bottom_link_bottom1">
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
    </div>
  );
};

export default Archive;
