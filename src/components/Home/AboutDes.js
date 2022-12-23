import React from "react";

var data = {
  aboutme:
    "I am currently a second year student at Chitkara University. I love to explore new technologies and leverage them to solve real-life problems. I enjoy turning complex problems into simple, inovative and intuitive interface designs. I am passionate about building excellent software that improves the lives of those around me.",
  roleDescription:
    "I like dabbling in various parts of backend development and like to learn about new technologies, and I enjoy working on ambitious projects.",
};

export default function AboutDes() {
  return (
    <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
      <div className="col-span-12 space-y-2.5">
        <div className="lg:mr-16">
          <p className="text-[#44566c] dark:text-color-910 leading-7">
            {data.aboutme}
          </p>
          <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
            {data.roleDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
