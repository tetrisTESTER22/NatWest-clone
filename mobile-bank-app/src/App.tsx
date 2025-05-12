import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import TenantRouter from './layout/TenantRouter';
import SplashScreen from './components/preRoll/SplashScreen';
import DynamicIslandMock from './components/preRoll/DynamicIslandMock';

export default function App() {
  const [step, setStep] = useState<'splash' | 'app'>('splash');

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setStep('app');
    }, 4000);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <Router>
      {step === 'splash' && <SplashScreen onComplete={() => setStep('app')} />}
      {step === 'app' && (
        
        <Routes>
          <Route path="/" element={<Navigate to="/ad1" />} />
          <Route path="/:tenant/*" element={<TenantRouter />} />
        </Routes>
      )}
    </Router>
  );
}
