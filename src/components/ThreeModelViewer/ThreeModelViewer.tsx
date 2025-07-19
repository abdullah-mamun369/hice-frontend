"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";
import backgroundImage from "@/assets/model-bg.jpg";

type ModelProps = {
  modelUrl: string;
  width?: string;
  height?: string;
  adjustCamera?: number;
};

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.01} />;
}

export default function ThreeModelViewer({
  modelUrl,
  width = "100%",
  height = "100vh",
  adjustCamera = 1,
}: ModelProps) {
  return (
    <div
      style={{
        width,
        height,
        backgroundImage: `url(${backgroundImage.src || backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 2, 8], fov: 50 }}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <Suspense fallback={null}>
          <Stage
            environment="studio"
            intensity={1}
            shadows
            adjustCamera={adjustCamera}
          >
            <Model url={modelUrl} />
          </Stage>
          <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}
