import React from 'react'
var data = {
    logo: "./images/avatar.jpg",
    name: "Ishan Singla",
    role: "Learning MERN, Flutter, GitHub, DevOps, AWS | Full Stack Developer",
    address: "Chandigarh, India",
    email: "is.ishan.singla@gmail.com",
    phone: "91-870-850-4000",
    bod: "April 29, 2003",
    socialLinks: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        className: "fa-brands fa-linkedin",
      },
      {
        name: "github",
        url: "",
        className: "fa-brands fa-github",
      },
      {
        name: "twitter",
        url: "",
        className: "fa-brands fa-twitter",
      },
      {
        name: "facebook",
        url: "",
        className: "fa-brands fa-facebook",
      },
    ],
  };

export default function MobileDetails() {
    return (
      <div className="lg:hidden">
        <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
          <img
            src={data.logo}
            className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
            alt="about"
          />
          <div className="pt-[100px] pb-8">
            <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
              {data.name}
            </h2>
            <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
              {data.role}
            </h3>
  
            <div className="flex justify-center space-x-3">
              {data.socialLinks.map((item) => {
                return (
                  <a
                    href={item ? item.url : ""}
                    key={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="socialbtn text-[#1773EA]">
                      <i className={item.className}></i>
                    </span>
                  </a>
                );
              })}
            </div>
  
            <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Phone
                  </p>
                  <p className="dark:text-white">+{data.phone}</p>
                </div>
              </div>
  
              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Email
                  </p>
                  <p className="dark:text-white">{data.email}</p>
                </div>
              </div>
  
              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Location
                  </p>
                  <p className="dark:text-white">{data.address}</p>
                </div>
              </div>
  
              <div className="flex py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                  <i className="fa-solid fa-calendar-days"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Birthday
                  </p>
                  <p className="dark:text-white">{data.bod}</p>
                </div>
              </div>
            </div>
  
            <button className="dowanload-btn">
              <img
                className="mr-3"
                src="https://bostamihtml.ibthemespro.com/images/icons/dowanload.png"
                alt="icon"
              />
              Download CV
            </button>
          </div>
        </div>
      </div>
    );
  }
