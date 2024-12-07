// src/components/Dashboard.jsx

import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Sample data for Workout Progress Graph
  const workoutData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Workout Hours',
        data: [1, 2, 1.5, 3, 2, 0, 2.5], // Example data, can be fetched from API
        borderColor: '#2563eb', // Tailwind blue-500
        backgroundColor: 'rgba(37, 99, 235, 0.2)', // Semi-transparent blue
        pointBackgroundColor: '#2563eb',
        fill: true,
      },
    ],
  };

  const workoutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Workout Progress (Hours)',
      },
    },
  };

  // Sample data for Weight Loss / Gain Graph
  const weightData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [70, 69, 68.5, 68], // Example data, can be fetched from API
        backgroundColor: '#16a34a', // Tailwind green-500
        borderColor: '#16a34a',
        borderWidth: 1,
      },
    ],
  };

  const weightOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weight Loss / Gain (kg)',
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      {/* Header Section */}
      <header className="flex justify-between items-center border-b-2 pb-4 mb-6">
        <div className="flex items-center">
          <img
            src="/path/to/profile-pic.jpg" // Replace with dynamic user profile image
            alt="User Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">Welcome, [User Name]</h1> 
            <p className="text-sm text-gray-600">Stay on track, one step at a time!</p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Log Out
        </button>
      </header>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: 'Workouts Completed', value: '12/30', color: 'bg-blue-500' },
          { title: 'Calories Burned', value: '1543 kcal', color: 'bg-red-500' },
          { title: 'Total Weight Lost', value: '2.5 kg', color: 'bg-green-500' },
          { title: 'Active Days This Week', value: '4/7', color: 'bg-purple-500' },
        ].map((stat, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-lg ${stat.color} text-white`}>
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Graphs Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4">Workout Progress</h2>
          <div className="h-64">
            <Line data={workoutData} options={workoutOptions} />
          </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4">Weight Loss / Gain</h2>
          <div className="h-64">
            <Bar data={weightData} options={weightOptions} />
          </div>
        </div>
      </section>

      {/* Dietary Plans & Activities */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4">Today's Dietary Plan</h2>
          <ul className="space-y-2">
            {[
              { time: '8:00 AM', meal: 'Breakfast - Oatmeal & Fruits' },
              { time: '12:00 PM', meal: 'Lunch - Grilled Chicken & Rice' },
              { time: '4:00 PM', meal: 'Snack - Protein Shake' },
              { time: '7:00 PM', meal: 'Dinner - Veggie Stir Fry' },
            ].map((meal, index) => (
              <li key={index} className="flex justify-between text-sm">
                <span>{meal.time}</span>
                <span>{meal.meal}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4">Today's Workout</h2>
          <ul className="space-y-2">
            {[
              { time: '6:00 AM', activity: 'Running - 30 mins' },
              { time: '10:00 AM', activity: 'Yoga - 20 mins' },
              { time: '5:00 PM', activity: 'Strength Training - 45 mins' },
            ].map((workout, index) => (
              <li key={index} className="flex justify-between text-sm">
                <span>{workout.time}</span>
                <span>{workout.activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
