import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component

const Landingpage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4">
          <h1 className="text-5xl font-bold uppercase">Welcome to MuscleMate</h1>
          <p className="mt-4 text-lg">
            Your journey to a healthier, stronger you starts here.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-md uppercase">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 uppercase">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/path/to/icon1.png"
                alt="Personalized Plans"
                className="mx-auto h-16 mb-4"
              />
              <h3 className="text-xl font-semibold uppercase">
                Personalized Plans
              </h3>
              <p className="mt-2 text-gray-600">
                Get a fitness program tailored to your goals.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/path/to/icon2.png"
                alt="Expert Coaches"
                className="mx-auto h-16 mb-4"
              />
              <h3 className="text-xl font-semibold uppercase">Expert Coaches</h3>
              <p className="mt-2 text-gray-600">
                Learn from certified trainers and professionals.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/path/to/icon3.png"
                alt="Community Support"
                className="mx-auto h-16 mb-4"
              />
              <h3 className="text-xl font-semibold uppercase">
                Community Support
              </h3>
              <p className="mt-2 text-gray-600">
                Join a community that motivates and inspires you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 uppercase">
            Explore Our Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold uppercase mb-4">Bodybuilding</h3>
              <p className="text-gray-600">
                Build muscle and sculpt your physique with our expert plans.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md uppercase">
                Learn More
              </button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold uppercase mb-4">Fat Loss</h3>
              <p className="text-gray-600">
                Shed fat and achieve a lean, toned body.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md uppercase">
                Learn More
              </button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold uppercase mb-4">Weight Gain</h3>
              <p className="text-gray-600">
                Safely increase your weight with guided plans.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md uppercase">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 uppercase">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "MuscleMate completely transformed my life! I've never felt
                stronger or healthier."
              </p>
              <h3 className="mt-4 text-xl font-semibold">- Fatima A.</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "The coaches and community support are amazing. Highly
                recommended!"
              </p>
              <h3 className="mt-4 text-xl font-semibold">- Anonto F.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Landingpage;
