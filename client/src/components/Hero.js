import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import RobotImg from '../assets/Robot.png';
import RobotCanvas from "./canvas/Robot";

const Hero = () => {
  return <div className="heroSection">
    <p className="p1">
      An AI Tool for Your Shopping List
    </p>
    <p className="p2">
      Find the best price for all your shopping needs
    </p>
    <button type="button" className="tryButton focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0">Try Pricema AI</button>
    <img
      alt="Robot Image"
      src={RobotImg}
    />
  </div>;
};

export default Hero;
