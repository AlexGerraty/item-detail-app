import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import ItemDetail from './components/ItemDetail.jsx';


function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;