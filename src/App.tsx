import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from 'pages/Home/Home';
import Basket from 'pages/Basket/Basket';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />

          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
