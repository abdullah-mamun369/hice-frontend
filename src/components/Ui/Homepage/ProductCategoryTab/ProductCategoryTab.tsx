"use client";

import CustomTabComponent from "@/components/Tabs/CustomTabComponent";
import { PRODUCT_CATEGORIES } from "@/constants/categories";
import { Container } from "@mui/material";

const productImage = "@/assets/product-img.png";

// Valid Pexels image URLs (replace with your own if needed)
const productImages = {
  footing:
    "https://res.cloudinary.com/djoy8k5eu/image/upload/v1752793629/P009-2D.png", // Concrete foundation
  drainage:
    "https://res.cloudinary.com/djoy8k5eu/image/upload/v1752793629/P009-2D.png", // Drainage system
  framing:
    "https://res.cloudinary.com/djoy8k5eu/image/upload/v1752793629/P009-2D.png", // Timber framing
  rectification:
    "https://res.cloudinary.com/djoy8k5eu/image/upload/v1752793629/P009-2D.png", // Crack repair
  retainingWalls:
    "https://res.cloudinary.com/djoy8k5eu/image/upload/v1752793629/P009-2D.png", // Retaining wall
  timberSubfloor:
    "https://res.cloudinary.com/djoy8k5eu/image/upload/v1752793629/P009-2D.png", // Wooden floor
};

const ProductCategoryTab = () => {
  const tabs = [
    {
      label: PRODUCT_CATEGORIES.FOOTING,
      content: [
        {
          imageUrl: productImages.footing,
          serial: "FT-001",
          title: "Concrete Footing",
        },
        {
          imageUrl: productImages.footing,
          serial: "FT-002",
          title: "Strip Footing",
        },
        {
          imageUrl: productImages.footing,
          serial: "FT-003",
          title: "Pad Footing",
        },
      ],
    },
    {
      label: PRODUCT_CATEGORIES.DRAINAGE,
      content: [
        {
          imageUrl: productImages.drainage,
          serial: "DR-001",
          title: "Stormwater Drain",
        },
        {
          imageUrl: productImages.drainage,
          serial: "DR-002",
          title: "French Drain",
        },
        {
          imageUrl: productImages.drainage,
          serial: "DR-003",
          title: "Channel Drain",
        },
      ],
    },
    {
      label: PRODUCT_CATEGORIES.FRAMING,
      content: [
        {
          imageUrl: productImages.framing,
          serial: "FR-001",
          title: "Timber Frame",
        },
        {
          imageUrl: productImages.framing,
          serial: "FR-002",
          title: "Steel Frame",
        },
        {
          imageUrl: productImages.framing,
          serial: "FR-003",
          title: "Wall Frame",
        },
      ],
    },
    {
      label: PRODUCT_CATEGORIES.RECTIFICATION,
      content: [
        {
          imageUrl: productImages.rectification,
          serial: "RC-001",
          title: "Crack Repair",
        },
        {
          imageUrl: productImages.rectification,
          serial: "RC-002",
          title: "Structural Fix",
        },
        {
          imageUrl: productImages.rectification,
          serial: "RC-003",
          title: "Foundation Repair",
        },
      ],
    },
    {
      label: PRODUCT_CATEGORIES.RETAINING_WALLS,
      content: [
        {
          imageUrl: productImages.retainingWalls,
          serial: "RW-001",
          title: "Concrete Wall",
        },
        {
          imageUrl: productImages.retainingWalls,
          serial: "RW-002",
          title: "Timber Wall",
        },
        {
          imageUrl: productImages.retainingWalls,
          serial: "RW-003",
          title: "Block Wall",
        },
      ],
    },
    {
      label: PRODUCT_CATEGORIES.TIMBER_SUBFLOOR,
      content: [
        {
          imageUrl: productImages.timberSubfloor,
          serial: "TS-001",
          title: "Hardwood Subfloor",
        },
        {
          imageUrl: productImages.timberSubfloor,
          serial: "TS-002",
          title: "Plywood Subfloor",
        },
        {
          imageUrl: productImages.timberSubfloor,
          serial: "TS-003",
          title: "Joist System",
        },
        {
          imageUrl: productImages.timberSubfloor,
          serial: "TS-001",
          title: "Hardwood Subfloor",
        },
        {
          imageUrl: productImages.timberSubfloor,
          serial: "TS-002",
          title: "Plywood Subfloor",
        },
        {
          imageUrl: productImages.timberSubfloor,
          serial: "TS-003",
          title: "Joist System",
        },
        {
          imageUrl: productImages.timberSubfloor,
          serial: "TS-001",
          title: "Hardwood Subfloor",
        },
        {
          imageUrl: productImages.timberSubfloor,
          serial: "TS-002",
          title: "Plywood Subfloor",
        },
        {
          imageUrl: productImages.timberSubfloor,
          serial: "TS-003",
          title: "Joist System",
        },
      ],
    },
  ];

  return (
    <Container>
      <CustomTabComponent tabs={tabs} sx={{}} />
    </Container>
  );
};

export default ProductCategoryTab;
