"use client";

import CustomTabComponent from "@/components/Tabs/CustomTabComponent";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { Container } from "@mui/material";

const ProductCategoryTab = () => {
  const { data, isLoading } = useGetAllProductsQuery({});

  console.log(data);
  const products = data?.products;

  // console.log(doctors);

  return (
    <Container>
      {!isLoading ? (
        <CustomTabComponent products={products} sx={{}} />
      ) : (
        <h1>Loading.....</h1>
      )}
    </Container>
  );
};

export default ProductCategoryTab;
