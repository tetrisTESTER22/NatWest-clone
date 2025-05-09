import React from 'react';

const InsightsIcon = ({ active = false }: { active?: boolean }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17h2v2H3v-2zm4-4h2v6H7v-6zm4-4h2v10h-2V9zm4-4h2v14h-2V5zm4 8h2v6h-2v-6z"
        fill={active ? '#B084FF' : '#AAAAAA'}
      />
    </svg>
  );
  
  export default InsightsIcon;
  