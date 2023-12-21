import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntDesignLib";

export const metadata: Metadata = {
  title: "IKUN AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
