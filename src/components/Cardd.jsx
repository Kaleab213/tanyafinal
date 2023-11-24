/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../css/gallery.module.css";
import { motion } from "framer-motion";

const Cardd = (props) => {
  return (
    <motion.div
      initial={{
        y: 0,
        scale: 0, // Start with a smaller scale
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
          type: "easeInOut",
          delay: 0.1,
        },
      }}
      className={`${styles.cardd} max-w-md md:max-w-xl xl:max-w-3xl md:m-10 xxl:max-w-4xl xxl:m-10 rounded overflow-hidden shadow-lg m-5 mb-[4rem]`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <a
        href="https://www.youtube.com/watch?v=3Du3PLhOTBw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-full h-[350px]" src={props.img} alt="YouTube" />
      </a>
      <div className="px-5 py-4 bg-[#ebfff3] max-w-[90vw]">
        <div className={styles.heading}>Lorem ipsum dolor sit</div>
        <p className={styles.text} style={{ fontWeight: "400" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <p className={`mt-5 ${styles.text}`} style={{ fontWeight: "400" }}>
          {" "}
          dolor sit amet, consectetur adipisicing elit. Voluptatibus{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default Cardd;
