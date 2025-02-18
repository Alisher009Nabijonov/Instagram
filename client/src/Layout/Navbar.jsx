import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NabarLayout = () => {
  return (
    <>
      <div>
        <nav>
          {/* <NavLink to="/register">
            <span className="login_span_register">Register</span>
          </NavLink> */}
        </nav>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default NabarLayout;
