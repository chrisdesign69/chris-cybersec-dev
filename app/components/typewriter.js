"use client";

import React from "react";
import Typing from "react-animated-typewriter";

//Styles
import styles from "/app/styles/min/Home.module.css";

const TypeWriterPage = () => {
  const wait = 1500;
  return (
    <Typing
      steps={[
        "Nextjs",
        wait,
        "Web Design",
        wait,
        "Web Development",
        wait,
        "Full-Stack Development",
        wait,
        "Responsive Design",
        wait
      ]}
      loop={Infinity}
      wrapper="h1"
      typeDelay={300}
      deleteDelay={100}
    />
  );
};

export default TypeWriterPage;
