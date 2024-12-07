import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import AboutUs from './pages/AboutUs';
import Article from './pages/Article';
import Bodybuilding from './pages/Bodybuilding';
import FatLoss from './pages/FatLoss';
import Register from './pages/Register';
import Login from './pages/Login';
import WeightGain from './pages/Weightgain';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/programs/bodybuilding" element={<Bodybuilding />} />
        <Route path="/programs/fat-loss" element={<FatLoss />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/programs/weight-gain" element={<WeightGain/>} />

       
       
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;