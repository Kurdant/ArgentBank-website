import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/pages/home/home';
import SignIn from './views/pages/sign-in/sign-in';
import User from './views/pages/user/user';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sign-in' element={<SignIn />} />
        <Route path='/User' element={<User/>} />
      </Routes>
    </div>
  );
}


export default App;
