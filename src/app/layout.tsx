import React from 'react'
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Notification from "./components/Grid2";

// import Footer from "./components/Footer";

import Link from 'next/link'




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trademarks and Domain names for sales or lease",
  description: "A unique opportunity to buy or lease the following trademarks and domain names",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {/* <Notification />
          <Notification /> */}
           {/* <Navbar /> */}
            {children}
           {/* <Footer /> */}
           {/* <Notification /> */}
           {/* <Footers /> */}
           </div>
     </body>
    </html>
  );
}
