import React from 'react';
import { BrowserRouter as router, Routes, Route } from 'react-router-dom';
import Home from './views/pages/home/home';
import SignIn from './views/pages/sign-in/sign-in';
import User from './views/pages/user/user';
import Error404 from './views/pages/Error404/Error404';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sign-in' element={<SignIn />} />
        <Route path='/User' element={<User/>} />
        <Route path='/*' element={<Error404/>} />
      </Routes>
    </div>
  );
}


export default App;
