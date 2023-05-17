import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import Aisearch from './components/Aisearch';
import Aichat from './components/Aichat';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
          <Route path="/Aisearch" element={<Aisearch />} />
          <Route path="/Aichat" element={<Aichat />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
