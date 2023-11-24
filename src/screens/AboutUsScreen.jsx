/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

import ParallelTexts from "../components/parallelTexts";

const AboutUsScreen = () => {
  return (
    <>
      {/* <div
        className={`text-poppins flex justify-between items-center h-fit-content bg-[#97c0ab]`}
      >
        <Navbar isHomeScreen={false} />
      </div> */}

      <div>
        <div className="bg-[#F1F8F4] h-[320px] w-full flex justify-center items-center relative">
          <div className="hidden md:block bg-[#00743A] w-[228px] h-[206px] absolute top-0 left-0">
            <div className="bg-[#579978] w-[194px] h-[165px]">
              <div className="bg-[#fff] w-[170px] h-[136px]"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1
              className="font-[oswald] text-[48px] text-[#000]"
              style={{ fontWeight: "500" }}
            >
              About us
            </h1>
            <p
              className="font-[raleway] text-[20px] text-[#00743A]"
              style={{ fontWeight: "400" }}
            >
              Tanya Knudsen
            </p>
          </div>

          <div className="hidden md:block bg-[#00743A] h-[228px] w-[206px] absolute bottom-0 right-0 rotate-180">
            <div className="bg-[#579978] h-[194px] w-[165px]">
              <div className="bg-[#fff] h-[170px] w-[136px]"></div>
            </div>
          </div>
        </div>

        <ParallelTexts />
        <ParallelTexts />
        <ParallelTexts />

        <Footer />
      </div>
    </>
  );
};

export default AboutUsScreen;
