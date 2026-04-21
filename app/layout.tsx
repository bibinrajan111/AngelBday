import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday Angel",
  description: "An interactive birthday story for Angel Reji"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
