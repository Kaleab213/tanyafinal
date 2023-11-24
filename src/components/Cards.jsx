/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import style from "../css/cards.module.css";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedin,
} from "react-icons/fa";

const Cards = () => {
  return (
    <div style={{ marginBottom: "7rem", marginTop: "7rem" }}>
      <div className={`${style.cardcontainer}`}>
        <motion.div
          initial={{
            y: 0,
            scale: 0,
            opacity: 0,
          }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 1,
              type: "ease",
            },
          }}
          whileInView={{
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              bounce: 1,
              type: "easy",
              delay: 0.3,
            },
          }}
          // className={`${style.missioncard} flex flex-col items-start justify-start ml-2 mr-4 mt-8 rounded-3xl shadow-md p-10`}
          className={`flex flex-col justify-start mx-2 mt-8 p-4 px-6 rounded-3xl shadow-md ${style.missioncard} p-10`}
        >
          <h2 className={`${style.missioncardh1} text-[32px]`}>
            How to work with me
          </h2>
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
                delay: 0.5,
              },
            }}
            className="font-[raleway] text-[16px] ss:text-[19px] sm:text-[20px] mb-[2rem] text-[#fff]"
          >
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </motion.p>
          <h2 className={`${style.missioncardh1} text-[25px] sm:text-[30px]`}>
            Follow me on social media
          </h2>
          <div style={{ display: "flex", marginTop: "1rem" }}>
            <motion.div
              initial={{
                y: 0,
                scale: 1,
              }}
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className={style.anylink}
              >
                {" "}
                <FaLinkedin size={24} style={{ marginRight: "1rem" }} />
              </a>
            </motion.div>

            <motion.div
              initial={{
                y: 0,
                scale: 1,
              }}
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className={style.anylink}
              >
                <FaTwitter size={24} style={{ marginRight: "1rem" }} />
              </a>
            </motion.div>

            <motion.div
              initial={{
                y: 0,
                scale: 1,
              }}
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.2,
                },
              }}
            ></motion.div>
            <motion.div
              initial={{
                y: 0,
                scale: 1,
              }}
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className={style.anylink}
              >
                {" "}
                <FaFacebook size={24} />
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 0,
            scale: 0,
            opacity: 0,
          }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 1,
            },
          }}
          whileInView={{
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              bounce: 1,
              type: "easy",
              delay: 0.5,
            },
          }}
          className={`flex flex-col justify-start mx-2 mt-8 p-4 rounded-3xl shadow-md ${style.missioncard} p-10`}
        >
          <h2 className={`${style.missioncardh1} text-[25px] sm:text-[32px]`}>
            Contact Me
          </h2>
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
                delay: 0.7,
              },
            }}
            className="font-[raleway] text-[16px] ss:text-[19px] sm:text-[20px] mb-[2rem] text-[#fff]"
            style={{ marginBottom: "0px" }}
          >
            Email: loremisoum@gmail.com
          </motion.p>
          <p
            style={{ marginBottom: "3rem" }}
            className="font-[raleway] text-[16px] ss:text-[19px] sm:text-[20px] mb-[2rem] text-[#fff]"
          >
            loremipsum@info
          </p>
          <p className="font-[raleway] text-[16px] ss:text-[19px] sm:text-[20px] mb-[2rem] text-[#fff]">
            Phone number: +241234567890
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
