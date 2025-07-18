"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import React from "react";

// ✅ Model generated from gltfjsx
function Model(props: any) {
  const { nodes, materials } = useGLTF("/COL016.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_1.geometry}
          material={materials["Metal_Seamed.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_2.geometry}
          material={materials["_Color_I05_1.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_3.geometry}
          material={materials["Color_M00.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_4.geometry}
          material={materials["Wood_Cherry_Original.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_5.geometry}
          material={materials["_Metal_Rough_1.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_6.geometry}
          material={materials["_Metal_Silver_1.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_7.geometry}
          material={materials["Metal_Aluminum_Anodized.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_8.geometry}
          material={materials["Color_I05.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_9.geometry}
          material={materials["Color_M07.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_10.geometry}
          material={materials["COLOR_LOGO_2.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COL016002_11.geometry}
          material={materials["FrontColor.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/COL016.glb");

// ✅ Viewer Component
const ThreeModelViewer: React.FC<{ autoRotate?: boolean }> = ({
  autoRotate = false,
}) => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2, 8], fov: 50 }}
      style={{ width: "100%", height: "100vh", background: "#686868" }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          intensity={1.2}
          position={[5, 10, 5]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Nice staging with shadow/floor */}
        <Stage environment="studio" intensity={1} shadows adjustCamera={2}>
          <Model scale={[0.5, 0.5, 0.5]} />
        </Stage>

        {/* Controls */}
        <OrbitControls autoRotate={autoRotate} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeModelViewer;
