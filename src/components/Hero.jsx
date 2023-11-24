/* eslint-disable react/prop-types */
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import heroStyles from "../css/Hero.module.css";
import "../css/stylecss.module.css";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={heroStyles.parallax}>
      <motion.div className={heroStyles.scroller} style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const Hero = () => {
  return (
    <section>
      <div color="white">
        <div className="flex flex-col ">
          {" "}
          <h1 className="font-[oswald] text-[25px] xs:text-[35px] ss:text-[40px] sm:text-[48px] font-semibold">
            Creative Process Consultant
          </h1>
          <h1 className="font-[oswald] text-[25px] xs:text-[35px] ss:text-[40px] sm:text-[48px] font-semibold">
            Foresight Facilitator
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
export { ParallaxText };
