import React, { useState } from "react";
import LoginImg from "../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaGooglePlay } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// axios
import axios from "axios";

import toast from "react-hot-toast"
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmitlogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      toast.success(response.data.message);
      navigate("/profil");
      window.location.reload()
    } catch (error) {
      console.log("login error", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="login">
        <div className="login_main">
          <div className="login_left">
            <img src={LoginImg} alt="Login Img" className="login_left_img" />
          </div>
          <div className="login_right">
            <div className="login_right_one_card">
              <div>
                <h1 className="login_logo_h1">Instagram</h1>
              </div>
              <form onSubmit={handelSubmitlogin} className="login_form">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Phone, username or email"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
                <button>Login</button>
              </form>
              <div className="login_or">
                <div className="login_line"></div>
                <h2>OR</h2>
                <div className="login_line"></div>
              </div>
              <div>
                <h2 className="login_google_text">
                  <FcGoogle />
                  Login with Google
                </h2>
                <h2 className="forget_password">Forgot your password?</h2>
              </div>
            </div>
            <div className="login_right_bottom_card">
              <h2 className="login_right_bottom_card_text">
                Don't have an account?{" "}
                <NavLink to="/register">
                  <span className="login_span_register">Register</span>
                </NavLink>
              </h2>
            </div>
            <div className="login_right_bottom">
              <h2 className="login_right_bottom_h2">
                Install the application.
              </h2>
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
      <Outlet />
    </>
  );
};

export default Login;
