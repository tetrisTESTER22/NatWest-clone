import React, { useEffect, useRef, useState } from 'react';
import './FaceIDScreen.css';

export default function FaceIDScreen({ onComplete }: { onComplete: () => void }) {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      setReady(true);
    };

    if (video) {
      video.addEventListener('canplay', handleCanPlay);
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <div className="faceid-overlay">
      <div
        className="faceid-wrapper"
        style={{ visibility: ready ? 'visible' : 'hidden' }} // скрыт до готовности
      >
        <video
          ref={videoRef}
          src="/iconsPreRoll/faceid.mp4"
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
