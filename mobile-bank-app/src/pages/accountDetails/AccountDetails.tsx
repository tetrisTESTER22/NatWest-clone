import React, { useEffect, useState } from 'react';
import './AccountDetails.css';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import FooterNav from '../../components/footerNav/FooterNav';
import { useNavigate, useLocation } from 'react-router-dom';
import AccountCard from '../../components/accountCard/AccountCard';
import { loadTenantAccount } from '../../utils/loadTenantData';
import AnimatedPageWrapper from '../../components/animatedPage/AnimatedPage';
import { useNavigationDirection } from '../../context/NavigationDirectionContext';

type Props = {
  tenant: string;
};

export default function AccountDetails({ tenant }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setDirection } = useNavigationDirection();
  const direction = location.state?.direction || 'forward';
  const [account, setAccount] = useState<any>(null);

  useEffect(() => {
    async function fetchAccount() {
      const data = await loadTenantAccount(tenant);
      setAccount(data);
    }

    fetchAccount();
  }, [tenant]);

  if (!account) return <p></p>;

  return (
    <>
      <AnimatedPageWrapper>
        <div className="account-details-container">
          <div className="account-header-1">
          <div
            className="header-back"
            onClick={() => {
              setDirection('backward');  
              navigate(`/${tenant}/`, { state: { direction: 'backward' } });            
            }}
          >
              <ArrowLeftIcon />
            </div>
            <span className="header-title">My current account</span>
          </div>

          <AccountCard account={account} />

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
                  if (label === 'My transactions')
                    setDirection('forward');
                    navigate(`/${tenant}/transactions`, { state: { direction: 'forward' } });
                }}
              >
                <span>{label}</span>
                <ArrowRightIcon />
              </div>
            ))}
          </div>
        </div>
      </AnimatedPageWrapper>

      <FooterNav />
    </>
  );
}
