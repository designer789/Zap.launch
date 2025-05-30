import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const suisse = localFont({
  src: [
    {
      path: "../../public/fonts/Suisse Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Suisse Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suisse Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suisse Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suisse Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-suisse",
});

export const metadata: Metadata = {
  title: "Zap.launch",
  description: "Turn tweets and videos into tradable tokens in seconds. Transform your content into on-chain assets with built-in bonding curves and instant DEX deployment.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${suisse.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
