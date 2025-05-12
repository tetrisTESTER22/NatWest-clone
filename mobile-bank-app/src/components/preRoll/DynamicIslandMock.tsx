import React from 'react';

export default function DynamicIslandMock() {
    return (
      <div style={{
        position: 'fixed',
        top: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '140px',
        height: '35px',
        backgroundColor: 'black',
        borderRadius: '20px',
        zIndex: 9999,
      }} />
    );
  }
  