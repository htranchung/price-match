import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Robot = () => {
  const robot = useGLTF("./robot-model/scene.gltf");

  return (
    <primitive object={robot.scene} scale={1.5} position-y={-3} rotation-y={1} />
  );
};

const RobotCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 55,
        near: 0.1,
        far: 200,
        position: [-2, 3, 6],
      }}>
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Robot />
      </Suspense>
    </Canvas>
  );
};

export default RobotCanvas;
