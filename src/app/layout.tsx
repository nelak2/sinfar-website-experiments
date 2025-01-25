import "~/styles/styles.css";

import { SpeedInsights } from "@vercel/speed-insights/next"

import { Caudex } from "next/font/google";

const caudex = Caudex({
  weight: '400',
  display: "swap",
  subsets: ["latin"],
})

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Sinfar",
  description: "Sinfar - A 18+ Neverwinter Nights Roleplaying Community",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${caudex.className}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
