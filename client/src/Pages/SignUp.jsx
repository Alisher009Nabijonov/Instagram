import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

// axios 
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("/api/auth/register", { email, username, name, password });
      alert(response.data.message)
    } catch (error) {
      console.log("error while signing up", error);
      alert(error)
    }
  }


  return (
    <>
      <div className="register">
        <div className="register_main">
          <div className="register_one_card">
            <h1 className="login_logo_h1">Instagram</h1>
            <h3 className="register_h3">
              Register to view your friends' photos and videos.
            </h3>
            <button className="register_google">
              <FcGoogle />
              Login With Google
            </button>
            <div className="login_or">
              <div className="login_line"></div>
              <h2>OR</h2>
              <div className="login_line"></div>
            </div>
            <form onSubmit={handleSubmit} className="register_form">
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Mobile phone or email address" />
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
              <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="First and last name" />
              <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" />
              <p className="register_p">
                People who use our service may have uploaded your contact
                information to Instagram. Learn more
              </p>
              <p className="register_p1">
                By signing up, you agree to our Terms , Privacy Policy and
                Cookie Policy .
              </p>
              <button className="register_btn">Registration</button>
            </form>
          </div>
          <div className="register_two_card">
            <h3 className="register_two_h3">
              Do you have an account?<NavLink to="/login">Entrance</NavLink>
            </h3>
          </div>
          <div className="login_right_bottom1">
            <h2 className="login_right_bottom_h21">Install the application.</h2>
            <div className="login_aplication">
              <button>
                <FaGooglePlay />
                Google Play
              </button>
              <button>
                <FaMicrosoft />
                Microsoft
              </button>
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
      </div>
    </>
  );
};

export default SignUp;
