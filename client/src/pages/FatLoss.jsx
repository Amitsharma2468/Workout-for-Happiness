import React from "react";
import { FaDumbbell, FaUtensils, FaHeartbeat, FaRunning } from "react-icons/fa";
import { GiWaterBottle, GiMuscleUp } from "react-icons/gi";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FatLossGuide = () => {
  return (
    <div className="min-h-screen bg-gray-100">

         {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-black to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Your Ultimate Fat Loss Guide
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover proven strategies, effective workouts, and healthy meal
            plans to help you shed unwanted fat and achieve your fitness goals.
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Understanding Fat Loss
        </h2>
        <img
          src="/fatloss.png"
          alt="Understanding Fat Loss"
          className="rounded-lg shadow-lg mb-6 mx-auto"
        />
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Fat loss is a complex process that involves burning more calories than
          you consume. It requires a combination of proper nutrition, consistent
          physical activity, and a sustainable lifestyle. Whether you're a
          beginner or an experienced fitness enthusiast, this guide will provide
          you with actionable tips and techniques to optimize your fat loss
          journey.
        </p>
      </section>

      {/* Tips Section */}
      <section className="container mx-auto py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Top Fat Loss Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {fatLossTips.map((tip, index) => (
            <TipCard key={index} {...tip} />
          ))}
        </div>
      </section>

      {/* Meal Plans Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Sample Meal Plan for Fat Loss
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="space-y-4">
            {mealPlan.map((meal, index) => (
              <li key={index} className="text-gray-700 text-lg flex items-center">
                <FaUtensils className="text-black mr-4" />
                <strong>{meal.time}: </strong> {meal.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workout Plan Section */}
      <section className="container mx-auto py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Effective Workout Routine
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {workoutPlan.map((exercise, index) => (
            <WorkoutCard key={index} {...exercise} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Static Fat Loss Tips Data with Icons
const fatLossTips = [
  {
    icon: <FaRunning className="text-black text-3xl" />,
    title: "Track Your Calories",
    description:
      "Monitor your daily caloric intake and ensure you’re in a calorie deficit to lose fat.",
  },
  {
    icon: <GiMuscleUp className="text-black text-3xl" />,
    title: "Increase Protein Intake",
    description:
      "Protein helps preserve muscle mass and keeps you feeling full for longer.",
  },
  {
    icon: <FaDumbbell className="text-black text-3xl" />,
    title: "Incorporate Strength Training",
    description:
      "Building muscle increases your resting metabolic rate, helping you burn more calories.",
  },
  {
    icon: <GiWaterBottle className="text-black text-3xl" />,
    title: "Stay Hydrated",
    description:
      "Drinking water can boost your metabolism and help control hunger.",
  },
];

// Static Meal Plan Data
const mealPlan = [
  { time: "Breakfast", description: " Oatmeal with berries and a protein shake" },
  { time: "Snack", description: " A handful of almonds and a piece of fruit" },
  { time: "Lunch", description: " Grilled chicken salad with olive oil dressing" },
  { time: "Dinner", description: " Baked salmon with steamed broccoli and quinoa" },
  { time: "Evening Snack", description: " Greek yogurt with a drizzle of honey" },
];

// Static Workout Plan Data
const workoutPlan = [
  {
    name: "HIIT Cardio",
    icon: <FaHeartbeat className="text-black text-3xl" />,
    description: "20 minutes of high-intensity interval training to burn fat quickly.",
  },
  {
    name: "Strength Training",
    icon: <FaDumbbell className="text-black text-3xl" />,
    description: "Focus on compound exercises like squats, deadlifts, and bench presses.",
  },
  {
    name: "Core Exercises",
    icon: <GiMuscleUp className="text-black text-3xl" />,
    description: "Planks, leg raises, and Russian twists to strengthen your core.",
  },
  {
    name: "Active Recovery",
    icon: <FaRunning className="text-black text-3xl" />,
    description: "Light yoga or walking to aid in muscle recovery and maintain activity levels.",
  },
];

// TipCard Component with Icons
const TipCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
      {icon}
      <div className="ml-4">
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

// WorkoutCard Component
const WorkoutCard = ({ icon, name, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
      {icon}
      <div className="ml-4">
        <h4 className="text-xl font-bold text-gray-800">{name}</h4>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FatLossGuide;
