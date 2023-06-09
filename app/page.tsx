"use client"

import { Inter } from "@next/font/google";
import SvgComponent from "@/components/SvgComponent";
import Footer from "@/components/Footer";
import AboutTitle from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <AboutTitle />
        <Footer />
        <SvgComponent />
     
    </>
  );
}
