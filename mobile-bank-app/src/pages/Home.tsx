import Header from '../components/header/Header'
import AccountCard from '../components/accountCard/AccountCard'
import WidgetCard from '../components/widgetCard/WidgetCard'
import './Home.css'

import HomeIcon from '../icons/HomeIcon'
import HelpIcon from '../icons/HelpIcon'
import PaymentsIcon from '../icons/PaymentsIcon'
import InsightsIcon from '../icons/InsightsIcon'
import ApplyIcon from '../icons/ApplyIcon'
import ChevronDownIcon from '../icons/CheckIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'

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

      <div className="section-header">
        <span>Accounts</span>
        <span className="section-edit">Edit</span>
      </div>

      <AccountCard />

      <div className="section-card">Add other bank accounts</div>

      <div className="section-header">
        <span>Widgets</span>
        <span className="badge-new">New</span>
      </div>

      <WidgetCard />

      <div className="info-banner">Check out what’s new in your app</div>

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
    </div>
  );
}
