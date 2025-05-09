import Header from '../components/header/Header'
import AccountCard from '../components/accountCard/AccountCard'
import './Home.css'
import React from 'react';
import FooterNav from '../components/footerNav/FooterNav'
import ChevronDownIcon from '../icons/CheckIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import AddAccountIcon from '../icons/BankAccountCircleIcon'
import DotsIcon from '../icons/DotsIcon'
import SparkIcon from '../icons/SparkIcon'
import ArrowRightIconBlack from '../icons/ArrowRightIconBlack'

export default function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="section-card approval-card">
        <div className="approval-left">
          <ChevronDownIcon />
          <span className="approval-text">Approval requests</span>
        </div>
        <ArrowRightIcon />
      </div>

      <div className="section-header-1">
        <span>Accounts</span>
        <div className="section-edit">
          <span>Edit</span>
          <ArrowRightIcon />
        </div>
      </div>

      <AccountCard />

      <div className="section-card add-account-card">
        <div className="add-account-left">
          <AddAccountIcon />
          <span className="add-account-text">Add other bank accounts</span>
        </div>
        <DotsIcon />
      </div>

      <div className="section-header">
        <span>Widgets</span>
        <span className="badge-new">New</span>
      </div>

      <div className="widget-card">
        <div className="widget-content">
          <span className="widget-plus">+</span>
          <div className="widget-texts">
            <p className="widget-title">Add a Widget</p>
            <p className="widget-subtext">Quick access to what matters to you</p>
          </div>
        </div>
      </div>

      <div className="info-banner">
        <SparkIcon />
        <span className="info-text">Check out what’s new in your app</span>
        <ArrowRightIconBlack />
      </div>

      <FooterNav />
    </div>
  )
}
