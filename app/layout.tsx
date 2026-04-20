import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "niche-bot-005 | niche-bot-005",
  description: "Auto-generated niche web app starter for niche-bot-005",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
