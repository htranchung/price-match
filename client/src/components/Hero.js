import React from "react";
import RobotCanvas from "./canvas/Robot";
import {
  MeshDistortMaterial,
  Sphere,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Hero = () => {
  return (
    <section id="hero">
      <div className="heroSection wrapper">
        <div className="left-hero-container">
          <h1 className="title">
            PRICEMA <span>AI.</span>
            <br />
            A TOOLKIT FOR ALL YOUR SHOPPING NEEDS
          </h1>
          <p className="subtitle">
            Finally a tool to find the best price for all your shopping needs.
            Simply, type the product you are looking and let Pricema AI do the
            work for you.
          </p>
          <button
            type="button"
            className="try-btn focus:outline-none font-medium rounded-3xl mr-3 md:mr-0">
            Try Pricema AI
          </button>
        </div>
        <div className="right-hero-container">
          <div className="robot-container">
            <RobotCanvas className="robot-img" />
          </div>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 100]} scale={2.1}>
              <MeshDistortMaterial
                color="#4d3ff5"
                attach="material"
                distort={0.5}
                speed={1}
              />
            </Sphere>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
