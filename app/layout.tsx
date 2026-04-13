import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Win Business Collective — Finance + Tech Marketing",
  description:
    "Fintech founders and financial firms don't need a generalist. They need someone who already understands the market, speaks the language, and knows how to make compliance and creativity coexist.",
  keywords: [
    "fintech marketing",
    "financial services marketing",
    "RIA marketing",
    "fintech founder",
    "GTM strategy",
    "content strategy",
    "compliance-aware marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
