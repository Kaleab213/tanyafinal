/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import style from "../css/superpower.module.css";
import { motion } from "framer-motion";
import leftQuote from "../assets/leftquote.svg";
import rightQuote from "../assets/rightquote.svg";
import ParallelTexts from "./parallelTexts";

const SuperPower = () => {
  return (
    <div style={{ marginBottom: "7rem", marginTop: "7rem" }}>
      <motion.h1
        className={style.missionh1}
        initial={{
          x: 200,
        }}
        whileInView={{
          x: 0,
          transition: {
            duration: 1.5,
            bounce: 1,
            type: "easy",
            delay: 0.1,
          },
        }}
      >
        <div className="flex justify-center">
          <img
            src={leftQuote}
            className="hidden md:block md:h-[0.3em]"
            alt="Left Quote"
          />
          <span className="mx-[0.8rem] flex no-wrap font-[oswald] text-[40px] xs:text-[50px] sm:text-[64px] font-[500] text-[#000]">
            Creativity is our super power
          </span>
          <img
            src={rightQuote}
            className="hidden md:block md:h-[0.3em]"
            alt="Right Quote"
          />
        </div>
      </motion.h1>
      <ParallelTexts />
      {/* <div className={style.flexcontainer}>
        <div className={style.introdivmission}>
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
            className={style.intropmission}
          >
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
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
            className={style.intropmission}
          >
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </motion.p>
        </div>
        <div className={style.introdivmission}>
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
            className={style.intropmission}
          >
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
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
            className={style.intropmission}
          >
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </motion.p>
        </div>
      </div> */}
    </div>
  );
};

export default SuperPower;
