import React from "react";
import Navbar from "./Navbar"; // Ensure Navbar.js exists
import Footer from "./Footer"; // Ensure Footer.js exists

const WeightGain = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Larger Image */}
      <header className="relative bg-gradient-to-r from-black to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            How to Gain Weight in a Healthy Way
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover effective strategies, expert tips, and meal ideas to help you gain weight safely and sustainably.
          </p>
        </div>
        {/* Background Image with increased height */}
        <img
          src="/weightgain.jpg" // Update with your image path
          alt="Healthy Weight Gain"
          className="absolute top-0 left-0 w-full h-[500px] md:h-[600px] object-cover opacity-50"
        />
      </header>

      {/* Key Points Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Key Points for Healthy Weight Gain
        </h2>
        <ul className="space-y-6">
          <li className="text-lg md:text-xl">
            <strong>Increase Calorie Intake:</strong> Eat more calories than your body burns. Focus on nutrient-dense foods like nuts, seeds, and whole grains.
          </li>
          <li className="text-lg md:text-xl">
            <strong>Eat More Protein:</strong> Protein helps to build muscle mass. Include lean meats, eggs, and plant-based proteins in your diet.
          </li>
          <li className="text-lg md:text-xl">
            <strong>Focus on Healthy Fats:</strong> Incorporate healthy fats from avocados, olive oil, and fatty fish into your meals.
          </li>
        </ul>
      </section>

      {/* Tips Section */}
      <section className="container mx-auto py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Tips for Gaining Weight
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">1. Eat More Meals</h3>
            <p className="text-gray-600 mt-4">
              Eating smaller, more frequent meals throughout the day can help you increase your calorie intake without feeling overly full.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">2. Drink High-Calorie Beverages</h3>
            <p className="text-gray-600 mt-4">
              Drink smoothies, milkshakes, or homemade high-calorie drinks to boost your calorie intake.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">3. Weight Training</h3>
            <p className="text-gray-600 mt-4">
              Engage in weight training to build muscle, which can help you gain weight in a healthy and sustainable way.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">4. Add Healthy Snacks</h3>
            <p className="text-gray-600 mt-4">
              Snack on calorie-dense foods like trail mix, protein bars, or nut butter throughout the day to increase your intake.
            </p>
          </div>
        </div>
      </section>

      {/* Meal Ideas Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Healthy Meal Ideas for Weight Gain
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Breakfast</h3>
            <ul className="list-disc pl-5 text-gray-600 mt-4">
              <li>Oatmeal with peanut butter and banana</li>
              <li>Avocado toast with eggs</li>
              <li>Greek yogurt with granola and almonds</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Lunch</h3>
            <ul className="list-disc pl-5 text-gray-600 mt-4">
              <li>Chicken salad with olive oil dressing</li>
              <li>Quinoa with roasted vegetables and avocado</li>
              <li>Salmon with sweet potato and greens</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Dinner</h3>
            <ul className="list-disc pl-5 text-gray-600 mt-4">
              <li>Grilled steak with potatoes and steamed broccoli</li>
              <li>Chicken stir-fry with brown rice</li>
              <li>Spaghetti with meatballs and a side salad</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Snacks</h3>
            <ul className="list-disc pl-5 text-gray-600 mt-4">
              <li>Trail mix with nuts and dried fruit</li>
              <li>Protein bars</li>
              <li>Whole grain crackers with cheese</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WeightGain;
