import React from "react";
import style from "../css/superpower.module.css";
import { motion } from "framer-motion";

const parallelTexts = () => {
  return (
    <>
      <div className={style.flexcontainer}>
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
            className="font-[raleway] text-[16px] ss:text-[19px] sm:text-[20px] mb-[2rem] text-[#000]"
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
            className="font-[raleway] text-[16px] ss:text-[19px] sm:text-[20px] mb-[2rem] text-[#000]"
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
            className="font-[raleway] text-[16px] ss:text-[19px] sm:text-[20px] mb-[2rem] text-[#000]"
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
            className="font-[raleway] text-[16px] ss:text-[19px] sm:text-[20px] mb-[2rem] text-[#000]"
          >
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default parallelTexts;
