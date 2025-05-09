import React from 'react';
import './TransactionsPage.css';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';
import WalletIcon from '../../icons/WalletIcon';
import InfoIcon from '../../icons/InfoIcon';
import FooterNav from '../../components/footerNav/FooterNav';
import DownloadIcon from '../../icons/DownloadIcon';
import CalendarIcon from '../../icons/CalendarIcon';
import SearchIcon from '../../icons/SearchIcon';
import { useNavigate } from 'react-router-dom';
import { accountData } from '../../data/AccountData';
import { transactionData } from '../../data/TransactionData';
import AccountCard from '../../components/accountCard/AccountCard';

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

      <AccountCard />

      <div className="transaction-controls">
        <div className="filter-tabs">
          <div className="filter-tab active">All</div>
          <div className="filter-tab">In</div>
          <div className="filter-tab">Out</div>
        </div>
        <div className="filter-icons">
          <DownloadIcon />
          <CalendarIcon />
          <SearchIcon />
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
                  {tx.amount > 0 ? '+' : '-'}£{Math.abs(tx.amount).toFixed(2)}
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
