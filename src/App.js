import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import ItemDetail from './components/ItemDetail.jsx';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;