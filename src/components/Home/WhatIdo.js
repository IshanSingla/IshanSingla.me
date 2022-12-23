import React from "react";

var data = {
  whatIdo: [
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      url: "https://bostamihtml.ibthemespro.com/images/icons/icon5.svg",
    },
    {
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      url: "https://bostamihtml.ibthemespro.com/images/icons/icon1.svg",
    },
    {
      title: "DevOps",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      url: "https://bostamihtml.ibthemespro.com/images/icons/icon4.svg",
    },
    {
      title: "Cloud Computing",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      url: "https://www.svgrepo.com/show/194765/cloud-computing.svg",
    },
    {
      title: "Cyber Security",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      url: "https://www.svgrepo.com/show/381141/anonymous-cyber-crime-criminal-hack-hacker.svg",
    },
    {
      title: "UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      url: "https://bostamihtml.ibthemespro.com/images/icons/icon.svg",
    },
  ],
  education: [
    {
      UniversityName: "XYZ University",
      specialization: "Some specialization",
      MonthOfPassing: "Jan",
      YearOfPassing: "2018",
      Achievements: "Some Achievements",
    },
    {
      UniversityName: "ABC University",
      specialization: "Some specialization",
      MonthOfPassing: "Jan",
      YearOfPassing: "2018",
      Achievements: "Some Achievements",
    },
  ],
  work: [
    {
      CompanyName: "Some Company",
      specialization: "Some specialization",
      MonthOfLeaving: "Jan",
      YearOfLeaving: "2018",
      Achievements: "Some Achievements",
    },
    {
      CompanyName: "Some Company",
      specialization: "Some specialization",
      MonthOfLeaving: "Jan",
      YearOfLeaving: "2018",
      Achievements: "Some Achievements",
    },
  ],
  skills: [
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "Reactjs",
    },
  ],
  portfolio: [
    {
      name: "project1",
      description: "mobileapp",
      imgurl: "images/portfolio/phone.jpg",
    },
    {
      name: "project2",
      description: "mobileapp",
      imgurl: "images/portfolio/project.jpg",
    },
    {
      name: "project3",
      description: "mobileapp",
      imgurl: "images/portfolio/project2.png",
    },
    {
      name: "project4",
      description: "mobileapp",
      imgurl: "images/portfolio/phone.jpg",
    },
  ],
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
  ],
};

export default function WhatIdo() {
  return (
    <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5">
        What I do!
      </h3>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {data.whatIdo.map((item) => {
          return (
            <div className="about-box bg-[#fcf4ff] dark:bg-transparent">
              <img
                className="w-10 h-10 object-contain block"
                src={item.url}
                alt="icon"
              />

              <div className="space-y-2">
                <h3 className="dark:text-white text-[22px] font-semibold">
                  {item.title}
                </h3>
                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
