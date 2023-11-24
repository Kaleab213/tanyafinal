/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import style from "../css/footer.module.css";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import styles from "../css/Contact.module.css";
import Footer from "../components/footer";
import emailjs from "@emailjs/browser";
import vanillastyle from "../css/stylecss.module.css";

const ContactScreen = () => {
  const form = useRef();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    // Regular expression pattern for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Reset the error messages
    setFNameError("");
    setLNameError("");
    setEmailError("");
    setSubjectError("");
    setMessageError("");

    // Validate the first name field
    if (fName.trim() === "") {
      setFNameError("*Please enter your First name.");
      return;
    }

    // Validate the last name field
    if (lName.trim() === "") {
      setLNameError("*Please enter your Last name.");
      return;
    }

    // Validate the email field
    if (email.trim() === "") {
      setEmailError("*Please enter your email address.");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("*Please enter a valid email address.");
      return;
    }

    // Validate the service field
    if (subject.trim() === "") {
      setSubjectError(
        "*Please enter the subject you need need to discuss with."
      );
      return;
    }

    // Validate the message field
    if (message.trim() === "") {
      setMessageError("*Please enter your message.");
      return;
    }

    emailjs
      .sendForm(
        "service_enfi15m",
        "template_a0typrw",
        form.current,
        "sdUH7SNu2KnjDZ7j6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Success! Your message is successfully sent.");
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          setFName("");
          setLName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* <div
        className={` text-poppins flex justify-between items-center h-fit-content bg-[#97c0ab]`}
      >
        <Navbar isHomeScreen={false} />
      </div> */}
      {/* header */}
      <div className="bg-[#F1F8F4] h-[320px] w-full flex justify-center items-center relative">
        <div className="hidden md:block bg-[#00743A] w-[228px] h-[206px] absolute top-0 left-0">
          <div className="bg-[#579978] w-[194px] h-[165px]">
            <div className="bg-[#fff] w-[170px] h-[136px]"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1
            className="font-[oswald] text-[48px] text-[#000]"
            style={{ fontWeight: "500" }}
          >
            Contact Us
          </h1>
          <p
            className="font-[raleway] text-[20px] text-[#00743A]"
            style={{ fontWeight: "400" }}
          >
            Tanya Knudsen
          </p>
        </div>

        <div className="hidden md:block bg-[#00743A] h-[228px] w-[206px] absolute bottom-0 right-0 rotate-180">
          <div className="bg-[#579978] h-[194px] w-[165px]">
            <div className="bg-[#fff] h-[170px] w-[136px]"></div>
          </div>
        </div>
      </div>
      {/* Header End */}
      <div className={styles.containerdiv}>
        {/* Left */}
        <div className={styles.leftpart}>
          <div className="sm:mb-[5rem]">
            <h1
              className="font-[oswald] text-[35px] sm:text-[48px] text-[#000]"
              style={{ fontWeight: "500", textAlign: "center" }}
            >
              Get in touch with me
            </h1>
            <p
              className="font-[raleway] text-[24px] text-[#00743A]"
              style={{ fontWeight: "400", textAlign: "center" }}
            >
              Email: loremispum@gmail.com
            </p>
            <p
              className="font-[raleway]  text-[24px] text-[#00743A]"
              style={{ textAlign: "center" }}
            >
              Phone number: +25123456798
            </p>
            <p
              className="font-[oswald] text-[32px] mt-[2rem] md:mt-[10rem] text-[#000]"
              style={{ fontWeight: "500", textAlign: "center" }}
            >
              Follow me on social media
            </p>
            <div
              style={{
                display: "flex",
                marginLeft: "2rem",
                marginTop: "1rem",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2rem",
                color: "#000",
              }}
            >
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
          </div>
        </div>
        {/* Right */}
        {/* <form action=""> */}
        <form ref={form} onSubmit={sendEmail} className={styles.rightpart}>
          <div className="flex flex-col justify-between items-between w-[100%]  p-[1rem] lg:p-[3rem] bg-[#579978] text-[#fff] ">
            <div className={styles.names}>
              <div className={styles.fname}>
                <label className={styles.contact__label} htmlFor="fnama">
                  First Name
                </label>
                <input
                  className="mt-[0.4rem] rounded-[5px] h-[40px] w-[100%] outline-none text-[#000] pl-[0.8rem]"
                  name="first_name"
                  type="text"
                  id="fname"
                  onChange={(e) => setFName(e.target.value)}
                  value={fName}
                />
                {fNameError && <div className="text-red-300">{fNameError}</div>}
              </div>
              <div className={styles.lname}>
                <label className={styles.contact__label} htmlFor="lnama">
                  Last Name
                </label>
                <input
                  className="mt-[0.4rem] rounded-[5px] h-[40px] w-[100%] outline-none text-[#000] pl-[0.8rem]"
                  name="last_name"
                  type="text"
                  id="lname"
                  onChange={(e) => setLName(e.target.value)}
                  value={lName}
                />
                {lNameError && <div className="text-red-300">{lNameError}</div>}
              </div>
            </div>
            <div className="flex flex-col  my-[1rem]">
              <label className={styles.contact__label} htmlFor="fnama">
                Email
              </label>
              <input
                className="rounded-[5px] h-[40px] outline-none text-[#000] pl-[0.8rem]"
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {emailError && <div className="text-red-300">{emailError}</div>}
            </div>

            <div className="flex flex-col my-[1rem]">
              <label className={styles.contact__label} htmlFor="fnama">
                Subject
              </label>
              <input
                className="rounded-[5px] h-[40px] outline-none text-[#000] pl-[0.8rem]"
                name="subject"
                type="text"
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              {subjectError && (
                <div className="text-red-300">{subjectError}</div>
              )}
            </div>
            <div className="flex flex-col my-[1rem]">
              <label className={styles.contact__label} htmlFor="subject">
                Message
              </label>
              <textarea
                className="h-[196px] rounded-[5px] outline-none text-[#000] pl-[0.8rem]"
                name="message"
                type="text"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              {messageError && (
                <div className="text-red-300">{messageError}</div>
              )}
            </div>
            {success && (
              <div className="bg-green-400 text-white p-4 rounded">
                <div className="flex items-center">
                  <svg
                    className="mr-[1rem]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      fill="#579978"
                    />
                  </svg>
                  {success}
                </div>
              </div>
            )}

            <button
              type="submit"
              value="send"
              className="w-full h-[44px] bg-[#C4F9FF] text-[#000] text-[22px] rounded-[5px] my-[2rem]"
              style={{ fontWeight: "500" }}
            >
              Send Message
            </button>
          </div>
        </form>
        {/* </form> */}
      </div>
      <Footer />
    </>
  );
};

export default ContactScreen;
