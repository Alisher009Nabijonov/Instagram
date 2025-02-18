import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./App.css";
import Login from "./Pages/Login";
import NabarLayout from "./Layout/Navbar";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

// assets 

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<NabarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
    )
  );

  return (
    <>
      {/* <Login /> */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
