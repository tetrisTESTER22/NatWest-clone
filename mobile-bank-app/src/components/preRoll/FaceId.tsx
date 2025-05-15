import React, { useEffect } from 'react';
import './FaceIDScreen.css';

export default function FaceIDScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 7500); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="faceid-overlay">
      <div className="faceid-wrapper">
        <video
          src="/iconsPreRoll/faceid.mov" 
          autoPlay
          muted
          playsInline
          onEnded={onComplete} 
          style={{ width: '170px', height: '170px', borderRadius: '20px' }}
        />
      </div>
    </div>
  );
}
