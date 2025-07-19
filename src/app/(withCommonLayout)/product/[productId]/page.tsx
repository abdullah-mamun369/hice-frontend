"use client";

import ThreeModelViewer from "@/components/ThreeModelViewer/ThreeModelViewer";
import { useGetProductQuery } from "@/redux/api/productApi";

type TParams = {
  params: {
    productId: string;
  };
};

export default function ProductPage({ params }: TParams) {
  const id = params?.productId;

  console.log(`Fetching product with ID: ${id}`);

  const { data, isLoading } = useGetProductQuery(id);

  return (
    <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden bg-black">
      {!isLoading ? (
        <ThreeModelViewer
          modelUrl={
            data?.threeDUrl ||
            "https://res.cloudinary.com/djoy8k5eu/image/upload/v1752961887/P0023-3D.glb"
          }
          height="100%"
          width="100%"
          adjustCamera={2}
        />
      ) : (
        <h1>Loading.....</h1>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h1 className="text-2xl font-bold">{data?.title || "Loading..."}</h1>
        <p className="text-lg">{data?.category || "Loading..."}</p>
        <p className="text-sm">{data?.codeNumber || "Loading..."}</p>
      </div>
    </div>
  );
}
