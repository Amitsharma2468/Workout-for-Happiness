import React, { useState } from "react";
import Modal from "./Modal"; // Correct path

const OpenModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <header className="flex justify-between items-center border-b-2 pb-4 mb-6">
        <h1 className="text-2xl font-bold">Access Modal Page</h1>
      </header>

      {/* Button to trigger the modal */}
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition mb-6"
        onClick={openModal}
      >
        Open Modal
      </button>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Welcome to the Modal!">
        <p className="text-lg text-center mb-4">
          This modal is accessible from the OpenModalPage component!
        </p>
        <button
          className="block mx-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          onClick={closeModal}
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default OpenModalPage;
