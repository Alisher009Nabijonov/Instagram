import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import axios from "axios";

// img
import userImg from "../assets/user.jpg"
import toast from "react-hot-toast";
import userImg from "../assets/1.png"

export default function Edit() {
  const { user } = useContext(UserContext);

  const [bio, setBio] = useState(user?.bio || "");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar || "");
  const [gender, setGender] = useState(user?.gender || "other");
  const [name, setName] = useState(user?.name || "");
  const [username, setUsername] = useState(user?.username || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const isFormChanged =
    bio !== user?.bio ||
    gender !== user?.gender ||
    name !== user?.name ||
    username !== user?.username ||
    avatar !== null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("userId", user._id);
    formData.append("bio", bio);
    formData.append("gender", gender);
    formData.append("name", name);
    formData.append("username", username);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      await axios.put("/api/user/editUser", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("edit successfliy");
    } catch (error) {
      setError(error.response?.data?.message || "error");
      toast.error("edit error")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

      <div className="space-y-6">
        <div className="bg-zinc-900 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={avatarPreview || userImg }
              alt="Profile"
              className="h-14 w-14 rounded-full object-cover"
            />
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
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="username" className="block">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="bg-zinc-900 border-none p-2 w-full rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="bg-zinc-900 border-none p-2 w-full rounded-lg"
          />
        </div>

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
        </div>

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
