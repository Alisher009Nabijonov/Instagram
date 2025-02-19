"use client";

import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineGridOn } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiShieldUserFill } from "react-icons/ri";
import { MdOutlinePhotoCamera } from "react-icons/md";

// heroui
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";



import UserImg from "../assets/user.jpg";
const Profil = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedCategory, setSelectedCategory] = useState(1);
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    setSavedNote(note);
    setNote("");
  };

  // modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (



    <>

      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


      {/* <div className="min-h-screen bg-black text-white">
        <div className="mx-auto  px-8 py-8">
          <div className="flex items-center gap-20">
            <div className="flex-shrink-0">
              <div className="relative h-40 w-40 rounded-full bg-zinc-800">
                <CgProfile className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 text-zinc-600" />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xl">Alisher_2009</h2>
                <button className="rounded-lg bg-zinc-800 px-5 py-1.5 text-sm font-medium hover:bg-zinc-700">
                  Edit profile
                </button>
                <button className="rounded-lg bg-zinc-800 px-5 py-1.5 text-sm font-medium hover:bg-zinc-700">
                  View Archive
                </button>
                <button className="ml-2 rounded-full p-1 hover:bg-zinc-800">
                  <IoIosSettings className="h-6 w-6" />
                </button>
              </div>
              <div className="flex gap-10">
                <p className="text-sm text-zinc-300">
                  <span className="font-semibold">0</span> publications
                </p>
                <p className="text-sm text-zinc-300">
                  <span className="font-semibold">0</span> subscribers
                </p>
                <p className="text-sm text-zinc-300">
                  <span className="font-semibold">2</span> subscriptions
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-col gap-2">
              <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 border-zinc-700 text-2xl hover:border-zinc-600">
                +
              </div>
              <h3 className="text-sm text-center">Add</h3>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-800">
            <div className="flex justify-center gap-16">
              <h3
                className={`flex cursor-pointer items-center gap-2 border-t py-4 text-[12px] font-semibold uppercase tracking-wider ${
                  selectedCategory === 1 ? "border-white" : "border-transparent text-zinc-500"
                }`}
                onClick={() => handleCategoryClick(1)}
              >
                <MdOutlineGridOn className="h-3 w-3" />
                Publications
              </h3>
              <h3
                className={`flex cursor-pointer items-center gap-2 border-t-2 py-4 text-xs font-semibold uppercase tracking-wider ${
                  selectedCategory === 2 ? "border-white" : "border-transparent"
                }`}
                onClick={() => handleCategoryClick(2)}
              >
                <IoBookmarkSharp className="h-3 w-3" />
                Saved
              </h3>
              <h3
                className={`flex cursor-pointer items-center gap-2 border-t-2 py-4 text-xs font-semibold uppercase tracking-wider ${
                  selectedCategory === 3 ? "border-white" : "border-transparent"
                }`}
                onClick={() => handleCategoryClick(3)}
              >
                <RiShieldUserFill className="h-3 w-3" />
                Marks
              </h3>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-8 text-center">
              <h3 className="text-xl">First steps</h3>
            </div>
            {selectedCategory === 1 && (
              <div className="grid grid-cols-4 gap-4 w-250">
                <div className="flex flex-col items-center gap-4 rounded-lg border border-zinc-800 p-8 text-center">
                  <p className="rounded-full bg-zinc-900 p-4">
                    <MdOutlinePhotoCamera className="h-8 w-8 text-zinc-400" />
                  </p>
                  <h2 className="text-lg font-semibold">Share photo</h2>
                  <p className="text-sm text-zinc-400">Photos you share will appear on your profile</p>
                  <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600">
                    Share your first photo
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg border border-zinc-800 p-8 text-center">
                  <p className="rounded-full bg-zinc-900 p-4">
                    <MdOutlinePhotoCamera className="h-8 w-8 text-zinc-400" />
                  </p>
                  <h2 className="text-lg font-semibold">Add phone number</h2>
                  <p className="text-sm text-zinc-400">Add your phone number so you can and more.</p>
                  <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600">
                    Add phone number
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg border border-zinc-800 p-8 text-center">
                  <p className="rounded-full bg-zinc-900 p-4">
                    <MdOutlinePhotoCamera className="h-8 w-8 text-zinc-400" />
                  </p>
                  <h2 className="text-lg font-semibold">Fill out your profile</h2>
                  <p className="text-sm text-zinc-400">Enter your name and add a bio so your friends can find</p>
                  <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600">
                    Edit profile
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg border border-zinc-800 p-8 text-center">
                  <p className="rounded-full bg-zinc-900 p-4">
                    <MdOutlinePhotoCamera className="h-8 w-8 text-zinc-400" />
                  </p>
                  <h2 className="text-lg font-semibold">Add a profile photo</h2>
                  <p className="text-sm text-zinc-400">Add a profile photo so your friends can recognize you.</p>
                  <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600">
                    Add profile photo
                  </button>
                </div>
              </div>
            )}
            {selectedCategory === 2 && (
              <div className="flex flex-col items-center gap-8 py-12">
                <div className="flex w-full justify-between px-4 text-sm">
                  <p className="text-zinc-400">The list of saved items is visible only to you.</p>
                  <p className="cursor-pointer text-blue-500 hover:text-blue-400">+ New selection</p>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                  <p className="rounded-full bg-zinc-800 p-4">
                    <IoBookmarkSharp className="h-12 w-12" />
                  </p>
                  <h1 className="text-2xl font-semibold">Save</h1>
                  <p className="max-w-md text-zinc-400">
                    Save photos and videos you want to watch again. No one will be notified, and only you can see the
                    saved items.
                  </p>
                </div>
              </div>
            )}
            {selectedCategory === 3 && (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <p className="rounded-full bg-zinc-800 p-4">
                  <RiShieldUserFill className="h-12 w-12" />
                </p>
                <h1 className="text-2xl font-semibold">Photo with you</h1>
                <p className="max-w-md text-zinc-400">This shows people who have tagged you in their photos.</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-20 border-t border-zinc-800 px-8 py-8 text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-4">
            {[
              "Meta",
              "Information",
              "Blog",
              "Vacancies",
              "Help",
              "API",
              "Confidentiality",
              "Terms and Conditions",
              "Places",
              "Instagram Lite",
              "Threads",
              "Uploading Contacts and Non-Users",
              "Meta Verified",
            ].map((link) => (
              <a key={link} href="#" className="text-xs text-zinc-500 hover:underline">
                {link}
              </a>
            ))}
          </div>
          <h3 className="text-xs text-zinc-500">© 2025 Instagram from Meta</h3>
        </div>
      </div> */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        <div className="flex items-center justify-between px-15 py-4 gap-5">
          <div>
            <img src={UserImg} alt="" className="w-30 rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-xl">Alisher_009_28</h1>
              <button className="bg-neutral-700 px-6 py-2 text-sm rounded-sm cursor-pointer hover:bg-neutral-800">
                Edit profil
              </button>
              <button className="bg-neutral-700 px-6 py-2 text-sm rounded-sm cursor-pointer hover:bg-neutral-800">
                View archive
              </button>
              <button className=" px-1 py-2 text-sm rounded-sm cursor-pointer">
                <IoIosSettings className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center gap-6">
              <h2 className="cursor-pointer mt-3">0 publications</h2>
              <h2 className="cursor-pointer mt-3">0 subscribers</h2>
              <h2 className="cursor-pointer mt-3">2 subscriptions</h2>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="cursor-pointer w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center text-4xl mt-10"
            onClick={openModal}
          >
            +
          </div>
          <h2 className="cursor-pointer ml-8 mt-2" onClick={openModal}>
            Add
          </h2>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-opacity-100  z-50"
            onClick={closeModal}
          >
            <div
              className="bg-neutral-700 p-6 rounded-lg shadow-lg max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center gap-10">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Creating a current
                </h2>
                <button
                  className=" text-white mb-4 rounded-md text-xl cursor-pointer"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <div className="w-full h-0.5 bg-neutral-800 mb-4"></div>
              <form className="w-full">
                <input
                  type="text"
                  placeholder="Title of the current"
                  className="w-full bg-neutral-900 py-1 px-3 rounded-sm my-3"
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
        <div className="w-full h-0.5 bg-neutral-800 mt-10"></div>
        <div className="flex items-center justify-center gap-3">
          <div className="flex justify-center gap-16">
            <h3
              className={`flex cursor-pointer items-center gap-2 border-t py-4 text-[12px] font-semibold uppercase tracking-wider ${selectedCategory === 1
                ? "border-white"
                : "border-transparent text-zinc-500"
                }`}
              onClick={() => handleCategoryClick(1)}
            >
              <MdOutlineGridOn className="h-3 w-3" />
              Publications
            </h3>
            <h3
              className={`flex cursor-pointer items-center gap-2 border-t-2 py-4 text-xs font-semibold uppercase tracking-wider ${selectedCategory === 2
                ? "border-white"
                : "border-transparent text-zinc-500"
                }`}
              onClick={() => handleCategoryClick(2)}
            >
              <IoBookmarkSharp className="h-3 w-3" />
              Saved
            </h3>
            <h3
              className={`flex cursor-pointer items-center gap-2 border-t-2 py-4 text-xs font-semibold uppercase tracking-wider ${selectedCategory === 3
                ? "border-white"
                : "border-transparent text-zinc-500"
                }`}
              onClick={() => handleCategoryClick(3)}
            >
              <RiShieldUserFill className="h-3 w-3" />
              Marks
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
