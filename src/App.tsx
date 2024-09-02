import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Nomatch from './pages/Nomatch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </Router>
  );
}

export default App;
