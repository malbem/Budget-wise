"use client"

import { GoogleFonts } from "next-google-fonts";
import SvgComponent from "@/components/SvgComponent";
import Footer from "@/components/Footer";
import AboutTitle from "@/components/About";
 

export default function Home() {
  return (
    <>
      <AboutTitle />
      <Footer />
      <SvgComponent />

    </>
  );
}
