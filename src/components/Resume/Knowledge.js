import React from "react";

var knowledge = [
  "Node.js",
  "Python",
  "Dart",
  "MongoDb",
  "Firebase",
  "Redis",
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "Jankins",
  "AWS",
  "Nginx",
];

export default function Knowledge() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
        <h4 className="text-5xl dark:text-white font-medium">Knowledge</h4>
      </div>
      <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
        {knowledge.map((item) => (
          <button key={item} className="resume-btn">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
