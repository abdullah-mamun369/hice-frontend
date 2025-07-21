"use client";

import React, { useState } from "react";
import { Box, Tabs, Tab, Card, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ThreeModelViewer from "../ThreeModelViewer/ThreeModelViewer";
import { PRODUCT_CATEGORIES } from "@/constants/categories";
import { TProduct } from "@/types/product";
import Link from "next/link";

interface TabPanelProps {
  children: TProduct[];
  value: number;
  index: number;
}

interface CustomTabsProps {
  products: TProduct[] | undefined;
  sx?: object;
  initialValue?: number;
}

const CustomTab = styled(Tab)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "5px",
  textTransform: "none",
  minWidth: "100px",
  marginRight: "10px",
  padding: theme.spacing(1, 2),
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
  "&.Mui-selected": {
    backgroundColor: "#00AEEF",
    color: "white",
    border: `1px solid #00AEEF`,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: "8px",
  boxShadow: theme.shadows[3],
  height: "100%",
}));

const CustomTabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Grid container spacing={3}>
            {children?.map((product, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 4 }}>
                <Link href={`/product/${product._id}`} target="_blank">
                  <StyledCard>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "200px",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <ThreeModelViewer
                        modelUrl={product.threeDUrl}
                        height="100%"
                        width="100%"
                        adjustCamera={1.3}
                      />
                    </Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      mt={2}
                    >
                      {product.codeNumber}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      mt={2}
                    >
                      {product.category}
                    </Typography>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      mt={1}
                      color="text.secondary"
                    >
                      {product.title}
                    </Typography>
                  </StyledCard>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

const CustomTabComponent: React.FC<CustomTabsProps> = ({
  products,
  sx,
  initialValue = 0,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const categoryTab = [
    {
      label: PRODUCT_CATEGORIES.FOOTING,
    },
    {
      label: PRODUCT_CATEGORIES.DRAINAGE,
    },
    {
      label: PRODUCT_CATEGORIES.FRAMING,
    },
    {
      label: PRODUCT_CATEGORIES.RECTIFICATION,
    },
    {
      label: PRODUCT_CATEGORIES.RETAINING_WALLS,
    },
    {
      label: PRODUCT_CATEGORIES.TIMBER_SUBFLOOR,
    },
  ];

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="custom button tabs"
          sx={{ "& .MuiTabs-indicator": { display: "none" } }}
        >
          {categoryTab.map((tab, index) => (
            <CustomTab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>
      {categoryTab.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {products?.filter((product) => product.category === tab.label) || []}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTabComponent;
