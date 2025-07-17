import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Home & Industriial",
  description: "All 3D models for Home & Industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <AppRouterCacheProvider>
            <>
              <Toaster position="top-center" />
              {children}
            </>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
