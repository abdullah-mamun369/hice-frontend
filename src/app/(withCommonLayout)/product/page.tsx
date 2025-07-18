"use client";

import { useState } from "react";
import ThreeModelViewer from "@/components/ThreeModelViewer/ThreeModelViewer";

const productModels = {
  footing: "/COL016.glb",
  drainage: "/COL016.glb",
  framing: "/COL016.glb",
  rectification: "/COL016.glb",
  retainingWalls: "/COL016.glb",
  timberSubfloor: "/COL016.glb",
};

export default function ProductPage() {
  const [selectedModel, setSelectedModel] =
    useState<keyof typeof productModels>("footing");
  const [autoRotate, setAutoRotate] = useState(false);
  const modelUrl = productModels[selectedModel];

  return (
    <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden bg-black">
      <ThreeModelViewer autoRotate={true} />
    </div>
  );
}
