"use client";

import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`dark:bg-gradient-to-t dark:from-violet dark:to-dark `}>
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
 
      <style jsx global>{`
        body {
          background-attachment: fixed;
        }
      `}</style>
    </html>
  );
}

import { Providers } from "./providers";
