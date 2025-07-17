/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import logoWhite from "@/assets/white-logo.png";
import Person2Icon from "@mui/icons-material/Person2";
import LockIcon from "@mui/icons-material/Lock";

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

const LoginPage = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/dashboard");
      } else {
        setError(res?.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Left Portion (50% width, 100% height) */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={logoWhite} width={500} height={500} alt="logo" />
      </Box>

      {/* Right Portion (50% width, 100% height) */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          mb={5}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            color="secondary.main"
            mb={1}
          >
            Sign In
          </Typography>
          <Typography variant="h6" fontWeight={700} color="secondary.main">
            Signin to view all the 3D models.
          </Typography>
          {error && (
            <Box>
              <Typography color="error" component="p" fontWeight={700}>
                {error}
              </Typography>
            </Box>
          )}
        </Stack>

        <Box>
          <PHForm
            onSubmit={handleLogin}
            resolver={zodResolver(validationSchema)}
            defaultValues={{ email: "", password: "" }}
          >
            <Box>
              <Box mb={1}>
                <PHInput
                  name="email"
                  label="User Email"
                  fullWidth={true}
                  sx={{
                    marginBottom: "20px",
                    "& .MuiInputBase-input": {
                      padding: "16px 14px",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      height: "50px",
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                  icon={<Person2Icon sx={{ fontSize: 26 }} />}
                />
                <PHInput
                  name="password"
                  label="Password"
                  fullWidth={true}
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "16px 14px",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      height: "50px",
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                  icon={<LockIcon fontSize="medium" />}
                />
              </Box>
              <Typography
                mb={1}
                textAlign="end"
                component="p"
                fontWeight={400}
                color="secondary.main"
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <Link href="/register">Forgot Password?</Link>
              </Typography>
              <Button
                sx={{
                  borderRadius: "8px",
                  margin: "10px 0px",
                  height: "50px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
                fullWidth={true}
                type="submit"
              >
                Sign In
              </Button>
            </Box>
          </PHForm>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
