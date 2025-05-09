import React from 'react';

import './AccountDetails.css';
import ArrowLeftIcon from '/Users/admin/Documents/GitHub/NatWest-clone/mobile-bank-app/src/icons/ArrowLeftIcon';
import InfoIcon from '/Users/admin/Documents/GitHub/NatWest-clone/mobile-bank-app/src/icons/InfoIcon';
import WalletIcon from '/Users/admin/Documents/GitHub/NatWest-clone/mobile-bank-app/src/icons/WalletIcon';
import ArrowRightIcon from '/Users/admin/Documents/GitHub/NatWest-clone/mobile-bank-app/src/icons/ArrowRightIcon';
import FooterNav from '../../components/footerNav/FooterNav';
import { useNavigate } from 'react-router-dom';


export default function AccountDetails() {
  const navigate = useNavigate();
  return (
    <div className="account-details-container">
<div className="account-header-1">
<div className="header-back" onClick={() => navigate(-1)}>    <ArrowLeftIcon />
  </div>
  <span className="header-title">My current account</span>
</div>

      <div className="account-card-details">
        <div className="account-card-title">
          <p className="account-name">FOLLOWS EJS</p>
          <p className="account-meta">
            <InfoIcon /> Select Account · 85710350 · 55-70-13
          </p>
        </div>
        <WalletIcon />
        <div className="account-balance">
          <InfoIcon />
          <span>£0.00</span>
        </div>
      </div>

      <div className="account-actions">
        {[
          'My transactions',
          'Payments & transfers',
          'Manage cards & Apple Wallet',
          'My overdraft',
          'Get Cash',
          'Round Ups',
          'Direct Debits',
          'Standing Orders',
          'Change my account type',
          'Switch my account',
          'Deposit a cheque',
          'Statements',
          'Certificate of interest',
          'Account settings',
          'Close this account'
        ].map((label) => (
          <div className="action-item" key={label}>
            <span>{label}</span>
            <ArrowRightIcon />
          </div>
        ))}
      </div>
      <FooterNav />
    </div>
  );
}
