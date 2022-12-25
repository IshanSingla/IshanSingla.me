import React, { useEffect } from "react";
import AboutDes from "../components/Home/AboutDes";
import Footer from "../components/global/Footer";
import WhatIdo from "../components/Home/WhatIdo";
import MobileDetails from "../components/Home/MobileDetails";

export default function Home() {
  useEffect(() => {
    document.title = "Home | IshanSingla's Portfolio";
  }, []);
  return (
    <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        <MobileDetails />
        <AboutDes />
      </div>
      <WhatIdo />
      <Footer />
    </div>
  );
}
