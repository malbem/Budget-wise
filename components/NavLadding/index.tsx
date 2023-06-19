"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ThemeToggler from "../ThemeToggler";

const Header = () => { 
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent
        ${navbarOpen ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"}
        ${sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between w-full px-4 md:pl-8">
              {!isSmallScreen ? (
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                  <li>
                    <a className="hover:opacity-70" href="#About">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a className="hover:opacity-70" href="#Team">
                      Equipe
                    </a>
                  </li>
                  <li>
                    <a className="hover:opacity-70" href="#Contact-us">
                      Contate-nos
                    </a>
                  </li>
                </ul>
              ) : (
                <button
                  className="flex items-center justify-center px-4 py-2 text-base font-semibold text-dark hover:opacity-70 dark:text-white md:hidden"
                  onClick={navbarToggleHandler}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              )}
              <div className="flex items-center space-x-4">
                <Link
                  href="/signin"
                  className="py-3 px-7 text-base font-bold text-dark hover:opacity-70 dark:text-white"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp"
                >
                  Criar conta
                </Link>
                <div>
                  <ThemeToggler onClick={null} />
                </div>
              </div>
            </div>
          </div>
          {isSmallScreen && navbarOpen && (
            <div className=" font-bold py-5" >
              <ul className="flex flex-col items-center space-y-4 md:hidden">
                <li>
                  <a className="hover:opacity-70" href="#About">
                    Sobre
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-70" href="#Team">
                    Equipe
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-70" href="#Contact-us">
                    Contate-nos
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
