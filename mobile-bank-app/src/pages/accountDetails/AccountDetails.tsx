import React from 'react';
import './AccountDetails.css';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import FooterNav from '../../components/footerNav/FooterNav';
import { useNavigate } from 'react-router-dom';
import AccountCard from '../../components/accountCard/AccountCard';

export default function AccountDetails() {
  const navigate = useNavigate();

  return (
    <div className="account-details-container">
      <div className="account-header-1">
        <div className="header-back" onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </div>
        <span className="header-title">My current account</span>
      </div>

      <AccountCard />

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
          <div
            className="action-item"
            key={label}
            onClick={() => {
              if (label === 'My transactions') navigate('/transactions');
            }}
          >
            <span>{label}</span>
            <ArrowRightIcon />
          </div>
        ))}
      </div>

      <FooterNav />
    </div>
  );
}
