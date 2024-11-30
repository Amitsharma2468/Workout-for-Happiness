import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import AboutUs from './pages/AboutUs';
import Article from './pages/Article';
import Bodybuilding from './pages/Bodybuilding';
import FatLoss from './pages/FatLoss';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/programs/bodybuilding" element={<Bodybuilding />} />
        <Route path="/programs/fat-loss" element={<FatLoss />} />

       
       
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;