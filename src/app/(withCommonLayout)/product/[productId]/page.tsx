import { Box } from "@mui/material";
import ProductPageClient from "./singleProductPage";
import Sidebar from "@/components/Drawer/SwipeableDrawer";

const productPage = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  return (
    <Box>
      <ProductPageClient productId={productId} />
      <Sidebar />
    </Box>
  );
};

export default productPage;
