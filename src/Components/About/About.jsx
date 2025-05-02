import React from "react";
import "./About.css";
import { motion } from "motion/react";

import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="about"
    >
      <div className="about-tital">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          About me
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="about-section"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="about-left"
        >
          <img src={profile_img} alt="profile_img" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="about-right"
        >
          <div className="about-para">
            <p> I am Fresher Full Stack MERN developer</p>
            <p>
              <span>
                My passion for Full Stack MERN developer . I Have 2 Month
                experienc for React Frontend Developer .But I have Good
                knowledge HTML5,CSS3,Tailwind,
                Css,Bootstrap,JavaSript,React.JS,Node.js,Express.js and MongoDB.
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
