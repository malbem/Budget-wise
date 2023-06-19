import React, { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
  
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[9999]"
          onClick={handleModalClick}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg p-6 max-w-[90vw] max-h-[90vh] relative"
          >
            <button
              className="absolute top-4 right-4 text-black hover:text-[#FF0000]"
              onClick={onClose}
            >
              <FaTimes />
            </button>
            <div className="fixed bottom-0 left-0 w-full pointer-events-none">
              <div className="bg-gradient-to-t from-white via-white to-transparent h-8"></div>
            </div>
            <div className="text-black">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
