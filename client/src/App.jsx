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

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
