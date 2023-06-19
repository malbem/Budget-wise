"use client"  
import React, { useState } from "react"; 
import Modal from "./Modal";
import Team from "./About/team"; 
import Support from "./About/support";
  
const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const handleOpenModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <footer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        {modalContent && (
          <>
            {modalContent}
          </>
        )}
      </Modal>
      <div className="pt-80 container px-6 py-8 mx-auto">
        <hr className="my-10 border-black dark:border-white" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-black dark:text-white">
            © 2023. All Rights Reserved.
          </p>
          <div className="dark:text-white flex mt-3 -mx-2 sm:mt-0">
            <a
              href="/"
              className="mx-2 text-sm hover:opacity-60 text-dark dark:text-white transition-colors duration-300"
            >
              About
            </a>

            <a
              onClick={() => handleOpenModal(<Support />)}
              className="mx-2 text-sm hover:opacity-60 hover:cursor-pointer text-dark dark:text-white transition-colors duration-300"
            >
              Contact
            </a>
            <a
              onClick={() => handleOpenModal(<Team />)}
              className="mx-2 text-sm hover:opacity-60 hover:cursor-pointer text-dark dark:text-white transition-colors duration-300"
            >
              Teams
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
