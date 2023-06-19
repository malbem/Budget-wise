"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "../ThemeToggler";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import Modal from "../Modal";

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
        return () => {
            window.removeEventListener("scroll", handleStickyNavbar);
        };
    }, []);

    const [searchActive, setSearchActive] = useState(false);

    const handleSearchToggle = () => {
        setSearchActive(!searchActive);
        if (!searchActive) {
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }, 0);
        }
    };

    const menuItems = [
        { label: "Home", url: "/e-commerce", onClick: handleModalClose, },
        {
            label: "Serviços",
            url: "#",
            onClick: handleModalClose, 
            dropdown: [
                { label: "Serviço 1", url: "/e-commerce" },
                { label: "Serviço 2", url: "#" },
                { label: "Serviço 3", url: "#" },
            ],
        },
        { label: "Categorias", url: "#", onClick: handleModalClose, dropdown: [{ label: "Categoria 1", url: "#" }] },
    ];

    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const handleClickOutsideDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideDropdown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideDropdown);
        };
    }, []);

    return (
        <>
            <header
                className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${sticky
                    ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
                    : "absolute"
                    }`}
            >
                <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                    <h2>Modal Content</h2>
                    <button onClick={handleModalClose}>Close Modal</button>
                </Modal>

                <div className="container">
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className="w-60 max-w-full px-4 xl:mr-12">
                            <Link
                                href="/e-commerce"
                                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}
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
                        <div className="flex w-full items-center justify-between px-4 ">
                            {searchActive ? (
                                <div className={`search mx-auto ${searchActive ? "" : "hidden"}`}>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            placeholder="Pesquisar"
                                            className="border-primary border-2 dark:text-black w-[900px] bg-white px-4 py-2 rounded-md transition-colors duration-300"
                                        />
                                        <a className="hover:opacity-70 ml-2" href="#" onClick={handleSearchToggle}>
                                            <FaSearch className="text-primary h-6 w-6" />
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <ul className="flex px-4 mx-auto font-semibold font-heading space-x-12">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className="relative">
                                            <div
                                                className="hover:opacity-70 cursor-pointer"
                                                onClick={() => {
                                                    item.onClick && item.onClick();
                                                    handleDropdownToggle(index);
                                                }}
                                            >
                                                {item.label}
                                            </div>
                                            {activeDropdown === index && item.dropdown && (
                                                <ul
                                                    ref={dropdownRef}
                                                    className="absolute left-0 ml-1 mt-2 py-2 bg-white text-black rounded-md shadow-md"
                                                >
                                                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                        <li
                                                            key={dropdownIndex}
                                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            <Link href={dropdownItem.url}>
                                                                <div>{dropdownItem.label}</div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div className="flex items-center space-x-5 pr-10">
                                {searchActive ? null : (
                                    <>
                                        <a
                                            className="hover:opacity-70 hover:scale-125 "
                                            href="#"
                                            onClick={(e) => {
                                                handleSearchToggle();
                                                handleModalClose();
                                              }}
                                        >
                                            <FaSearch className="h-6 w-6" />
                                        </a>

                                        <a
                                            className="hover:opacity-70 hover:scale-125"
                                            href="#"
                                            onClick={handleOpenModal}
                                        >
                                            <FaShoppingCart className="h-6 w-6" />
                                        </a>
                                        <a className="flex items-center hover:scale-125 hover:opacity-70" href="#" onClick={handleModalClose}>
                                            <FaHeart className="h-6 w-6" />
                                        </a>
                                        <a className="flex items-center  hover:scale-125 hover:opacity-70" href="#"  onClick={handleModalClose}>
                                            <FaUser className="h-6 w-6 hover:text-gray-200" />
                                        </a>
                                    </>
                                )}
                            </div>
                            <ThemeToggler  />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
