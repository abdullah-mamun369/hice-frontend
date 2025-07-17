"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

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
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
        <Stack direction="row" spacing={2}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/">
            Health Plans
          </Typography>
          <Typography component={Link} href="/">
            Medicine
          </Typography>
          <Typography component={Link} href="/">
            Diagnosistics
          </Typography>
          <Typography component={Link} href="/">
            NGOs
          </Typography>
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
