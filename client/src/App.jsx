import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutUs />} />
       
       
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;