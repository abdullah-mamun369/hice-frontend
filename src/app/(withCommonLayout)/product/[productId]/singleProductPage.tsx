// app/(withCommonLayout)/product/[productId]/client.tsx
"use client";

import ThreeModelViewer from "@/components/ThreeModelViewer/ThreeModelViewer";
import { useGetProductQuery } from "@/redux/api/productApi";

export default function ProductPageClient({
  productId,
}: {
  productId: string;
}) {
  const { data, isLoading } = useGetProductQuery(productId);

  return (
    <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden bg-black">
      {!isLoading ? (
        <ThreeModelViewer
          modelUrl={data?.threeDUrl}
          height="100%"
          width="100%"
          adjustCamera={2}
        />
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
}
