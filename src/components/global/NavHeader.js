import React from "react";
import { Link } from "react-router-dom";

export default function NavHeader() {
  return (
    <div className="section-bg">
      <div className="w-full flex justify-between px-4">
        <Link to="/">
          {/* <img
            className="h-[36px] lg:h-[32px]"
            src="https://media.licdn.com/dms/image/D4D16AQEQGEnh9LUIyA/profile-displaybackgroundimage-shrink_350_1400/0/1666631438783?e=1677110400&v=beta&t=7zuPqVYp9sKLFa-QX5sO6TdVsL-lSBF0ga7tHpbgtYE"
            alt="logo"
          /> */}
        </Link>
        <div className="flex items-center">
          <button id="theme-toggle" type="button" className="dark-light-btn">
            <i
              id="theme-toggle-dark-icon"
              className="fa-solid text-xl fa-moon hidden"
            ></i>
            <i
              id="theme-toggle-light-icon"
              className="fa-solid fa-sun text-xl hidden"
            ></i>
          </button>
          <button id="menu-toggle" type="button" className="menu-toggle-btn">
            <i
              id="menu-toggle-open-icon"
              className="fa-solid fa-bars text-xl"
            ></i>
            <i
              id="menu-toggle-close-icon"
              className="fa-solid fa-xmark text-xl hidden"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}
