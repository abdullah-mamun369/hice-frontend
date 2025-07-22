"use client";

import { useState } from "react";
import { Drawer, Box, Typography, IconButton, Stack } from "@mui/material";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useGetProductQuery } from "@/redux/api/productApi";
import Image from "next/image";
import { useGetAllDisclaimersQuery } from "@/redux/api/disclaimerApi";

interface SwipeableDrawerProps {
  productId: string;
}

const SwipeableDrawer: React.FC<SwipeableDrawerProps> = ({ productId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: productData, isLoading: isProductLoading } =
    useGetProductQuery(productId);

  const { data: disclaimerData, isLoading: isDisclaimerLoading } =
    useGetAllDisclaimersQuery({});

  console.log("disclaimerData", disclaimerData?.disclaimers);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Drawer
        anchor="left"
        open={true}
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            width: isOpen ? 525 : 100,
            backgroundColor: "#fcfcfc",
            color: "#ffffff",
            transition: "width 0.3s ease-in-out",
            position: "absolute",
            top: 0,
            height: "100%",
            overflowX: "hidden",
            zIndex: 50,
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
            // boxShadow: "4px 0 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        {!isProductLoading ? (
          <Box
            sx={{ pt: 5, pl: 6, pr: 10, display: isOpen ? "block" : "none" }}
          >
            <Box sx={{}}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#6b6b6b" }}
                >
                  2D Model
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    width: "70%",
                    backgroundColor: "#6b6b6b",
                    marginLeft: "10px",
                  }}
                ></Box>
              </Box>
              <a
                href={productData.twoDUrl || "/placeholder-image.png"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={productData.twoDUrl || "/placeholder-image.png"}
                  alt={productData?.title}
                  width={300}
                  height={300}
                  style={{ borderRadius: "8px", marginTop: "5px" }}
                />
              </a>
            </Box>

            <Box sx={{ mt: 9 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#6b6b6b" }}
                >
                  Disclaimer:
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    width: "65%",
                    backgroundColor: "#6b6b6b",
                    marginLeft: "10px",
                  }}
                ></Box>
              </Box>
              <Stack spacing={2}>
                {isDisclaimerLoading ? (
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 400, color: "#6b6b6b", mt: 1 }}
                  >
                    Loading disclaimers...
                  </Typography>
                ) : (
                  disclaimerData?.disclaimers?.map((disclaimer, index) => (
                    <Box key={index} sx={{ display: "flex" }}>
                      <Box>
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 141.61 144"
                          style={{ marginTop: "10px", marginRight: "10px" }}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              d="M-355.62-197.82c-0.32,0.36-0.62,0.74-0.96,1.08c-1.03,1.05-2.08,2.08-3.12,3.12c-0.72,0.72-1.58,1.08-2.61,1.08
                c-2.77,0-5.53,0.03-8.3,0.05c-0.25,0-0.49,0.02-0.8,0.04c0,7.22,0,14.39,0,21.62c-5.36,0-10.66,0-16.01,0c0-16.21,0-32.43,0-48.71
                c8.83,0,17.66,0,26.55,0c0,5.43,0,10.87,0,16.34c-1.72,0-3.43,0-5.2,0c0-3.65,0-7.27,0-10.95c-5.35,0-10.64,0-15.98,0
                c0,12.64,0,25.28,0,37.97c1.72,0,3.43,0,5.21,0c0-10.87,0-21.73,0-32.65c1.81,0,3.54,0,5.37,0c0,3.61,0,7.25,0,10.98
                c0.4,0,0.69,0,0.98,0c4.66,0,9.32,0,13.98,0c0.3,0,0.59,0.04,0.89,0.06C-355.61-197.81-355.62-197.82-355.62-197.82z"
                              fill="#6b6b6b"
                            />
                            <path d="이지" fill="#6b6b6b" />
                            <path
                              d="M-355.61-197.81c0.05-0.29,0.13-0.57,0.13-0.86c0.01-2.56-0.01-5.12,0.02-7.68c0.01-1.24,0.85-2.24,1.97-2.49
                c1.26-0.28,2.46,0.25,3.04,1.34c0.73,1.38,0.31,4.29-0.78,5.39c-1.12,1.13-2.25,2.26-3.37,3.39c-0.22,0.23-0.44,0.46-0.78,0.83
                c1.82,0,3.47,0,5.18,0c0,5.5,0,10.9,0,16.37c-1.73,0-3.43,0-5.27,0c0-0.27,0-0.56,0-0.84c0-4.87,0-9.74-0.01-14.62
                c0-0.29-0.09-0.57-0.14-0.86C-355.62-197.82-355.61-197.81-355.61-197.81z"
                              fill="#6b6b6b"
                            />
                          </g>
                          <g>
                            <path
                              d="M93.96,64.19c-0.95,1.07-1.85,2.19-2.85,3.2c-3.05,3.09-6.14,6.13-9.21,9.21c-2.13,2.14-4.67,3.18-7.72,3.18
                c-8.17,0-16.34,0.09-24.51,0.15c-0.73,0.01-1.45,0.06-2.37,0.11c0,21.32,0,42.52,0,63.89c-15.85,0-31.49,0-47.31,0
                C0,96.03,0,48.09,0,0c26.09,0,52.18,0,78.43,0c0,16.06,0,32.1,0,48.27c-5.09,0-10.12,0-15.35,0c0-10.77,0-21.47,0-32.36
                c-15.81,0-31.44,0-47.21,0c0,37.35,0,74.71,0,112.19c5.09,0,10.13,0,15.4,0c0-32.13,0-64.21,0-96.48c5.33,0,10.45,0,15.87,0
                c0,10.68,0,21.42,0,32.44c1.17,0,2.04,0,2.90,0c13.77,0,27.54,0,41.31,0.01c0.88,0,1.75,0.11,2.63,0.16
                C93.99,64.24,93.96,64.19,93.96,64.19z"
                              fill="#6b6b6b"
                            />
                            <path
                              d="M141.61,144c-26.18,0-52.23,0-78.43,0c0-16.08,0-32.12,0-48.28c5.06,0,10.11,0,15.34,0c0,10.77,0,21.47,0,32.34
                c15.82,0,31.44,0,47.19,0c0-37.39,0-74.75,0-112.34c-10.45,0-20.79,0-31.31,0c0-5.33,0-10.43,0-15.71c15.69,0,31.39,0,47.21,0
                C141.61,47.97,141.61,95.86,141.61,144z"
                              fill="#6b6b6b"
                            />
                            <path
                              d="M93.99,64.24c0.13-0.85,0.38-1.7,0.39-2.55c0.04-7.56-0.02-15.13,0.06-22.69c0.04-3.66,2.5-6.61,5.83-7.35
                c3.73-0.83,7.27,0.74,8.97,3.97c2.15,4.08,0.92,12.66-2.32,15.94c-3.3,3.35-6.64,6.67-9.95,10.01c-0.66,0.67-1.29,1.37-2.31,2.46
                c5.38,0,10.26,0,15.29,0c0,16.25,0,32.22,0,48.35c-5.1,0-10.15,0-15.57,0c0-0.8,0-1.64,0-2.48c0-14.4,0.01-28.79-0.02-43.19
                c0-0.84-0.27-1.68-0.41-2.53C93.96,64.19,93.99,64.24,93.99,64.24z"
                              fill="#6b6b6b"
                            />
                          </g>
                        </svg>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 400, color: "#6b6b6b", mt: 1 }}
                      >
                        {disclaimer.disDescription}
                      </Typography>
                    </Box>
                  ))
                )}
                {!isDisclaimerLoading &&
                  (!disclaimerData?.disclaimers ||
                    disclaimerData?.disclaimers.length === 0) && (
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 400, color: "#6b6b6b", mt: 1 }}
                    >
                      No disclaimers available.
                    </Typography>
                  )}
              </Stack>
            </Box>
          </Box>
        ) : (
          <Box sx={{ p: 2 }}>
            <Typography variant="body1">Loading product details...</Typography>
          </Box>
        )}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0, // Matches IconButton width (40px) + 8px offset
            height: "100%",
            width: "4px",
            backgroundColor: "#00AEEF",
          }}
        />
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            color: "#ffffff",
            backgroundColor: "#00AEEF",
            "&:hover": { backgroundColor: "#00AEEF" },
          }}
        >
          {isOpen ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
        </IconButton>
      </Drawer>
    </Box>
  );
};

export default SwipeableDrawer;
