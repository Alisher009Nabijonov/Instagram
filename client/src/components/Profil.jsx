"use client"

import { useState } from "react"
import { CgProfile } from "react-icons/cg"
import { IoIosSettings } from "react-icons/io"
import { MdOutlineGridOn } from "react-icons/md"
import { IoBookmarkSharp } from "react-icons/io5"
import { RiShieldUserFill } from "react-icons/ri"
import { MdOutlinePhotoCamera } from "react-icons/md"

const Profil = () => {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [note, setNote] = useState("")
  const [savedNote, setSavedNote] = useState("")

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const handleNoteChange = (e) => {
    setNote(e.target.value)
  }

  const saveNote = () => {
    setSavedNote(note)
    setNote("")
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white">
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
                <button className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-700">
                  Edit profile
                </button>
                <button className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-700">
                  View Archive
                </button>
                <button className="ml-2 rounded-full p-1 hover:bg-zinc-800">
                  <IoIosSettings className="h-6 w-6" />
                </button>
              </div>
              <div className="flex gap-10">
                <p className="text-sm">
                  <span className="font-semibold">0</span> publications
                </p>
                <p className="text-sm">
                  <span className="font-semibold">0</span> subscribers
                </p>
                <p className="text-sm">
                  <span className="font-semibold">0</span> subscriptions
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-col  gap-2">
              <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 border-zinc-700 text-2xl">
                +
              </div>
              <h3 className="text-sm ml-7">Add</h3>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-800">
            <div className="flex justify-center gap-16">
              <h3
                className={`flex cursor-pointer items-center gap-2 border-t-2 py-4 text-xs font-semibold uppercase tracking-wider ${
                  selectedCategory === 1 ? "border-white" : "border-transparent"
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
                <div className="flex flex-col items-center gap-4 rounded-lg border border-zinc-800 p-6 text-center">
                  <p className="rounded-full bg-zinc-800 p-4">
                    <MdOutlinePhotoCamera className="h-8 w-8" />
                  </p>
                  <h2 className="text-lg font-semibold">Share photo</h2>
                  <p className="text-sm text-zinc-400">Photos you share will appear on your profile</p>
                  <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600">
                    Share your first photo
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg border border-zinc-800 p-6 text-center">
                  <p className="rounded-full bg-zinc-800 p-4">
                    <MdOutlinePhotoCamera className="h-8 w-8" />
                  </p>
                  <h2 className="text-lg font-semibold">Add phone number</h2>
                  <p className="text-sm text-zinc-400">Add your phone number so you can and more.</p>
                  <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600">
                    Add phone number
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg border border-zinc-800 p-6 text-center">
                  <p className="rounded-full bg-zinc-800 p-4">
                    <MdOutlinePhotoCamera className="h-8 w-8" />
                  </p>
                  <h2 className="text-lg font-semibold">Fill out your profile</h2>
                  <p className="text-sm text-zinc-400">Enter your name and add a bio so your friends can find</p>
                  <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600">
                    Edit profile
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg border border-zinc-800 p-6 text-center">
                  <p className="rounded-full bg-zinc-800 p-4">
                    <MdOutlinePhotoCamera className="h-8 w-8" />
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
      </div>
    </>
  )
}

export default Profil

