import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavHeader() {
  if (!localStorage.getItem("color-theme")) {
    localStorage.setItem("color-theme", "dark");
  }

  var lightButton = (e) => {
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    // toggle icons inside button

    // themeToggleDarkIcon.classList.toggle("hidden");
    // themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously

    if (localStorage.getItem("color-theme") === "light") {
      themeToggleLightIcon.classList.toggle("hidden");
      themeToggleDarkIcon.classList.remove("hidden");
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      themeToggleLightIcon.classList.remove("hidden");
      themeToggleDarkIcon.classList.toggle("hidden");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  };

  var menuButton = (e) => {
    e.preventDefault();
    console.log("click");
    const navbar = document.getElementById("navbar");
    const menuOpen = document.getElementById("menu-toggle-open-icon");
    const menuClose = document.getElementById("menu-toggle-close-icon");

    // toggle icons inside button

    if (navbar.classList.contains("hidden")) {
      navbar.classList.remove("hidden");
      menuOpen.classList.add("hidden");
      menuClose.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
    }
  };
  useEffect(() => {
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    if (localStorage.getItem("color-theme") === "light") {
      themeToggleLightIcon.classList.remove("hidden");
      themeToggleDarkIcon.classList.add("hidden");
      document.documentElement.classList.remove("dark");
    } else {
      themeToggleLightIcon.classList.add("hidden");
      themeToggleDarkIcon.classList.remove("hidden");
      document.documentElement.classList.add("dark");
    }
  }, []);
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
          <button
            onClick={lightButton}
            id="theme-toggle"
            type="button"
            className="dark-light-btn"
          >
            <i
              id="theme-toggle-dark-icon"
              className="fa-solid text-xl fa-moon hidden"
            ></i>
            <i
              id="theme-toggle-light-icon"
              className="fa-solid fa-sun text-xl hidden"
            ></i>
          </button>
          <button
            onClick={menuButton}
            id="menu-toggle"
            type="button"
            className="menu-toggle-btn"
          >
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
