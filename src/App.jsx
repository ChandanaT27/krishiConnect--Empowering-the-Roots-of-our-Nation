import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import { Prices, Tutorials, Subsidies, Diseases, Login } from './pages/OtherPages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/subsidies" element={<Subsidies />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
