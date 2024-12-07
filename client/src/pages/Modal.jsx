import React from "react";

const Modal = ({ isOpen, onClose, title = "Modal Title", children }) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-black text-2xl">
            &times;
          </button>
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;