"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
//import useWindowSize from "../hooks/use-window-size";

//Styles
import styles from "/app/styles/min/Home.module.css";

const Image1 = () => {

  return (
    <CldImage
      width="320"
      height="250"
      src="image1"
      sizes="100vw"
      crop="thumb"
      gravity="faces"
      alt="chris-cybersec.dev | Home for best Web Design"
      blur="80"
      brightness="-30"
      
      colorize="10,co_blue"

    />
  );
};

export default Image1;