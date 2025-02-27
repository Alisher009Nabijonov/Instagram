import React, { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { UserContext } from "../userContext";
import { FaFacebookMessenger } from "react-icons/fa6";
import UserImg1 from "../assets/1.png";
import { NavLink, useNavigate } from "react-router-dom";

const Direct = () => {
  const navigate = useNavigate();
  let { user } = useContext(UserContext);
  const { people } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleProfile = (item) => {
    navigate(`/message/${item._id}`);
  };
  return (
    <div className="flex">
      <div className="w-80 px-2 py-4 border-r-2 h-screen">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl">{user ? user.username : "user name"}</h1>
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
          <p className="text-neutral-400 my-5">Requests</p>
        </div>
        {people.slice(0, 3).map((item) => (
          <div
            key={item._id}
            className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <div
              // onClick={() => handleProfile(item)}
              className="flex items-center gap-4"
            >
              <img
                src={UserImg1 || "/placeholder.svg"}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{item.username}</h3>
                <p className="text-neutral-400 text-sm">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
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
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-neutral-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">New message</h2>
              <button
                className="text-white text-xl cursor-pointer"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <div className="w-full h-0.5 bg-neutral-700 my-3"></div>
            <form className="w-full mb-3 flex items-center justify-between">
              <label htmlFor="search" className="block text-sm">
                To whom:
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-85 bg-neutral-900 border border-neutral-700 rounded-md py-1 px-3 mt-1 text-white"
              />
            </form>
            <div className="w-full h-0.5 bg-neutral-700"></div>
            <div className="h-50">
              {searchQuery && (
                <div className="max-h-50 overflow-y-auto mt-3">
                  {filteredPeople.length > 0 ? (
                    filteredPeople.map((person) => (
                      <div
                        key={person._id}
                        className="flex items-center gap-4 p-3 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
                        onClick={() => setSelectedPerson(person)}
                      >
                        <img
                          src={UserImg1}
                          alt={person.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{person.username}</h3>
                          <p className="text-sm text-gray-400">{person.name}</p>
                        </div>
                        <input
                          type="radio"
                          name="selectedPerson"
                          checked={selectedPerson?._id === person._id}
                          readOnly
                        />
                      </div>
                    ))
                  ) : (
                    <p className="p-3 text-gray-400">No results found.</p>
                  )}
                </div>
              )}
            </div>
            <div className="w-full mt-4">
              <button
                disabled={!selectedPerson}
                className={`w-full py-2 rounded-md ${selectedPerson
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-blue-500 opacity-50 cursor-not-allowed"
                  }`}
              >
                Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Direct;
