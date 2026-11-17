import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Davie Interiors",
  description:
    "Thoughtful interior design for considered living. Explore residential and commercial projects by Forma Studio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
