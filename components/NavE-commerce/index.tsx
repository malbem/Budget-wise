"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    });

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
            <nav
                className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${sticky
                    ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
                    : "absolute"
                    }`}
            >
                <div className="container">
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className="w-60 max-w-full px-4 xl:mr-12">
                            <Link
                                href="/e-commerce"
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
                        <div className="flex w-full items-center justify-between px-4">
                                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                    <li><a className="hover:text-gray-200" href="#">Home</a></li>
                                    <li><a className="hover:text-gray-200" href="#">Catagory</a></li>
                                    <li><a className="hover:text-gray-200" href="#">Collections</a></li>
                                    <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
                                </ul>
                            <div className="hidden xl:flex items-center space-x-5 items-center pr-10">
                                <a className="hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </a>
                                <a className="flex items-center hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="flex absolute -mt-5 ml-4">
                                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                        </span>
                                    </span>
                                </a>

                                <a className="flex items-center hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>
                            <ThemeToggler />
                        </div>
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Header;
