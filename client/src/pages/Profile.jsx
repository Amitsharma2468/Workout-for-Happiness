import React from 'react'
import { FaUserAlt, FaWeight, FaRunning, FaListUl, FaConciergeBell } from 'react-icons/fa';
import Navbar from './Navbar';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-black to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Update Your Profile and Set Goals
          </h1>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Aside Section */}
        <aside className="w-full md:w-64 bg-gray-200 h-auto h-screen p-6 flex flex-col items-center">
           
          <h1 className="text-2xl font-bold text-gray-800 mb-6 mt-8">Profile Picture</h1>
          <div className="flex flex-col items-center mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white mb-4">
              <img src="./expert3.jpg" alt="profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Maria Marin
            </h2>
          </div>

          {/* Edit Profile Button */}
          <div className="w-full mt-8">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Edit Profile
            </button>
          </div>
          
        </aside>

        {/* Main Section */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Profile Details</h2>

            <form className="space-y-6">
              {/* Age Field */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="age">
                  Age
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg p-3">
                  <FaUserAlt className="text-gray-500 mr-3" />
                  <input 
                    type="number" 
                    id="age" 
                    placeholder='Enter your age' 
                    className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Weight Field */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="weight">
                  Weight (kg)
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg p-3">
                  <FaWeight className="text-gray-500 mr-3" />
                  <input 
                    type="number" 
                    id="weight" 
                    placeholder='Enter your weight in kg' 
                    className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Fitness Level Field */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="fitness">
                  Fitness Level
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg p-3">
                  <FaRunning className="text-gray-500 mr-3" />
                  <select 
                    id="fitness" 
                    className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled selected>Select your fitness level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Your Goals Field */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="goals">
                  Your Goals
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg p-3">
                  <FaListUl className="text-gray-500 mr-3" />
                  <select 
                    id="goals" 
                    className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled selected>Select your fitness goal</option>
                    <option value="weight_loss">Weight Loss</option>
                    <option value="weight_gain">Weight Gain</option>
                    <option value="muscle_gain">Muscle Gain</option>
                    <option value="endurance">Endurance</option>
                  </select>
                </div>
              </div>

              {/* Workout Types Field */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="workout">
                  Workout Types
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg p-3">
                  <FaConciergeBell className="text-gray-500 mr-3" />
                  <select 
                    id="workout" 
                    className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled selected>Select workout type</option>
                    <option value="cardio">Cardio</option>
                    <option value="strength-training">Strength Training</option>
                    <option value="flexibility">Flexibility</option>
                    <option value="HIIT">HIIT</option>
                    <option value="yoga">Yoga</option>
                  </select>
                </div>
              </div>

              {/* Dietary Restrictions Field */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="diet">
                  Dietary Restrictions
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg p-3">
                  
                  <textarea 
                    id="diet" 
                    placeholder='List any dietary restrictions you have' 
                    rows="3"
                    className="w-full bg-transparent focus:outline-none focus:ring-2  focus:border-transparent"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-8">
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Profile;
