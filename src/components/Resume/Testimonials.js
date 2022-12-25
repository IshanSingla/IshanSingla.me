import React from "react";

var testimonials = [
  {
    time: "Sep 2022",
    name: "1nd POSITION IN EXPLORE AI (HACKATHON) EXPLORE LAB's",
  },
  {
    time: "Sep 2022",
    name: "2nd POSITION IN COFFEE AND CODE (HACKATHON) LEGACY PCLUB UIET",
  },
];

export default function Testimonials() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
        <h4 className="text-5xl dark:text-white font-medium">Testimonials</h4>
      </div>
      {testimonials.map((item) => (
        <div
          key={item.name}
          className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
        >
          <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {item.time}
          </span>
          <h3 className="text-xl dark:text-white"> {item.name}</h3>
        </div>
      ))}
    </div>
  );
}
