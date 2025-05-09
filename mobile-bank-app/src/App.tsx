// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AccountDetails from './pages/accountDetails/AccountDetails';
import React from 'react';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/account" element={<AccountDetails />} />
      </Routes>
    </Router>
  );
}
