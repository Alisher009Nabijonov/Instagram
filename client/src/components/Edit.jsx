// "use client"
import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import axios from "axios";

export default function Edit() {
  const { user } = useContext(UserContext);

  const [bio, setBio] = useState(user?.bio || "");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [gender, setGender] = useState(user?.gender || "prefer-not");
  const [name, setName] = useState(user?.name || "");
  const [username, setUsername] = useState(user?.username || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isFormChanged =
    bio || gender !== "prefer-not" || name || username || avatar;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/user/editUser", {
        avatar,
        bio,
        gender,
        name,
        username,
      });
      alert(response.data.message);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

      <div className="space-y-6">
        {/* Profile Photo Section */}
        <div className="bg-zinc-900 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-400">👤</span>
            </div>
            <div>
              <div className="font-medium">{user?.username || "Username"}</div>
              <div className="text-sm text-zinc-400">{user?.name || "Full name"}</div>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => document.getElementById("avatarInput").click()}
          >
            Change photo
          </button>
          <input
            id="avatarInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>

        {/* Username Input */}
        <div className="space-y-2">
          <label htmlFor="username" className="block">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="bg-zinc-900 border-none p-2 w-full rounded-lg"
          />
        </div>

        {/* Name Input */}
        <div className="space-y-2">
          <label htmlFor="name" className="block">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="bg-zinc-900 border-none p-2 w-full rounded-lg"
          />
        </div>

        {/* Website Section */}
        <div className="space-y-2">
          <label htmlFor="website" className="block">Website</label>
          <input
            disabled
            id="website"
            placeholder="Website"
            className="bg-zinc-900 border-none p-2 w-full rounded-lg"
          />
          <p className="text-xs text-zinc-400">
            Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.
          </p>
        </div>

        {/* Bio Section */}
        <div className="space-y-2">
          <label htmlFor="bio" className="block">Bio</label>
          <textarea
            id="bio"
            placeholder="Bio"
            className="bg-zinc-900 border-none p-2 w-full rounded-lg resize-none"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={150}
          />
          <div className="text-xs text-zinc-400 text-right">{bio.length} / 150</div>
        </div>

        {/* Gender Section */}
        <div className="space-y-2">
          <label>Gender</label>
          <select
            className="bg-zinc-900 border-none p-2 w-full rounded-lg"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="prefer-not">Prefer not to say</option>
            <option value="custom">Custom</option>
          </select>
          <p className="text-xs text-zinc-400">
            This won&apos;t be part of your public profile.
          </p>
        </div>

        {/* Account Suggestions Section */}
        <div className="bg-zinc-900 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium">Show account suggestions on profiles</h3>
              <p className="text-sm text-zinc-400">
                Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.
              </p>
            </div>
            <input
              type="checkbox"
              checked={showSuggestions}
              onChange={() => setShowSuggestions(!showSuggestions)}
              className="w-5 h-5"
            />
          </div>
        </div>

        <p className="text-sm text-zinc-400">
          Certain profile info, like your name, bio and links, is visible to everyone.{" "}
          <a href="#" className="text-blue-500">See what profile info is visible</a>
        </p>

        {error && <p className="text-red-500">{error}</p>}

        <button
          className={`w-full px-4 py-2 rounded-lg ${isFormChanged ? "bg-blue-500 hover:bg-blue-600" : "bg-zinc-700"
            }`}
          onClick={handleSubmit}
          disabled={!isFormChanged || loading}
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
