"use client"

import { GoogleFonts } from "next-google-fonts";
import SvgComponent from "@/components/SvgComponent";
import Footer from "@/components/Footer";
import AboutTitle from "@/components/About";


export default function Home() {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap" />
      <AboutTitle />
      <Footer />
      <SvgComponent />

    </>
  );
}
