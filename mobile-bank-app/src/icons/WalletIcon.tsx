import React from 'react';

const WalletIcon = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="rotate(-8 100 100)">
      <rect x="30" y="60" width="120" height="80" rx="10" fill="#3C007A" stroke="#B066FF" strokeWidth="6" />
      <rect x="120" y="90" width="40" height="30" rx="4" fill="#3C007A" stroke="#B066FF" strokeWidth="6" />
      <circle cx="140" cy="105" r="5" fill="#B066FF" />
      <line x1="130" y1="30" x2="130" y2="20" stroke="#B066FF" strokeWidth="4" strokeLinecap="round" />
      <line x1="140" y1="32" x2="145" y2="22" stroke="#B066FF" strokeWidth="4" strokeLinecap="round" />
      <line x1="120" y1="32" x2="115" y2="22" stroke="#B066FF" strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Поднятая линия */}
    <line x1="40" y1="144" x2="160" y2="144"  />
  </svg>
);

export default WalletIcon;

