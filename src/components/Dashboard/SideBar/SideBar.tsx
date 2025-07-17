/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logoColored from "@/assets/color-logo.png";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth.services";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={logoColored} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          PH Health Care
        </Typography>
      </Stack>

      <List>
        {userRole &&
          drawerItems(userRole.toLowerCase() as UserRole).map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
      </List>
    </Box>
  );
};

export default SideBar;
