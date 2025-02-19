import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MianLaayout = () => {
  return (
    <>
      <div>
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MianLaayout;
