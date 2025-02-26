import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./App.css";
import Login from "./Pages/Login";
import NavbarLayout from "./Layout/Navbar";
import SignUp from "./Pages/SignUp";
import Home from "./components/Home";
import MainLayout from "./Layout/MianLayout"; // Fixed typo
import Profil from "./components/Profil";
import axios from "axios";
import People from "./components/People";
import Rels from "./components/Rels";
import Interesting from "./components/Interesting";
import Notification from "./components/Notification";

// axios defaults
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

// context
import { UserProvider } from "./userContext";

// toast
import { Toaster } from "react-hot-toast";
import Direct from "./components/Direct";
import User from "./components/User";
import Edit from "./components/Edit";
import Archive from "./components/Archive";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/people" element={<People />} />
          <Route path="/reels" element={<Rels />} />
          <Route path="/interesting" element={<Interesting />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/direct" element={<Direct />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/archive" element={<Archive />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
    )
  );

  return (
    <UserProvider>
      <RouterProvider router={routes} />
      <Toaster />
    </UserProvider>
  );
}

export default App;
