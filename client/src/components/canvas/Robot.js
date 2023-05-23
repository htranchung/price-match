import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Robot = ({ isMobile }) => {
  const robot = useGLTF("./robot-model/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[10, 50, 10]}
        angle={0.5}
        penumbra={2}
        intensity={.7}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={.5} />
      <primitive
        object={robot.scene}
        scale={isMobile ? 2.5 : 4.5}
        position={isMobile ? [0, -3, 1.5] : [.5,-1.5, .5]}
        rotation={[0, -5, 0]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default RobotCanvas;
