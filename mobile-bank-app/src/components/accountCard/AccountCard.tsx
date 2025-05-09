import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountCard.css';
import DotsIcon from '../../icons/DotsIcon';
import WalletIcon from '../../icons/WalletIcon';

export default function AccountCard() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    const isIcon = (e.target as HTMLElement).closest('.no-click');
    if (isIcon) return;
    navigate('/account');
  };

  return (
    <div className="account-card" onClick={handleClick}>
      <div className="account-header">
        <div className="account-header-left">
          <p className="account-title">FOLLOWS EJS</p>
          <p className="account-details">
            Select Account · 85710350 · 55-70-13
          </p>
        </div>
        <div className="no-click">
          <DotsIcon />
        </div>
      </div>

      <div className="account-bottom">
        <WalletIcon />
        <p className="account-balance">£0.00</p>
      </div>
    </div>
  );
}
