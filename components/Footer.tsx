import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-2 text-center left-0 bottom-0 w-full">
      <hr className="border-gray-500 mb-2" />
      <p className="text-sm text-gray-500 flex justify-center items-center">
        <a href="/">Home</a>
        <span className="mx-2">|</span>
        <a href="/features">Features</a>
        <span className="mx-2">|</span>
        <a href="/pricing">Pricing</a>
        <span className="mx-2">|</span>
        <a href="/faqs">FAQs</a>
        <span className="mx-2">|</span>
        <a href="/about">About</a>
      </p>
      <p className="text-sm text-gray-500">© 2023 Company, Inc</p>
    </footer>
  );
};

export default Footer;
