/* eslint-disable no-unused-vars */
import React from "react";
import vanillastyle from "../css/stylecss.module.css";
import video from "../assets/videos/background_video.mp4";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Header = () => {
  return (
    <div className={vanillastyle.ahero}>
      <video autoPlay loop muted playsInline className={vanillastyle.avid}>
        <source src={video} type="video/mp4"></source>
      </video>
      <div
        className={`${vanillastyle.anav} border-t-[3px] border-b-[3px] border-solid border-grey rounded-sm absolute top-4 sm:top-10 h-[3rem] sm:h-[4rem]`}
      >
        <Navbar isHomeScreen={true} />
      </div>
      {/* <div className={vanillastyle.headiv}>
        <h1 className="font-[oswald] text-[18px] ss:text-[35px] sm:text-[40px] md:text-[48px] font-semibold text-[#000]">
          Creative Process Consultant
        </h1>
      </div>
      <div className={vanillastyle.headiv}>
        <h1 className="font-[oswald] text-[18px] xs:text-[35px] ss:text-[40px] sm:text-[48px] font-semibold text-[#000]">
          Foresight Facilitator
        </h1>
      </div> */}
      <div className={vanillastyle.headiv}>
        <Hero />
      </div>
    </div>
  );
};

export default Header;
