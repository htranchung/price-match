import React from "react";
import RobotCanvas from "./canvas/Robot";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Hero = () => {
  return (
    <section id="hero">
      <div className="heroSection wrapper">
        <div className="left-hero-container">
          <h1 className="title">
            PRICEMA <span>AI.</span>
            <br />A TOOLKIT FOR ALL YOUR ALL YOUR DATA ANALYSIS NEEDS
          </h1>
          <p className="subtitle">
            Pricema AI allows you to analyze your data with ease. Simply, upload
            your data, edit it, and let Pricema AI take it from there.
          </p>

          <button
            type="button"
            onClick={() =>
              window.open(
                " https://tanvirkhon-file-reader-app-y2jcf4.streamlit.app/"
              )
            }
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
            <Sphere args={[1, 100, 100]} scale={2.3}>
              <MeshDistortMaterial
                color="#4d3ff5"
                attach="material"
                distort={0.4}
                speed={0.7}
              />
            </Sphere>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
