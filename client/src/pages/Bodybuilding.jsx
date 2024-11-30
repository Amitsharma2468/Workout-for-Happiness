import React from "react";
import Navbar from "./Navbar"; // Ensure Navbar.js exists
import Footer from "./Footer"; // Ensure Footer.js exists

const Bodybuilding = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-black text-white py-16">
          <div className="container mx-auto px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Bodybuilding Guide</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Your comprehensive beginner's guide to building muscle, improving strength, and achieving your fitness goals.
            </p>
          </div>
        </section>

        {/* Training Split Section */}
        <section className="py-16 px-8 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Training Split
            </h2>
            <p className="text-gray-600 leading-relaxed text-center mb-12">
              A training split is a way to divide your workouts throughout the week to focus on specific muscle groups each day. Here's an example of a beginner-friendly 5-day split:
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {trainingSplit.map((day, index) => (
                <TrainingDay key={index} day={day.day} focus={day.focus} image={day.image} />
              ))}
            </div>
          </div>
        </section>

        {/* Workout Plan Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Example Workout Plan
            </h2>
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Here's a sample workout plan for beginners, focusing on form, progressive overload, and balanced muscle development:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {workoutPlan.map((workout, index) => (
                <WorkoutPlan key={index} title={workout.title} exercises={workout.exercises} />
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Nutrition for Bodybuilding
            </h2>
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Nutrition plays a crucial role in bodybuilding. A balanced diet with adequate protein, healthy fats, and complex carbohydrates is essential to fuel your workouts and promote muscle recovery.
            </p>
            <ul className="list-disc list-inside max-w-2xl mx-auto text-gray-700">
              <li>Consume 1.2–2.0 grams of protein per kilogram of body weight daily.</li>
              <li>Focus on whole, nutrient-dense foods like lean meats, eggs, nuts, and legumes.</li>
              <li>Stay hydrated and consider post-workout recovery shakes.</li>
            </ul>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 px-8 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8">Success Tips</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {successTips.map((tip, index) => (
                <SuccessTip key={index} icon={tip.icon} title={tip.title} description={tip.description} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Data for Training Split
const trainingSplit = [
  { day: "Monday", focus: "Chest & Triceps", image: "/chesttricep.jpg" },
  { day: "Tuesday", focus: "Back & Biceps", image: "/backbiceps.jpg" },
  { day: "Wednesday", focus: "Legs", image: "/legs.jpg" },
  { day: "Thursday", focus: "Shoulders", image: "/shoulder.jpg" },
  { day: "Friday", focus: "Core & Cardio", image: "/cardio.jpg" },
];

// Data for Workout Plan
const workoutPlan = [
  {
    title: "Chest & Triceps",
    exercises: [
      { name: "Bench Press", sets: 3, reps: 10 },
      { name: "Incline Dumbbell Press", sets: 3, reps: 12 },
      { name: "Push-ups", sets: 3, reps: "Failure" },
      { name: "Tricep Dips", sets: 3, reps: 10 },
    ],
  },
  {
    title: "Back & Biceps",
    exercises: [
      { name: "Pull-ups", sets: 3, reps: "Failure" },
      { name: "Barbell Rows", sets: 4, reps: 10 },
      { name: "Lat Pulldowns", sets: 3, reps: 12 },
      { name: "Dumbbell Bicep Curls", sets: 3, reps: 12 },
      { name: "Hammer Curls", sets: 3, reps: 12 },
    ],
  },
  {
    title: "Legs",
    exercises: [
      { name: "Squats", sets: 4, reps: 12 },
      { name: "Lunges", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 15 },
      { name: "Calf Raises", sets: 3, reps: 20 },
    ],
  },
  {
    title: "Shoulders",
    exercises: [
      { name: "Overhead Press", sets: 4, reps: 8 },
      { name: "Arnold Press", sets: 3, reps: 12 },
      { name: "Lateral Raises", sets: 3, reps: 15 },
      { name: "Front Raises", sets: 3, reps: 15 },
      { name: "Face Pulls", sets: 3, reps: 12 },
      { name: "Shrugs", sets: 4, reps: 20 },
    ],
  },
  {
    title: "Core & Cardio",
    exercises: [
      { name: "Plank Hold", sets: 3, reps: "60 sec" },
      { name: "Bicycle Crunches", sets: 3, reps: 20 },
      { name: "Russian Twists", sets: 3, reps: "20 each side" },
      { name: "Leg Raises", sets: 3, reps: 15 },
      { name: "Mountain Climbers", sets: 3, reps: "30 sec" },
      { name: "HIIT Cardio", sets: 5, reps: "30 sec on/30 sec off" },
    ],
  },
];

// Data for Success Tips
const successTips = [
  { icon: "💪", title: "Stay Consistent", description: "Consistency is key to achieving your fitness goals." },
  { icon: "⏰", title: "Rest and Recovery", description: "Allow your body time to rest and recover for optimal results." },
  { icon: "🍴", title: "Proper Nutrition", description: "Fuel your body with the right nutrients to support growth." },
];

// Components
const TrainingDay = ({ day, focus, image }) => (
  <div
    className="text-center bg-gray-100 p-6 rounded-lg shadow-lg"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover", // Ensure the image covers the entire div
      backgroundPosition: "center", // Center the image
      backgroundRepeat: "no-repeat", // Prevent repeating the image
    }}
  >
    <div className="bg-black bg-opacity-50 p-6 rounded-lg"> {/* Dark overlay for text visibility */}
      <h3 className="text-lg font-bold text-white">{day}</h3>
      <p className="text-white">{focus}</p>
    </div>
  </div>
);

const WorkoutPlan = ({ title, exercises }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-center text-blue-600 mb-4">{title}</h3>
    <ul className="list-inside list-disc text-gray-700">
      {exercises.map((exercise, index) => (
        <li key={index}>
          {exercise.name} - {exercise.sets} sets x {exercise.reps} reps
        </li>
      ))}
    </ul>
  </div>
);

const SuccessTip = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default Bodybuilding;

