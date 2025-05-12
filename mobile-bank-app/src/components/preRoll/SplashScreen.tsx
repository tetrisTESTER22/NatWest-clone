import React, { useEffect, useState } from 'react';
import FaceIDScreen from './FaceId';
import './SplashScreen.css';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [showFaceID, setShowFaceID] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFaceID(true); 
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-container">
      <div className="splash-logos">
        <img src="/iconsPreRoll/teamgbcool.png" alt="TEAM GB" />
        <div className="splash-divider" />
        <img src="/iconsPreRoll/natwest-logo.png" alt="NatWest" />
        <div className="splash-divider" />
        <img src="/iconsPreRoll/BPA_logo_Vertical_white.png" alt="Paralympics GB" />
      </div>

      {showFaceID && (
        <div className="splash-overlay">
          <FaceIDScreen onComplete={onComplete} />
        </div>
      )}

      <div className="splash-bottom">
        <img src="/iconsPreRoll/fscs-protected-sticker.png" alt="FSCS" />
      </div>
    </div>
  );
}
