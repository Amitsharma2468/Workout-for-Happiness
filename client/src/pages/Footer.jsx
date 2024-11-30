import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p>&copy; 2024 MuscleMate. All Rights Reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
