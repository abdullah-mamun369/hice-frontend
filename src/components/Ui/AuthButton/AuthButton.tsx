"use client";

import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };

  return (
    <>
      {userInfo?.userId ? (
        <Button
          color="error"
          onClick={handleLogout}
          sx={{
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Logout
        </Button>
      ) : (
        <Button
          component={Link}
          href="/login"
          sx={{
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
