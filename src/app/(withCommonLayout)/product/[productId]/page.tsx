import { Box } from "@mui/material";
import ProductPageClient from "./singleProductPage";
import SwipeableDrawer from "@/components/Drawer/SwipeableDrawer";
import ProductHeading from "@/components/Ui/Singlepage/ProductHeading";

const productPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params; // Await params to resolve the promise

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <ProductHeading productId={productId} />
      <Box sx={{ display: "flex", position: "relative" }}>
        <SwipeableDrawer productId={productId} />
        <Box sx={{}}>
          <ProductPageClient productId={productId} />
        </Box>
      </Box>
    </Box>
  );
};

export default productPage;
