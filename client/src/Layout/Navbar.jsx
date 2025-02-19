import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NabarLayout = () => {
  return (
    <>
      <div>
        <nav></nav>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default NabarLayout;
