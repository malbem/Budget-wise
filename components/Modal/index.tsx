import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, children }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleModalClick}
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-end">
              <button className="text-black hover:opacity-70" onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            <div className="text-black mt-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
