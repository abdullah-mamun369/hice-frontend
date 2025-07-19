"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.01} />;
}

export default function ThreeModelViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2, 8], fov: 50 }}
      style={{
        width: "100%",
        height: "100vh",
        background: "#424952",
        cursor: "pointer",
      }}
    >
      <Suspense fallback={null}>
        <Stage environment="studio" intensity={1} shadows adjustCamera={2}>
          <Model url={modelUrl} />
        </Stage>
        <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={true} />
      </Suspense>
    </Canvas>
  );
}
