import './AccountCard.css'
import DotsIcon from '../../icons/DotsIcon'
import WalletIcon from '../../icons/WalletIcon'

export default function AccountCard() {
  return (
    <div className="account-card">
      <div className="account-header">
        <div>
          <p className="account-title">FOLLOWS EJS</p>
          <p className="account-details">
            Select Account · 85710350 · 55-70-13
          </p>
        </div>
        <DotsIcon />
      </div>

      <div className="account-bottom">
        <WalletIcon />
        <p className="account-balance">£0.00</p>
      </div>
    </div>
  )
}
