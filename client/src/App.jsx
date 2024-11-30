import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import AboutUs from './pages/AboutUs';
import Bodybuilding from './pages/Bodybuilding';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="programs/bodybuilding" element={<Bodybuilding />} />
       
       
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;