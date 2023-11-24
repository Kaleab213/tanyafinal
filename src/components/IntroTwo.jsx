/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import imagee from "../assets/Images/paintkid.svg";
import style from "../css/intro.module.css";
import { motion } from "framer-motion";

const IntroTwo = () => {
  const handleClick = () => {
    window.location.href = "/about";
  };
  return (
    <div className={style.intro}>
      <div className={`${style.introdiv} mx-[5rem]`}>
        <motion.h1
          initial={{
            x: -200,
          }}
          whileInView={{
            x: 0,
            transition: {
              duration: 1,
              bounce: 1,
              type: "easy",
              delay: 0.1,
            },
          }}
          className={style.introh1}
        >
          <span>Creative leadership</span>
        </motion.h1>
        <motion.p
          initial={{
            y: 0,
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              bounce: 1,
              type: "easy",
              delay: 0.1,
            },
          }}
          className={style.introp}
        >
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum
        </motion.p>
        <motion.p
          initial={{
            y: 0,
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              bounce: 1,
              type: "easy",
              delay: 0.1,
            },
          }}
          className={style.introp}
        >
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum
        </motion.p>
        <div className={style.introbtn}>
          <button
            style={{
              width: "140px",
              height: "48px",
              fontSize: "24px",
              fontWeight: "800",
              fontFamily: "Raleway",
              color: "#ffffff",
              borderRadius: "10px",
            }}
            className={style.gradientcolor}
            onClick={handleClick}
          >
            Read More
          </button>
        </div>
      </div>
      <motion.div
        initial={{
          x: 200,
        }}
        whileInView={{
          x: 0,
          transition: {
            duration: 1,
            bounce: 1,
            type: "easy",
            delay: 0.5,
          },
        }}
        className={style.introimg}
      >
        <img src={imagee} alt="" className="w-[524px] h-[508px]" />
      </motion.div>
    </div>
  );
};

export default IntroTwo;
