// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import TenantRouter from './layout/TenantRouter';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Если зашли на корень сайта — редиректим на первого админа */}
        <Route path="/" element={<Navigate to="/d1" />} />

        {/* Все маршруты идут через TenantRouter */}
        <Route path="/:tenant/*" element={<TenantRouter />} />
      </Routes>
    </Router>
  );
}
