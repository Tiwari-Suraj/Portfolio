import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import { motion, spring } from "motion/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const PDF_FILE_URL = "/Suraj.pdf";

const downloadFileURL = (url) => {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = window.URL.createObjectURL(blob);
      const fileName = url.split("/").pop();

      const aTag = document.createElement("a");
      aTag.href = blobURL;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    })
    .catch((error) => {
      console.error("Download error:", error);
    });
};

const Hero = () => {
  return (
    <div id="home" className="hero">
      <motion.img
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        className="hero-img"
        src={profile_img}
        alt=""
      />
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span>I'm Suraj Tiwari,</span> I am Full Stack MERN Developer based in
        New Delhi (India)
      </motion.h1>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        I did my graduation from
        <span> Dr APJ Abdul Kalam Technical University</span>
      </motion.p>
      <div>
        <div className="hero-action">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-connect"
          >
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-resume"
            onClick={() => {
              downloadFileURL(PDF_FILE_URL);
            }}
          >
            My resume
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
