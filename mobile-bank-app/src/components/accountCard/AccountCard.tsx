import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountCard.css';
import DotsIcon from '../../icons/DotsIcon';
import WalletIcon from '../../icons/WalletIcon';
import { useNavigationDirection } from '../../context/NavigationDirectionContext'; 

type Props = {
  account: {
    title: string;
    accountNumber: string;
    sortCode: string;
    balance: number;
  };
};

export default function AccountCard({ account }: Props) {
  const navigate = useNavigate();
  const { setDirection } = useNavigationDirection();

  const handleClick = (e: React.MouseEvent) => {
    const isIcon = (e.target as HTMLElement).closest('.no-click');
    if (isIcon) return;

    setDirection('forward');
    navigate('account');
  };

  return (
    <div className="account-card" onClick={handleClick}>
      <div className="account-header">
        <div className="account-header-left">
          <p className="account-title">{account.title}</p>
          <p className="account-details">
            Select Account · {account.accountNumber} · {account.sortCode}
          </p>
        </div>
        <div className="no-click">
          <DotsIcon />
        </div>
      </div>

      <div className="account-bottom">
        <div className="account-icon">
          <WalletIcon />
        </div>
        <p className="account-balance">
          £{typeof account.balance === 'number' ? account.balance.toFixed(2) : '0.00'}
        </p>
      </div>
    </div>
  );
}
