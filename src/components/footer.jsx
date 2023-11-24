/* eslint-disable no-unused-vars */
import { footerLinks, socialMedia } from "../constants";
import mellaLogo from "../assets/mellaLogo.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const history = useNavigate();

  return (
    <>
      <footer className="bg-[#97C0AB] text-black px-[1rem] md:px-[4rem] lgg:px-[8rem]">
        {/* <div className="mx-auto py-12 grid grid-cols-1 ss:grid-cols-4  gap-8 pl-4 pr-4"> */}
        <div className="flex py-12 pl-4 justify-around flex-col md:flex-row">
          <div className="">
            <h1
              className="font-[oswald] text-[40px] cursor-pointer hover:opacity-1 transition-transform duration-300 ease-in-out hover:scale-110"
              style={{ fontWeight: "700" }}
            >
              Tanya Knudsen
            </h1>
            <p className="font-[raleway] text-[20px] xl:text-[25px] my-[2rem] max-w-[15rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  className="text-lg hover:text-green-500 hover:cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={social.icon} alt={social.id} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-10 md:mt-0">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <div className="flex w-[15rem]">
              <ul className="list-none mb-6 w-[50%]">
                <li
                  onClick={() => history("/")}
                  className="mb-2 text-lg hover:text-[#f1f8f4] hover:cursor-pointer"
                >
                  Home
                </li>
                <li
                  onClick={() => history("/about")}
                  className="mb-2 text-lg hover:text-[#f1f8f4]
                  hover:cursor-pointer"
                >
                  About
                </li>
                <li
                  onClick={() => history("/services")}
                  className="mb-2 text-lg hover:text-[#f1f8f4]
                  hover:cursor-pointer"
                >
                  Services
                </li>
                <li
                  onClick={() => history("/projects")}
                  className="mb-2 text-lg hover:text-[#f1f8f4]
                  hover:cursor-pointer"
                >
                  Projects
                </li>
              </ul>
              <ul className="list-none mb-6 w-[50%]">
                <li
                  onClick={() => history("/blogs")}
                  className="mb-2 text-lg hover:text-[#f1f8f4]
                  hover:cursor-pointer"
                >
                  Blogs
                </li>
                <li
                  onClick={() => history("/community")}
                  className="mb-2 text-lg hover:text-[#f1f8f4]
                  hover:cursor-pointer"
                >
                  Community
                </li>
                <li
                  onClick={() => history("/contact")}
                  className="mb-2 text-lg hover:text-[#f1f8f4]
                  hover:cursor-pointer"
                >
                  Contact us
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-bold mb-4">Support</h4>
            <ul className="list-none mb-6">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-lg hover:text-[#f1f8f4] hover:cursor-pointer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "24px",
          textAlign: "center",
          backgroundColor: "#fff",
          height: "80px",
          justifyContent: "center",
        }}
      >
        @2023 All rights reserved | iRISE Labs
      </div>
    </>
  );
};

export default Footer;
