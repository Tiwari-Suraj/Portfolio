import React from "react";
import "./Mywork.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion } from "motion/react";

const Mywork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          My Latest Work
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mywrok-container"
      >
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mywork-showmore"
      >
        <p>Show More</p>
        <img style={{}} src={arrow_icon} alt="" />
      </motion.div>
    </div>
  );
};

export default Mywork;
