import React from 'react';
import './TransactionsPage.css';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';
import WalletIcon from '../../icons/WalletIcon';
import InfoIcon from '../../icons/InfoIcon';
import FooterNav from '../../components/footerNav/FooterNav';
import { useNavigate } from 'react-router-dom';
import { accountData } from '../../data/AccountData';
import { transactionData } from '../../data/TransactionData';

export default function TransactionPage() {
  const navigate = useNavigate();

  return (
    <div className="transactions-container">
      <div className="transaction-header">
        <div className="header-back" onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </div>
        <span className="header-title">My transactions</span>
      </div>

      <div className="tab-bar">
        <div className="tab active">Transactions</div>
        <div className="tab">Spending</div>
      </div>

      <div className="account-card-details">
        <div className="account-card-title">
          <p className="account-name">{accountData.title}</p>
          <p className="account-meta">
            <InfoIcon /> Select Account · {accountData.accountNumber} · {accountData.sortCode}
          </p>
        </div>
        <WalletIcon />
        <div className="account-balance">
          <InfoIcon />
          <span>£{parseFloat(accountData.balance).toFixed(2)}</span>
        </div>
      </div>

      <div className="transaction-groups">
        {transactionData.map(group => (
          <div key={group.label} className="transaction-group">
            <p className="transaction-label">{group.label}</p>
            {group.transactions.map((tx, index) => (
              <div className="transaction-item" key={index}>
                <div className="transaction-left">
                  <img src={tx.icon} alt="icon" className="transaction-icon" />
                  <span className="transaction-name">{tx.name}</span>
                </div>
                <span className={`transaction-amount ${tx.amount > 0 ? 'positive' : 'negative'}`}>
                  {tx.amount > 0 ? '+ ' : '- '}£{Math.abs(tx.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <FooterNav />
    </div>
  );
}