import React from "react";

const Footer: React.FC = () => {

  return (
    <footer>
      <div className=" pt-80 container px-6 py-8 mx-auto">
        <hr className="my-10 border-dark dark:border-white" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-dark dark:text-white ">© Copyright 2023. All Rights Reserved.</p>
          <div className=" dark:text-white flex mt-3 -mx-2 sm:mt-0">
            <a href="#" className="mx-2 text-sm hover:opacity-60 text-dark dark:text-white transition-colors duration-300 "> Teams </a>
            <a href="#" className="mx-2 text-sm hover:opacity-60 text-dark dark:text-white transition-colors duration-300 "> Privacy </a>
            <a href="#" className="mx-2 text-sm hover:opacity-60 text-dark  dark:text-white transition-colors duration-300"> Cookies </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
