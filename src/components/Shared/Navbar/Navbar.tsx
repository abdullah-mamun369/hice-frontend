"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import coloredLogo from "@/assets/color-logo.png";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/Ui/AuthButton/AuthButton"),
    { ssr: false }
  );

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Image src={coloredLogo} width={150} height={150} alt="logo" />
        </Box>
        <Stack direction="row" spacing={2}>
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              transition: "color 0.3s ease",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            HOME
          </Typography>
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              transition: "color 0.3s ease",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            TRAINING
          </Typography>
        </Stack>
        <Box>
          <AuthButton />
          <Button
            component={Link}
            href="https://hice.com.au/"
            target="_blank"
            sx={{ ml: "10px", color: "#fff", fontWeight: 600 }}
          >
            MAIN SITE
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default Navbar;
