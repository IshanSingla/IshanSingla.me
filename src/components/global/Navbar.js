import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const menuOpen = document.getElementById("menu-toggle-open-icon");
    const menuClose = document.getElementById("menu-toggle-close-icon");
    const menuToggleBtn = document.getElementById("menu-toggle-btn");
    const menuItems = document.querySelectorAll(".mobile-menu-items");
    const menuItemsActive = document.querySelectorAll(
      ".mobile-menu-items-active"
    );
    const menuItemsArray = Array.from(menuItems);
    const menuItemsActiveArray = Array.from(menuItemsActive);

    menuToggleBtn?.addEventListener("click", () => {
      // console.log("click");
      // toggle icons inside button
      navbar.classList.toggle("hidden");
      menuOpen.classList.toggle("hidden");
      menuClose.classList.toggle("hidden");
    });

    menuItemsArray.forEach((item) => {
      item.addEventListener("click", () => {
        // console.log("click");
        // toggle icons inside button
        navbar.classList.add("hidden");
        menuOpen.classList.remove("hidden");
        menuClose.classList.add("hidden");
      });
    });

    menuItemsActiveArray.forEach((item) => {
      item.addEventListener("click", () => {
        // console.log("click");
        // toggle icons inside button
        navbar.classList.add("hidden");
        menuOpen.classList.remove("hidden");
        menuClose.classList.add("hidden");
      });
    });
  }, []);
  return (
    <nav id="navbar" className="hidden lg:hidden">
      <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
        <li>
          <Link className="mobile-menu-items-active" to="/">
            <span className="mr-2 text-xl">
              <i className="fa-regular fa-user"></i>
            </span>
            About
          </Link>
        </li>
        <li>
          <Link className="mobile-menu-items" to="/Resume">
            <span className="mr-2 text-xl">
              <i className="fa-regular fa-file-lines"></i>
            </span>
            Resume
          </Link>
        </li>
        <li>
          <Link className="mobile-menu-items" to="/Works">
            <span className="mr-2 text-xl">
              <i className="fas fa-briefcase"></i>
            </span>
            Works
          </Link>
        </li>

        <li>
          <Link className="mobile-menu-items" to="/ContactUs">
            <span className="mr-2 text-xl">
              <i className="fa-solid fa-address-book"></i>
            </span>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export function Navbar() {
  return (
    <header className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className="hidden lg:block">
        <ul className="flex">
          <li>
            <Link className="menu-active" to="/">
              <span className="text-xl mb-1">
                <i className="fa-regular fa-user"></i>
              </span>
              About
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/Resume">
              <span className="text-xl mb-1">
                <i className="fa-regular fa-file-lines"></i>
              </span>
              Resume
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/Works">
              <span className="text-xl mb-1">
                <i className="fas fa-briefcase"></i>
              </span>
              Works
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/ContactUs">
              <span className="text-xl mb-1">
                <i className="fa-solid fa-address-book"></i>
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
