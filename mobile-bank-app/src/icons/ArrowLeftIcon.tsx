import React from 'react';

const ArrowLeftIcon = ({ color = '#c5afff' }: { color?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export default ArrowLeftIcon;
