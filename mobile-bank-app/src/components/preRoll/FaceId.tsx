import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import faceIdAnimation from './faceid.json';
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
        <Lottie
          animationData={faceIdAnimation}
          loop={false}
          autoplay
        />
      </div>
    </div>
  );
}
