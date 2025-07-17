import { Box, Typography } from "@mui/material";
import Image from "next/image";
import heroBanner from "@/assets/home-banner.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        marginBottom: "50px",
      }}
    >
      <Image src={heroBanner} alt="Hero Image" />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          width: "100%",
          px: 2,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 600 }}>
          All 3D Models
        </Typography>
        {/* <Typography variant="body2" component="h1">
          Your Hero Text Here
        </Typography> */}
      </Box>
    </Box>
  );
};

export default HeroSection;
