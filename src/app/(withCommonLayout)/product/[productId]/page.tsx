import { Box } from "@mui/material";
import ProductPageClient from "./singleProductPage";
import SwipeableDrawer from "@/components/Drawer/SwipeableDrawer";

const productPage = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      <SwipeableDrawer productId={productId} />
      <Box sx={{}}>
        <ProductPageClient productId={productId} />
      </Box>
    </Box>
  );
};

export default productPage;
