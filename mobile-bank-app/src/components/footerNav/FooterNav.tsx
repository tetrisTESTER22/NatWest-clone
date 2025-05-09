import HomeIcon from '../../icons/HomeIcon';
import HelpIcon from '../../icons/HelpIcon';
import PaymentsIcon from '../../icons/PaymentsIcon';
import InsightsIcon from '../../icons/InsightsIcon';
import ApplyIcon from '../../icons/ApplyIcon';
import './FooterNav.css';
import React from 'react';

export default function FooterNav() {
  return (
    <div className="bottom-nav">
      <div className="nav-item active">
        <HomeIcon active />
        <span className="nav-label">Home</span>
      </div>
      <div className="nav-item">
        <HelpIcon />
        <span className="nav-label">Help</span>
      </div>
      <div className="nav-item">
        <PaymentsIcon />
        <span className="nav-label">Payments</span>
      </div>
      <div className="nav-item">
        <InsightsIcon />
        <span className="nav-label">Insights</span>
      </div>
      <div className="nav-item">
        <ApplyIcon />
        <span className="nav-label">Apply</span>
      </div>
    </div>
  );
}

export {};