import React from "react";
var data = [
  {
    year: "2021-2025 (current)",
    degree: "BE in Computer Science",
    university: "Chitkara University, Punjab, India",
  },
  {
    year: "2020-2021",
    degree: "12th in Science (PCM) with 82%",
    university: "CBSE, India",
  },
  {
    year: "2018-2019",
    degree: "10th with 81%",
    university: "CBSE, India",
  },
];

export default function Education() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
        <h4 className="text-5xl dark:text-white font-medium">Education</h4>
      </div>
      {data.map((item) => (
        <div key={item.degree} className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
          <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {item.year}
          </span>
          <h3 className="text-xl dark:text-white"> {item.degree}</h3>
          <p className="dark:text-[#b7b7b7]">{item.university}</p>
        </div>
      ))}
    </div>
  );
}
