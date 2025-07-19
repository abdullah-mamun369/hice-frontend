"use client";

import ThreeModelViewer from "@/components/ThreeModelViewer/ThreeModelViewer";
import DragPointer from "@/helpers/rotatePointer/DragPointer";

export default function ProductPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden bg-black">
      <ThreeModelViewer modelUrl="https://res.cloudinary.com/djoy8k5eu/image/upload/v1752861433/COL016_zdrfsr.glb" />
      <DragPointer />
    </div>
  );
}
