import { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { useNavigate } from "react-router";
import vanillastyle from "../css/stylecss.module.css";
import logo_tanya from "../assets/logo.jpg";

const Navbar = ({ isHomeScreen }) => {
  const [toggle, setToggle] = useState(false);

  const history = useNavigate();

  return (
    <>
      <nav className={`w-full flex py-6 justify-between items-center navbar`}>
        <div className="flex items-center justify-between sm:ml-[3rem] ml-[2rem] lg:ml-[5rem]">
          <img
            src={logo_tanya}
            className="w-[1.5rem] h-[1.5rem] mr-1 sm:w-[2rem] sm:h-[2rem] sm:mr-2"
            alt="Tanya Logo"
          />
          <h1
            onClick={() => history("/")}
            className="font-[oswald] text-[18px] sm:text-[25px] md:text-[30px]  text-white font-semibold cursor-pointer navbar hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            Tanya Knudsen
          </h1>
        </div>
        <ul className="list-none lg:flex hidden justify-end items-center flex-1 navbar">
          <li
            className={`${
              isHomeScreen
                ? "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#fff] hover:pb-[2px]"
                : "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] font-[900]  text-[#00743a] font-bold mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#00743a] hover:pb-[2px]"
            }`}
            onClick={() => history("/")}
          >
            <div className="dot"></div>
            <a>Home</a>
          </li>
          <li
            className={`${
              isHomeScreen
                ? "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#fff] hover:pb-[2px]"
                : "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] font-[900]  text-[#00743a] font-bold mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#00743a] hover:pb-[2px]"
            }`}
            onClick={() => history("/about")}
          >
            <div className="dot"></div>
            About
          </li>
          <li
            className={`${
              isHomeScreen
                ? "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#fff] hover:pb-[2px]"
                : "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] font-[900]  text-[#00743a] font-bold mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#00743a] hover:pb-[2px]"
            }`}
            onClick={() => history("/services")}
          >
            <div className="dot"></div>
            <a>Services</a>
          </li>
          <li
            className={`${
              isHomeScreen
                ? "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#fff] hover:pb-[2px]"
                : "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] font-[900]  text-[#00743a] font-bold mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#00743a] hover:pb-[2px]"
            }`}
            onClick={() => history("/projects")}
          >
            <div className="dot"></div>
            <a>Projects</a>
          </li>
          <li
            className={`${
              isHomeScreen
                ? "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#fff] hover:pb-[2px]"
                : "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] font-[900]  text-[#00743a] font-bold mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#00743a] hover:pb-[2px]"
            }`}
            onClick={() => history("/community")}
          >
            <div className="dot"></div>
            <a>Community</a>
          </li>

          <li
            className={`${
              isHomeScreen
                ? "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#fff] hover:pb-[2px]"
                : "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] font-[900]  text-[#00743a] font-bold mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#00743a] hover:pb-[2px]"
            }`}
            onClick={() => history("/blogs")}
          >
            <div className="dot"></div>
            Blogs
          </li>
          <li className="dot"></li>

          <li
            className={`${
              isHomeScreen
                ? "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#fff] hover:pb-[2px]"
                : "font-[raleway] font-normal cursor-pointer lgg:text-[25px] text-[15px] font-[900]  text-[#00743a] font-bold mr-10 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b-[2px] hover:border-[#00743a] hover:pb-[2px]"
            }`}
            onClick={() => history("/contact")}
          >
            <div className="dot"></div>
            Contact me
          </li>
          <li className="dot"></li>
        </ul>

        <div className="nav__menu lg:hidden flex flex-1 justify-end items-center mr-10">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[100vw] rounded-2xl sidebar ${
              vanillastyle.anav
            }`}
            style={{ backgroundColor: "#ebfff3" }}
          >
            <ul className="list-none flex justify-center items-center flex-1 flex-col">
              <li
                className={`nav__items font-[raleway] font-[900]  text-[#00743a] font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 mb-5`}
                onClick={() => history("/")}
              >
                Home
              </li>
              <li
                className={`nav__items font-[raleway] font-[900]  text-[#00743a] font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 mb-5`}
                onClick={() => history("/about")}
              >
                About
              </li>
              <li
                className={`nav__items font-[raleway] font-[900]  text-[#00743a] font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 mb-5`}
                onClick={() => history("/services")}
              >
                Services
              </li>
              <li
                className={`nav__items font-[raleway] font-[900]  text-[#00743a] font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 mb-5`}
                onClick={() => history("/projects")}
              >
                Projects
              </li>
              <li
                className={`nav__items font-[raleway] font-[900]  text-[#00743a] font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 mb-5`}
                onClick={() => history("/blogs")}
              >
                Blogs
              </li>
              <li
                className={`nav__items font-[raleway] font-[900]  text-[#00743a] font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 mb-5`}
                onClick={() => history("/community")}
              >
                Community
              </li>
              <li
                className={`nav__items font-[raleway] font-[900]  text-[#00743a] font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4 hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110 mb-5`}
                onClick={() => history("/contact")}
              >
                Contact us
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
