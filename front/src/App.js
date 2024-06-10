import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/pages/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}


export default App;
