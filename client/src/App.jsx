import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import AboutUs from './pages/AboutUs';
import Article from './pages/Article';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/articles" element={<Article />} />
       
       
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;