/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import imagee from "../assets/Images/paintkid.svg";
import style from "../css/century.module.css";
import { motion } from "framer-motion";
import brush from "../assets/Images/brush.svg";
import century_img from "../assets/Images/century_img.jpg";

const Century = () => {
  return (
    <div className={style.introend}>
      <div className={style.introdivend}>
        <h1 className="flex font-[oswald] text-[40px] xs:text-[50px] sm:text-[64px] font-[500] text-[#000]">
          Honing 21st century education
        </h1>
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
          className={style.intropend}
          style={{ color: "#00743A", marginTop: "2rem", marginBottom: "3rem" }}
        >
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum
        </motion.p>
        <div style={{ display: "flex", marginBottom: "2rem" }}>
          <div style={{ marginRight: "1rem" }}>
            <img src={brush}></img>
          </div>
          <div>
            <p
              className={style.introh}
              style={{
                fontWeight: "700",
                color: "#00743A",
                marginBottom: "0.5rem",
              }}
            >
              Digital marketing
            </p>
            <p className={style.intropend}>Lorem ipsum dolor sit amet, </p>
            <p className={style.intropend}>
              consectetur adipiscing elit, sed do ei
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "2rem" }}>
          <div style={{ marginRight: "1rem" }}>
            <img src={brush}></img>
          </div>
          <div>
            <p
              className={style.introh}
              style={{
                fontWeight: "700",
                color: "#00743A",
                marginBottom: "0.5rem",
              }}
            >
              Digital marketing
            </p>
            <p className={style.intropend}>Lorem ipsum dolor sit amet, </p>
            <p className={style.intropend}>
              consectetur adipiscing elit, sed do ei
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "2rem" }}>
          <div style={{ marginRight: "1rem" }}>
            <img src={brush}></img>
          </div>
          <div>
            <p
              className={style.introh}
              style={{
                fontWeight: "700",
                color: "#00743A",
                marginBottom: "0.5rem",
              }}
            >
              Digital marketing
            </p>
            <p className={style.intropend}>Lorem ipsum dolor sit amet, </p>
            <p className={style.intropend}>
              consectetur adipiscing elit, sed do ei
            </p>
          </div>
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
        className={style.introimgend}
      >
        <img
          src={century_img}
          alt=""
          style={{ width: "632px", height: "507px" }}
        />
      </motion.div>
    </div>
  );
};

export default Century;
