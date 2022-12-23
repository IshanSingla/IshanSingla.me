import React from "react";

var experience = [
  {
    time: "December 2022 - Current",
    role: "CTO & Co-Founder",
    place: "IndusianAssist Private Limited",
  },
  {
    time: "December 2022 - Current",
    role: "Backend Developer Intern",
    place: "80Wash",
  },
  {
    time: "September 2022 - Curren",
    role: "Chief of Back-End Head",
    place: "Apple Student Community",
  },
]

export default function Experience() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <i className="fa-solid text-6xl text-[#F95054] fa-briefcase"></i>
        <h4 className="text-5xl dark:text-white font-medium">Experience</h4>
      </div>
      {experience.map((item) => (
        <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
          <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {item.time}
          </span>
          <h3 className="text-xl dark:text-white"> {item.role}</h3>
          <p className="dark:text-[#b7b7b7]">{item.place}</p>
        </div>
      ))}
      
    </div>
  );
}
