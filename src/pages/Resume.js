import React, { useEffect } from "react";
import Footer from "../components/global/Footer";
import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Knowledge from "../components/Resume/Knowledge";
import Testimonials from "../components/Resume/Testimonials";

export default function Resume() {
  useEffect(() => {
    document.title = "Resume | IshanSingla's Portfolio";
  }, []);

  return (
    <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <div className="container sm:px-5 md:px-10 lg:px-14">
        <div className="py-12 px-4 md:px-0">
          <h2 className="after-effect after:left-44">Resume</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
            <Education />
            <Experience />
          </div>
        </div>
      </div>
      <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonials />
          <Knowledge />
        </div>
      </div>

      <Footer />
    </div>
  );
}
