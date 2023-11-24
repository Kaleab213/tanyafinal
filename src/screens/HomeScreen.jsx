/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Cards from "../components/Cards";
import Century from "../components/Century";
import SuperPower from "../components/SuperPower";
import Footer from "../components/footer";
import IntroTwo from "../components/IntroTwo";
import ScrollToTopArrow from "../components/scrollToTop";

const HomeScreen = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <ScrollToTopArrow />
      <Header />
      <Intro />
      <SuperPower />
      <Century />
      <IntroTwo />
      <Cards />
      <Footer />
    </div>
  );
};

export default HomeScreen;
