import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import TenantRouter from './layout/TenantRouter';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/ad1" />} />
        <Route path="/:tenant/*" element={<TenantRouter />} />
      </Routes>
    </Router>
  );
}
